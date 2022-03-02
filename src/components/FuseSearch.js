import Fuse from "fuse.js";
import React from "react";

export default function FuseSearch(props) {
    console.log(props)
    const FighterData = require('../data/fighterData.json'); //(with path)
    // console.log(typeof(FighterData))
    // console.log(FighterData)
    const options = {
        // isCaseSensitive: false,
        // includeScore: false,
        // shouldSort: true,
        // includeMatches: false,
        // findAllMatches: false,
        // minMatchCharLength: 1,
        // location: 0,
        // threshold: 0.6,
        // distance: 100,
        // useExtendedSearch: false,
        // ignoreLocation: false,
        // ignoreFieldNorm: false,
        // fieldNormWeight: 1,
        keys: [
          "Name",
          "Nickname",
          "First Name",
          "Last Name"
        ]
      };
      
    const fuse = new Fuse(FighterData, options);
      
      // Change the pattern
    const pattern = props.Input
    let results = fuse.search(pattern)
    console.log(results[0])
    let TopResult = Object.entries(results[0])

    const [Fighter, setFighter] = React.useState(TopResult)
    function getFighter() {
      setFighter(TopResult)
      
    // console.log(ResultsElements)
    }
    // let ResultsElements = Fighter.map((([key, value]) => (<li>{key}: {value}</li>)))
    // console.log(typeof(Fighter))
    // // let ResultsElements = TopResult.forEach((([key, value]) => (<li>{key}: {value}</li>)))
    // console.log(ResultsElements)
    let entries = Object.entries(Fighter[0])
    console.log(entries)
    let elems = Object.entries(entries[1][1]).map(([key, value]) => (
      <li>{key}: {value}</li>
    ));
    console.log(typeof(elems))
    return (
      {elems}
    )
      
  
}