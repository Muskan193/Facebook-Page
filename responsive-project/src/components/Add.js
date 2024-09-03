import { Avatar, Box, Button, ButtonGroup, Fab, Modal,  Stack,  styled,  TextField,  Tooltip, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import React, { useState } from 'react';
import { DateRange, EmojiEmotions, Image, PersonAdd, VideoCameraBack } from '@mui/icons-material';

const StyledModal= styled(Modal)({
  display:"flex",
  alignItems:"center",
  justifyContent:"center",
});

const UserBox= styled(Box)({
  display:"flex",
  alignItems:"center",
 gap: "10px",
 marginBottom:"20px"
});

const Add = () => {
  const [open ,setOpen]=useState(false)
  return (
    <>
        <Tooltip onClick={(e)=>setOpen(true)}
        title="Add" 
        sx={
          {position:'fixed', bottom: 20
          ,
          left:{ xs:"calc(50%)", md: 30}}}>
        <Fab color="primary" aria-label="add">
  <AddIcon />
</Fab>
</Tooltip>
<StyledModal
  open={open}
  onClose={(e)=>setOpen(false)}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box  width={400} height={280} bgcolor="white" p={3} borderRadius={5}>
   <Typography variant="h6" color="gray" textAlign="center">Create Post</Typography>
 <UserBox>
 <Avatar alt="Muskan" src="https://images.unsplash.com/photo-1558642452-9d2a7deb7f62" sx={{width:30 , height:30}} />
 <Typography fontWeight={500} variant="span">Muskan Shaikh</Typography>
 
 </UserBox>
 <TextField
          sx={{width:"100%"}}
          id="standard-multiline-static"
          multiline
          rows={4}
          placeholder="What's on your mind"
          variant="standard"
        />
        <Stack direction="row" gap={1} mt={2} mb={3}>
          <EmojiEmotions color="primary"/>
          <Image color="secondary"/>
          <VideoCameraBack color="success"/>
          <PersonAdd color="error" />
        </Stack>
        <ButtonGroup
      disableElevation
      variant="contained"
      aria-label="Disabled elevation buttons"
    >
      <Button >Add Post</Button>
      <Button sx={{ width : "100px",marginLeft:"10px"}}><DateRange/></Button>
    </ButtonGroup>
  </Box>
</StyledModal>
        </>
  )
}

export default Add