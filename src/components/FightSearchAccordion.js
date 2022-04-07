import React, { Component, useState } from 'react';
// import Accordion from '@mui/material/Accordion';
// import AccordionSummary from '@mui/material/AccordionSummary';
// import AccordionDetails from '@mui/material/AccordionDetails';
// import Typography from '@mui/material/Typography';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import styled from 'styled-components'
import { IconContext } from 'react-icons'
import { FiPlus, FiMinus } from 'react-icons/fi'


const AccordionSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  background: #fff;
`;
const Container = styled.div`
  position: absolute;
  top: 30%;
  `;
const Wrap = styled.div`
  background: lightgray; 
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  text-align: center;
  cursor: pointer
  
  h1{
    padding: 2rem;
    font-size: 2rem;
  }`;
const Dropdown = styled.div`
`;

export default function FightSearchAccordion(props) {

  
  const newArr = props.filteredPosts.map(({_id, ...rest}) => {
    return rest;
  });
  let FightStats = {
    "TopLine":{
      "Winner": newArr.winner,
      "Winning Method": newArr.method,
      "Round End": newArr.red_RndEnd,
      "Total Fight Seconds": newArr.red_FightSec,
      "Weight Class": newArr.weight_class,
      "Rounds": newArr.rounds,
      "Title Fight": newArr.title_fight,
      "Stance Matchup": newArr.stance_matchup,
      "Event": newArr.event,
      "Date": newArr.date,
      "Location": newArr.location,
      "FightID": newArr.fight_id
    },
    
    "Red": {
    "Red Name": newArr.red_name,
    "Red KDs": newArr.red_KDs,
    "Red Sub Attempts": newArr.red_SubAtts,
    },
    
    "Blue": {
      "Blue Name": newArr.blue_name,
      "Blue KDs": newArr.blue_KDs
    }

  }

  const [Clicked, setClicked] = useState(false)

  const toggle = index => {
    if(Clicked === index) {
      return setClicked(null)
    }
    setClicked(index)
  }

  return (
    <span className="PastAccordion">
    <IconContext.Provider value={{color: 'green', size: '25px'}}>
    <AccordionSection>
      <Container>
        {newArr.map((item, index) => {
          return (
            <>
            
            <Wrap onClick={() => toggle(index)} key={index}>
            <h1>{item.fight_id}</h1>
            <span>{Clicked === index ? <FiMinus /> : <FiPlus />}</span>
            </Wrap>
            {Clicked === index ? (
            <Dropdown>
            <p>              
              {Object.entries(item).map(([key, value]) =>
             <li>{key} : {value}</li>)}</p>
             </Dropdown>
             ) : null}
            </>
          )
        })}
      </Container>
    </AccordionSection>
    </IconContext.Provider>
    </span>
  )
}