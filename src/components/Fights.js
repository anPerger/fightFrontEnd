import { useState } from 'react';
import FightSearch from './FightSearch';
import FightSeachAccordion from './FightSearchAccordion';

const fightString = require('../data/fightsData.json');
const fightObj = JSON.parse(fightString)

const fightData = fightObj.map(({_id, ...rest}) => {
    return rest;
  });


const filterPosts = (fightData, query) => {
    if (!query) {
        return fightData;
    }

    return fightData.filter((fight) => {
        const postName = fight.fight_id.toLowerCase();
        return postName.includes(query);
    });
};

const Events = () => {
    // console.log(fightData)
    const { search } = window.location;
    const query = new URLSearchParams(search).get('s');
    const [searchQuery, setSearchQuery] = useState(query || '');
    const filteredPosts = filterPosts(fightData, query);
    return (
        <div>
            <h2>Search by event or fighter</h2>
            <FightSearch 
             searchQuery={searchQuery}
             setSearchQuery={setSearchQuery}
             />
            <FightSeachAccordion filteredPosts={filteredPosts} />
            {/* <ul>
            {filteredPosts.map((fight) => (
                    <li key={fight.fight_id}>{fight.fight_id}</li>
                ))}         
            </ul> */}
        </div>
)
    
}
export default Events