import { AppBar, Toolbar,styled, Typography, Box,  InputBase, Badge, Avatar } from "@mui/material";
import React, { useState } from "react";
import NotificationsIcon from '@mui/icons-material/Notifications';
import MailIcon from '@mui/icons-material/Mail';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import FacebookIcon from '@mui/icons-material/Facebook';


const StyledToolbar = styled(Toolbar)(
    {
        display:"flex",
        justifyContent:"space-between",
    }
);

const Search = styled("div")(({theme})=>
(
    {
        backgroundColor:"white",
        padding: "0 10px",
        borderRadius:theme.shape.borderRadius,
        width: "40%" ,
        
    }
));

const Icons = styled(Box)(({theme})=>
(
    {
        display:"none",
        alignItems:"center",
        gap:"20px",
        [theme.breakpoints.up("sm")]:
        {
            display:"flex",
        }
        
    }
));

const UserBox = styled(Box)(({theme})=>
(
    {
        display:"flex",
        alignItems:"center",
        gap:"20px",
        [theme.breakpoints.up("sm")]:
        {
            display:"none",
        }
        
    }
))

export const Navbar=()=>
{

    const [open, setOpen]= useState(false)
        return(
        <AppBar position="sticky">
           < StyledToolbar>
           <Typography variant="h6" sx={{display:{xs:"none", sm:"block"}}}>Facebook</Typography>
          < FacebookIcon sx={{display:{xs:"block", sm:"none"}}} />
          <Search><InputBase placeholder="search..."/></Search>
          <Icons>
            <Badge badgeContent={4} color="error">
                <MailIcon  />
               
            </Badge>
            
            <Badge badgeContent={2} color="error">
            < NotificationsIcon />
            
            </Badge>
            <Avatar sx={{width:30, height:30}} src="https://images.pexels.com/photos/1382731/pexels-photo-1382731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
            onClick={e=>setOpen(true)} 
            />

          </Icons>
          <UserBox onClick={e=>setOpen(true)} >
          <Avatar sx={{width:30, height:30}} src="https://images.pexels.com/photos/1382731/pexels-photo-1382731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"/>
             <Typography variant="span">Muskan</Typography>
          </UserBox>
        </StyledToolbar>
        <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        
        open={open}
        onClose={(e)=>setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem >Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem >Logout</MenuItem>
      </Menu>
            </AppBar>
    )
}