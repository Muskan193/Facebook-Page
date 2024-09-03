import React from 'react';
import { Avatar, AvatarGroup, Box,Divider,ImageList,ImageListItem,List,ListItem,ListItemAvatar,ListItemText,Typography } from '@mui/material';

export const Rightbar=()=>
{
    return(
        <Box  flex={2} p={2} sx={{display:{xs:"none",sm:"block"}}}>
        <Box position="Fixed" width={300}>
            <Typography variant="h6" fontWeight={100}>Online Friends</Typography>
            <AvatarGroup max={7}>
  <Avatar alt="Remy Sharp" src="https://images.pexels.com/photos/14029041/pexels-photo-14029041.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" />
  <Avatar alt="Travis Howard" src="https://images.pexels.com/photos/8916595/pexels-photo-8916595.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" />
  <Avatar alt="Cindy Baker" src="https://images.pexels.com/photos/6821323/pexels-photo-6821323.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" />
  <Avatar alt="Agnes Walker" src="https://images.pexels.com/photos/4453710/pexels-photo-4453710.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" />
  <Avatar alt="Trevor Henderson" src="https://images.pexels.com/photos/13991587/pexels-photo-13991587.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" />
  <Avatar alt="Agnes Walker" src="https://images.pexels.com/photos/12276196/pexels-photo-12276196.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" />
  <Avatar alt="Trevor Henderson" src="https://images.pexels.com/photos/14538431/pexels-photo-14538431.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" />
</AvatarGroup>
<Typography variant="h6" fontWeight={100} mt={2} mb={2}>Latest Photos</Typography>
           
           <ImageList cols={3} rowHeight={100} gap={5}>
            <ImageListItem>
            <img src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e" alt="Breakfast"/>
            </ImageListItem>
       
            <ImageListItem>
            <img src="https://images.unsplash.com/photo-1551782450-a2132b4ba21d" alt="Burger"/>
            </ImageListItem>
            <ImageListItem>
            <img src="https://images.unsplash.com/photo-1522770179533-24471fcdba45" alt="Camera"/>
            </ImageListItem>
            <ImageListItem>
            <img src="https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c" alt="Coffee"/>
            </ImageListItem>
            <ImageListItem>
            <img src="https://images.unsplash.com/photo-1533827432537-70133748f5c8" alt="Hats"/>
            </ImageListItem>
            <ImageListItem>
            <img src="https://images.unsplash.com/photo-1558642452-9d2a7deb7f62" alt="Honey"/>
            </ImageListItem>

           </ImageList>
           
           <Typography variant="h6" fontWeight={100} mt={2} > Latest Conversations</Typography>
           <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="https://images.unsplash.com/photo-1638716885760-79ce6b46bd9c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDl8UzRNS0xBc0JCNzR8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60" />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Solse Anjali
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="https://images.unsplash.com/photo-1668979028056-2d6a47a29b6d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDd8UzRNS0xBc0JCNzR8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60" />
        </ListItemAvatar>
        <ListItemText
          primary="Summer BBQ"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                to Scott, Alex, Jennifer
              </Typography>
              {" — Wish I could come, but I'm out of town this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="https://images.unsplash.com/photo-1643694646666-4c58c7b3a5e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDExfFM0TUtMQXNCQjc0fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60" />
        </ListItemAvatar>
        <ListItemText
          primary="Oui Oui"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Sandra Adams
              </Typography>
              {' — Do you have Paris recommendations? Have you ever…'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
            </Box>
        </Box>
    )
}