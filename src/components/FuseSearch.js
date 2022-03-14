import Fuse from "fuse.js";
import React from "react";
import Stats from "./Stats"
import ScatterAxis from "./ScatterAxis"

export default function FuseSearch(props) {
    console.log(props)
    // const FighterData = require('../data/fighterStats.json'); //(with path)
    const fighterString = require('../data/fighterData.json');
    const FighterData = JSON.parse(fighterString)
    // console.log(typeof(FighterData))
    // console.log(FighterData)


    const AllStats = []
    for(const x in FighterData) {
      let data = FighterData[x]
      let fighter = {
          "Name": data.name,
          "First Name": data.first,
          "Last Name": data.last,
          "Nickname": data.nickname,
          "Full Name": data.FullName,
          "Stance": data.stance,
          // "Date of Birth": DoB,
          "Weight Class": data.weightclass,
          "Height (IN)": data.heightIN,
          "Reach (IN)": data.reachIN,
          "Total Strikes Landed": data.sumTotStksLnd,
          "Total Strikes Attempted": data.sumTotStksAtt,
          "Significant Strikes Landed": data.sumSigStksLnd,
          "Significant Strikes Attempted": data.sumSigStksAtt,
          "Takedowns Landed": data.sumTDsLnd,
          "Takedowns Attempted": data.sumTDsAtt,
          "Submission Attempts": data.sumSubAtt,
          "Control Seconds": data.sumCtrlSec,
          "Knock Downs": data.sumKDs,
          "Reversals": data.sumRevs,
          "Significant Body Strikes Landed": data.sumSigBodyLnd,
          "Significant Body Strikes Attempted": data.sumSigBodyAtt,
          "Significant Head Strikes Landed": data.sumSigHeadLnd,
          "Significant Head Strikes Attempted": data.sumSigHeadAtt,
          "Significant Leg Strikes Landed": data.sumSigLegLnd,
          "Significant Leg Strikes Attempted": data.sumSigLegAtt,
          "Significant Distance Strikes Landed": data.sumSigDistLnd,
          "Significant Distance Strikes Attempted": data.sumSigDistAtt,
          "Significant Clinch Strikes Landed": data.sumSigClchLnd,
          "Significant Clinch Strikes Attempted": data.sumSigClchAtt,
          "Significant Ground Strikes Landed": data.sumSigGndLnd,
          "Significant Ground Strikes Attempted": data.sumSigGndAtt,
          "Total Strikes Absorbed": data.sumTotStksAbs,
          "Total Strikes Seen": data.sumTotStksSeen,
          "Significan Strikes Absorbed": data.sumSigStksAbs,
          "Significant Strikes Seen": data.sumSigStksSeen,
          "Takedowns Absorbed": data.sumTDsAbs,
          "Takedowns Seen": data.sumTDsSeen,
          "Submissions Escaped": data.sumSubEsc,
          "Controled Seconds": data.sumCtrldSec,
          "Knocked Down": data.sumKedD,
          "Reversed": data.sumReversed,
          "Significant Body Strikes Absorbed": data.sumSigBodyAbs,
          "Significant Body Strikes Seen": data.sumSigBodySeen,
          "Significant Head Strikes Absorbed": data.sumSigHeadAbs,
          "Significant Head Strikes Seen": data.sumSigHeadSeen,
          "Significant Leg Strikes Absorbed": data.sumSigLegAbs,
          "Significant Leg Strikes Seen": data.sumSigLegSeen,
          "Significant Distance Strikes Absorbed": data.sumSigDistAbs,
          "Significant Distance Strikes Seen": data.sumSigDistSeen,
          "Significant Clinch Strikes Absorbed": data.sumSigClchAbs,
          "Significant Clinch Strikes Seen": data.sumSigClchSeen,
          "Significant Ground Strikes Absorbed": data.sumSigGndAbs,
          "Significant Ground Strikes Seen": data.sumSigGndSeen,
          "Fight Seconds": data.sumFightSec,
          "Decision Wins": data.sumDecWin,
          "Submission Wins": data.sumSubWin,
          "(T)KO Wins": data.sumKOWin,
          "DQ Wins": data.sumDQWin,
          "Decision Losses": data.sumDecLoss,
          "Submission Losses": data.sumSubLoss,
          "(T)KO Losses": data.sumKOLoss,
          "DQ Losses": data.sumDQLoss,
          "Wins": data.wins,
          "Losses": data.losses,
          "Draws": data.draws,
          "No Contests": data.NCs,
          "Title Fights": data.sumTitleFights,
          "Win %": data.winPCT,
          "Fights": data.fights,
          "Total Strikes Landed Per Minute": data.TotStkPerMin,
          "Significant Strikes Landed Per Minute": data.SigStkPerMin,
          "Total Strike Accuracy %": data.TotStkAcc,
          "Significant Strike Accuracy %": data.SigStkAcc,
          "Significant Head Strikes Landed Per Minute": data.StkHeadPerMin,
          "Significant Body Strikes Landed Per Minute": data.StkBodyPerMin,
          "Significant Leg Strikes Landed Per Minutes": data.StkLegPerMin,
          "Significant Head Strike Accuracy %": data.SigHeadStkAcc,
          "Significant Body Strike Accuracy %": data.SigBodyStkAcc,
          "Significant Leg Strike Accuracy %": data.SigLegStkAcc,
          "Significant Distance Strikes Landed Per Minute": data.StkDistPerMin,
          "Significant Clinch Strikes Landed Per Minute": data.StkClchPerMin,
          "Significant Ground Strikes Landed Per Minute": data.StkGndPerMin,
          "Significant Distance Strike Accuracy %": data.SigDistStkAcc,
          "Significant Clinch Strike Accuracy %": data.SigClchStkAcc,
          "Significant Ground Strike Accuracy %": data.SigGndStkAcc,
          "Total Strikes Absorbed Per Minute": data.TotStkAbsPerMin,
          "Significant Strikes Absorbed Per Minute": data.SigStkAbsPerMin,
          "Total Strike Defense %": data.TotStkDef,
          "Significant Strike Defense %": data.SigStkDef,
          "Significant Head Strikes Absorbed Per Minute": data.StkHeadAbsPerMin,
          "Significant Body Strikes Absorbed Per Minute": data.StkBodyAbsPerMin,
          "Significant Leg Strikes Absorbed Per Minute": data.StkLegAbsPerMin,
          "Significant Head Strike Defense %": data.SigHeadStkDef,
          "Significant Body Strike Defense %": data.SigBodyStkDef,
          "Significant Leg Strike Defense %": data.SigLegStkDef,
          "Significant Distance Strikes Absorbed Per Minute": data.StkDistAbsPerMin,
          "Significant Clinch Strikes Absorbed Per Minute": data.StkClchAbsPerMin,
          "Significant Ground Strikes Absorbed Per Minute": data.StkGndAbsPerMin,
          "Significant Distance Strike Defense %": data.SigDistStkDef,
          "Significant Clinch Strike Defense %": data.SigClchStkDef,
          "Significant Ground Strike Defense %": data.SigGndStkDef,
          "Total Strikes Per Minute Differential": data.TotStkPerMinDiff,
          "Significant Strikes Per Minute Differential": data.SigStkPerMinDiff,
          "Control Seconds Per Minute": data.CtrlSecPerMin,
          "Controled Seconds Per Minute": data.CtrldSecPerMin,
          "Control Seconds Differential": data.CtrlDiff,
          "Takedown Accuracy %": data.TDAcc,
          "Takedown Defense %": data.TDDef,
          "Takedowns Per Minute": data.TDsPerMin,
          "Takedowns Absorbed Per Minute": data.TDsAbsPerMin,
          "Knock Downs Per 100 Strikes Landed": data.KDsPer100Stk,
          "Knocked Down Per 100 Strikes Absorbed": data.KedDPer100StkAbs,
          "Submission Defense %": data.SubDef,
          "Submission Accuracy %": data.SubAcc,
          "Submission Attempts Per Minute": data.SubAttPerMin,
          "Current Age": data.age,
          "Age of Last Fight": data.ageLastFight
        }
      AllStats.push(fighter)
      }

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
      
    const fuse = new Fuse(AllStats, options);
      
      // Change the pattern
    const pattern = props.Input
    console.log(pattern)
    let results = fuse.search(pattern)
    // console.log(results[0])
    let TopResult = results[0].item
   
    return (
      <div>
      <Stats key="Full Name" TopResult={TopResult} />
      <ScatterAxis AllStats={AllStats} TopResult={TopResult} />
      </div>
    )
      
  
}