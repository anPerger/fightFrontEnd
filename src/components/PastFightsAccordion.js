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
  box-shaddow: 2px 10px 35px 1px rgba(153, 153, 153, 0.3);
  `;
const Wrap = styled.div`
  background: #272727;
  color: #fff;
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
export default function PastFightsAccordion(props) {
  const newArr = props.SelectedFights.map(({_id, ...rest}) => {
    return rest;
  });

  const [Clicked, setClicked] = useState(false)

  const toggle = index => {
    if(Clicked === index) {
      return setClicked(null)
    }
    setClicked(index)
  }

  return (
    <IconContext.Provider value={{color: '#00FFB9', size: '25px'}}>
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
            <p>{Object.entries(item).map(([key, value]) =>
             <li>{key} : {value}</li>)}</p>
             </Dropdown>
             ) : null}
            </>
          )
        })}
      </Container>
    </AccordionSection>
    </IconContext.Provider>
  )




  
  // delete props.SelectedFights[1]["_id"]
  // console.log(typeof(props.SelectedFights[1]))
  // let FightList = []
  // for(const fight in props.SelectedFights) {
  //   delete fight["_id"]
  //   let FightData = Object.entries(fight).map(([key, value]) =>
  //   <li>{key}: {value}</li>
  //   )
  //   let acc = (
  //     <Accordion>
  //         <AccordionSummary
  //           expandIcon={<ExpandMoreIcon />}
  //           aria-controls="panel1a-content"
  //           id="panel1a-header"
  //         >
  //           <Typography>{FightData.fight_id}</Typography>
  //         </AccordionSummary>
  //         <AccordionDetails>
  //           <Typography>
  //             {FightData}
  //           </Typography>
  //         </AccordionDetails>
  //       </Accordion>
  //   )
    
  
  //    }
    
  // return (
  //   <div>
  //     {/* <Accordion>
  //       <AccordionSummary
  //         expandIcon={<ExpandMoreIcon />}
  //         aria-controls="panel1a-content"
  //         id="panel1a-header"
  //       >
  //         <Typography>Accordion 1</Typography>
  //       </AccordionSummary>
  //       <AccordionDetails>
  //         <Typography>
  //           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
  //           malesuada lacus ex, sit amet blandit leo lobortis eget.
  //         </Typography>
  //       </AccordionDetails>
  //     </Accordion> */}
  //     {acc}
  //   </div>
  // )
}