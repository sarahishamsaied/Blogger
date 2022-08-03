import React, { Fragment, useContext,useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../Context/AuthProvider'
import * as RiIcons from 'react-icons/ri'
import { List, ListItem,ListItemButton,ListItemText } from '@mui/material';
import Divider from '@mui/material/Divider';
import RemoveCookie from '../../Hooks/RemoveCookie';
export default function LoggedInLinks({name}) {
    const navigate = useNavigate();
    const signOut = ()=>{
        RemoveCookie("token")
        navigate("/");
        window.location.reload();
    }
    const [display,setDisplay] = useState(false);
  return (
    <Fragment>
        <div className={display?"absolute bg-black text-white top-16 right-44 navList text-center":'hidden'}>
            <List>
                <ListItemButton href='/profile' >
                <ListItemText
                    sx={{ my: 0 }}
                    primary="Manage your account"
                    primaryTypographyProps={{
                    fontSize: 14,
                    fontWeight: 'bold',
                    letterSpacing: 0,
                }}
              />
                <Divider />
                </ListItemButton >
                <ListItemButton   onClick={signOut}> 
                <ListItemText
                    sx={{ my: 0 }}
                    primary="Signout"
                    primaryTypographyProps={{
                    fontSize: 14,
                    fontWeight: 'bold',
                    letterSpacing: 0,
                    
                }}
              />
                </ListItemButton >
            </List>
        </div>
 <div className=' text-slate-300 flex justify-center align-middle cursor-pointer hover:text-white' >
        <div className="icon bg-purple rounded-full hover:shadow-white shadow-lg transition-all ease-in">
            {name[0]}
        </div>
        <Link to={`/profile`}  className='m-auto ml-5 '>Hello, {name}</Link>
        <span className = "text-4xl"onClick={()=>setDisplay(!display)}><RiIcons.RiArrowDropDownLine/></span>
    </div>
    </Fragment>
   
  )
}
