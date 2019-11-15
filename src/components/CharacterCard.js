import React from "react";
import styled from "styled-components";

export default function CharacterCard(props) {
    const Card = styled.div`
      width: 80%;
      padding: 10px;
      box-shadow: 1px 1px 5px black;
      border-radius: 10px;
      margin: 20px auto;
      display: flex;
      justify-content: space-between;
    `;

    const CardImg = styled.img`
      width: 200px;
      height: 200px
    `;

    const CardInfo = styled.div`
      tex-align: left;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      width: 50%;
    `;

    const Status = styled.div`
      tex-align: left;
      background: dodgerblue;
      height: 50px;
      vertical-align: middle;
      color: white;
      padding: 1px;
      border-radius: 5px;
    `;
 
  
    const CardStyle = styled.div `    
          background: lightblue;
          color: black;
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-bottom: 20px;
          transition: transform 0.2s ease-in;
           border: 5px solid black;
          &:hover {
            transform: translate(-5px) scale(1.05);
          }
  
          `;
  
    const CardTitleSize = styled.h2 `
      font-size: 30px;
  
  `;


  return (
    <CardStyle>
    <div className="character-card">
      <Card>
        <CardImg src={props.character.image} />
        <CardInfo>
          <CardTitleSize>Name: {props.character.name}</CardTitleSize> 
          <div>Gender: {props.character.gender}</div>
          <div>Species: {props.character.species}</div>
          <div>Origin: {props.character.origin.name}</div> 
          <div>Type: {props.character.type}</div>
        </CardInfo>
        <Status>Status: {props.character.status}</Status>
      </Card>
    </div>
     </CardStyle>
  )

}