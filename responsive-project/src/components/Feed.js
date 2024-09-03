import React from 'react';
import Post from "./Post";
import {  Box } from '@mui/material';


export const Feed=()=>
{
    return(
        <Box  flex={4} p={2}>
     <Post title="M" name="Muskan Shaikh" date="Nov 24 2022" image="https://mui.com/static/images/cards/contemplative-reptile.jpg" describe="Reptiles, as most commonly defined are the animals in the class Reptilia,
         a grouping comprising all sauropsids except birds
         . Living reptiles comprise turtles, crocodilians, squamates and rhynchocephalians"/>
     <Post title="S" name="Simran Pathan" date="Dec 12 2022" 
     image="https://images.pexels.com/photos/14353716/pexels-photo-14353716.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"  alt="house"
      describe="a grouping comprising all sauropsids except birds
      . Living reptiles comprise turtles, crocodilians, squamates and rhynchocephalians"/>
     <Post title="P" name="Payal Raykar" date="April 08 2022" image="https://images.pexels.com/photos/6821323/pexels-photo-6821323.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" describe="" alt="couple"/>
     <Post title="F" name="Faruk Sayyad" date="jan 13 2021" image="https://mui.com/static/images/cards/contemplative-reptile.jpg" describe="Reptiles, as most commonly defined are the animals in the class Reptilia,
         a grouping comprising all sauropsids except birds
         . Living reptiles comprise turtles, crocodilians, squamates and rhynchocephalians"/>

  
        </Box>
    )
}