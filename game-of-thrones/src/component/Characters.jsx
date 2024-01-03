import React from "react";
import { Box, Card, styled, Typography } from "@mui/material";
import  characters from '../databse/DB.json';
import CharacterCard from "./CharacterCard";


const Characters = () => {
    return (
        <>
        <Box>
          {
            characters.map(value => (
                <CharacterCard  value = {value}/>
            ))
          }     
        </Box>
        </>
    )
}

export default Characters;