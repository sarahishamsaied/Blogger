import * as React from 'react';
import Box from '@mui/material/Box';
import { styled, ThemeProvider, createTheme } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import * as FiIcons from 'react-icons/fi'
import { useNavigate } from 'react-router-dom';
const FireNav = styled(List)({
  '& .MuiListItemButton-root': {
    paddingLeft: 24,
    paddingRight: 24,
  },
  '& .MuiListItemIcon-root': {
    minWidth: 0,
    marginRight: 16,
  },
  '& .MuiSvgIcon-root': {
    fontSize: 20,
  },
});

export default function Sidebar({username,setPage}) {
  const navigate = useNavigate()
  const [open, setOpen] = React.useState(true);
  return (
    <Box sx={{ display: 'flex'}}>
      <ThemeProvider
        theme={createTheme({
          components: {
            MuiListItemButton: {
              defaultProps: {
                disableTouchRipple: true,
              },
            },
          },
          palette: {
            mode: 'dark',
            primary: { main: '#fff' },
            background: { paper: '#131313' },
          },
        })}
      >
        <Paper elevation={0} sx={{ maxWidth: 256,height:"100vh" ,mt:15}}>
          <FireNav component="nav" disablePadding sx = {{height:'100vh'}}> 
            <ListItemButton component="a" href="#customized-list">
              <ListItemText
                sx={{ my: 0 }}
                primary="Blogger"
                primaryTypographyProps={{
                  fontSize: 28,
                  fontWeight: 'bold',
                  letterSpacing: 2,

                }}
              />
            </ListItemButton>
            <Divider />
            <ListItem component="div" disablePadding>
              <ListItemButton sx={{ height: 56 }}>
                <ListItemText
                  primary={username}
                  primaryTypographyProps={{
                    color: 'primary',
                    fontWeight: 'bold',
                    variant: 'body2',
                    fontSize:16
                  }}
                />
              </ListItemButton>
              <Tooltip title="User Settings">
                <IconButton
                  size="medium"
                  sx={{
                    '& svg': {
                      color: 'rgba(255,255,255,0.8)',
                      transition: '0.2s',
                      transform: 'translateX(0) rotate(0)',
                    },
                    '&:hover, &:focus': {
                      bgcolor: 'unset',
                      '& svg:first-of-type': {
                        transform: 'translateX(-4px) rotate(-20deg)',
                      },
                      '& svg:last-of-type': {
                        right: 0,
                        opacity: 1,
                      },
                    }
                  }}
                >
                  <FiIcons.FiSettings/>
                </IconButton>
              </Tooltip>
            </ListItem>
            <Divider />
            <Box
              sx={{
                bgcolor: open ? '#131313' : null,
                pb: open ? 2 : 0,
              }}
            >
              <ListItemButton 
                alignItems="flex-start"
                onClick={() => {
                  setOpen(!open);
                  setPage("createBlog")
                }}
                sx={{
                  px: 3,
                  pt: 2.5,
                  pb: open ? 0 : 2.5,
                  '&:hover, &:focus': { '& svg': { opacity: open ? 1 : 0 } },
                }}
              >
                <ListItemText
                  primary="Post Blog"
                  primaryTypographyProps={{
                    fontSize: 15,
                    fontWeight: 'bold',
                    lineHeight: '20px',
                    mb: '2px',
                  }}
                  secondary="Customize, Categorize your blog"
                  secondaryTypographyProps={{
                    noWrap: true,
                    fontSize: 12,
                    lineHeight: '16px',
                    color: open ? 'rgba(0,0,0,0)' : 'rgba(255,255,255,0.5)',
                  }}
                  sx={{ my: 0 }}
                />
              
              </ListItemButton>
              <ListItemButton
                alignItems="flex-start"
                onClick={() =>{
                  setOpen(!open);
                  setPage("explore")
                }}
                sx={{
                  px: 3,
                  pt: 2.5,
                  pb: open ? 0 : 2.5,
                  '&:hover, &:focus': { '& svg': { opacity: open ? 1 : 0 } },
                }}
              >
                <ListItemText
                  primary="Explore"
                  primaryTypographyProps={{
                    fontSize: 15,
                    fontWeight: 'bold',
                    lineHeight: '20px',
                    mb: '2px',
                  }}
                  secondary="Explore blogs of your interests"
                  secondaryTypographyProps={{
                    noWrap: true,
                    fontSize: 12,
                    lineHeight: '16px',
                    color: open ? 'rgba(0,0,0,0)' : 'rgba(255,255,255,0.5)',
                  }}
                  sx={{ my: 0 }}
                />
              
              </ListItemButton>
              <ListItemButton
                alignItems="flex-start"
                onClick={() => {
                  setOpen(!open);
                  setPage("feed");
                }}
                sx={{
                  px: 3,
                  pt: 2.5,
                  pb: open ? 0 : 2.5,
                  '&:hover, &:focus': { '& svg': { opacity: open ? 1 : 0 } },
                }}
              >
                <ListItemText
                  primary="Feed"
                  primaryTypographyProps={{
                    fontSize: 15,
                    fontWeight: 'bold',
                    lineHeight: '20px',
                    mb: '2px',
                  }}
                  secondary="News Feed"
                  secondaryTypographyProps={{
                    noWrap: true,
                    fontSize: 12,
                    lineHeight: '16px',
                    color: open ? 'rgba(0,0,0,0)' : 'rgba(255,255,255,0.5)',
                  }}
                  sx={{ my: 0 }}
                />
              
              </ListItemButton>
              <ListItemButton
                alignItems="flex-start"
                onClick={() => {
                setOpen(!open);
                setPage("readingList")}}
                sx={{
                  px: 3,
                  pt: 2.5,
                  pb: open ? 0 : 2.5,
                  '&:hover, &:focus': { '& svg': { opacity: open ? 1 : 0 } },
                }}
              >
                <ListItemText
                  primary="Reading List"
                  primaryTypographyProps={{
                    fontSize: 15,
                    fontWeight: 'bold',
                    lineHeight: '20px',
                    mb: '2px',
                  }}
                  secondary="Save blogs for later use"
                  secondaryTypographyProps={{
                    noWrap: true,
                    fontSize: 12,
                    lineHeight: '16px',
                    color: open ? 'rgba(0,0,0,0)' : 'rgba(255,255,255,0.5)',
                  }}
                  sx={{ my: 0 }}
                />
              
              </ListItemButton>
              <ListItemButton
                alignItems="flex-start"
                onClick={() => {
                  setOpen(!open);
                  setPage("profile")
                }}
                sx={{
                  px: 3,
                  pt: 2.5,
                  pb: open ? 0 : 2.5,
                  '&:hover, &:focus': { '& svg': { opacity: open ? 1 : 0 } },
                }}
              >
                <ListItemText
                  primary="User Profile"
                  primaryTypographyProps={{
                    fontSize: 15,
                    fontWeight: 'bold',
                    lineHeight: '20px',
                    mb: '2px',
                  }}
                  secondary="Your Profile"
                  secondaryTypographyProps={{
                    noWrap: true,
                    fontSize: 12,
                    lineHeight: '16px',
                    color: open ? 'rgba(0,0,0,0)' : 'rgba(255,255,255,0.5)',
                  }}
                  sx={{ my: 0 }}
                />
              
              </ListItemButton>
              <ListItemButton
                alignItems="flex-start"
                onClick={() => setOpen(!open)}
                sx={{
                  px: 3,
                  pt: 2.5,
                  pb: open ? 0 : 2.5,
                  '&:hover, &:focus': { '& svg': { opacity: open ? 1 : 0 } },
                }}
              >
                <ListItemText
                  primary="Sign Out"
                  primaryTypographyProps={{
                    fontSize: 15,
                    fontWeight: 'bold',
                    lineHeight: '20px',
                    mb: '2px',
                  }}
                  secondary="Sign out"
                  secondaryTypographyProps={{
                    noWrap: true,
                    fontSize: 12,
                    lineHeight: '16px',
                    color: open ? 'rgba(0,0,0,0)' : 'rgba(255,255,255,0.5)',
                  }}
                  sx={{ my: 0 }}
                />
              
              </ListItemButton>

             
            </Box>
          </FireNav>
        </Paper>
      </ThemeProvider>
    </Box>
  );
}
