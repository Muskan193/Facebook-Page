import React, { useState } from "react";
import { Avatar,  Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, IconButton, Typography ,MenuItem,Menu as MenuM} from '@mui/material';
import {MoreVert, Favorite, Share, FavoriteBorder } from '@mui/icons-material';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';


  const Post=(props)=>
{
  const [share, setShare]= useState(false)
  const [likeCount ,setLikeCount]=useState(0);
    return(

<Card sx={{margin:"15px"}}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
         {props.title}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVert/>
          </IconButton>
        }
        title={props.name}
        subheader={props.date}
      />
      <CardMedia
        component="img"
        height="20%"
        image={props.image}
        alt={props.alt}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        {props.describe}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
        <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{color:"red"}}/>} onClick={() => setLikeCount(likeCount + 1)} />
        {likeCount}
        </IconButton>{" "}
       
        <IconButton aria-label="add to favorites">
        <ThumbDownIcon/>
        </IconButton>
        <IconButton aria-label="share">
          <Share  onClick={e=>setShare(true)}  />
          <MenuM style={{position: ''}}
        id=""
        aria-labelledby="demo-positioned-button"
        
        open={share}
        onClose={(e)=>setShare(false)}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <MenuItem >Whatpp</MenuItem>
        <MenuItem >Instagram</MenuItem>
        <MenuItem >Linkdin</MenuItem>
      </MenuM>
        </IconButton>
      
      </CardActions>
    
    </Card>


    )
}
  export default Post;