import React from "react";
import { Box, Card, styled, Typography } from "@mui/material";
import  characters from '../databse/DB.json';
const CardComponent= styled(Card)`
 
height:300px;
width: 300px;
margin-top: 40px;
`
const CharacterCard = ({value}) => {
    console.log(value);
    return(
        <>
           <CardComponent>
          </CardComponent>
     </>
    )
}
export default CharacterCard;