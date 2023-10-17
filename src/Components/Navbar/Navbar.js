import React from 'react';
import {useNavigate} from "react-router-dom";
import './Navbar.scss';

// Import Material UI components/icons
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import pfp from '../../Images/pfpSquare.jpg';
import ScrollToColor01 from '../Helpers/ScrollToColor';
import Home from '@mui/icons-material/Home';


const drawerWidth = 270;
const navItems = ['home', 'about', 'testimonials', 'blog'];

function Navbar(props) {

    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const navigate = useNavigate();
    
  
    const handleDrawerToggle = () => {
      setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
        <Box className='small-tab' onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
          <Typography variant="h6" sx={{ my: 2 }}>
            
            {/* <div className='logo' onClick={() => navigate('/')}>
              <HomeIcon/>
              <div className='logo-text'>
                <h5>Nathaniel Lester</h5>
                <h6>Real Estate</h6>
              </div>
            </div> */}

          </Typography>
          <Divider />
          <List>
            {navItems.map((item) => (
              <ListItem key={item} disablePadding>
                <ListItemButton id='nav-link-open' sx={{ textAlign: 'center' }} onClick={() => navigate(`/${item}`)}>
                  <ListItemText primary={item} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Button id='contact-btn-open' onClick={() => navigate('/contact')}>
             Contact Me
          </Button>
        </Box>
      );
    
    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <>
       <Box sx={{ display: 'flex' }}>
            <CssBaseline />
              <AppBar component="nav" id='navbar'>
                <div id='header' >
                  <div className='header-left'>
                    <div className='header-img'>
                      <img src={pfp} alt='profile-img'></img>
                    </div>
                    <div className='header-info'>
                      <h3>Nathaniel Lester, Jr.</h3>
                      <a className='phone-btn' href={`tel:${786-877-2336}`}>786-877-2336</a>
                      <h3>SL3446317</h3>
                    </div>
                  </div>
                  <div className='header-socials'>
                    <a className='fb-btn' href='https://www.facebook.com/N.Lester.Realtor' target='blank'><FacebookIcon/></a>
                    <a className='fb-btn' href='https://www.instagram.com/sold_by_nathaniel/' target='blank'><InstagramIcon/></a>
                  </div>
                </div>
                  <Toolbar>
                  <IconButton
                      color="inherit"
                      aria-label="open drawer"
                      edge="start"
                      onClick={handleDrawerToggle}
                      sx={{ mr: 2, display: { sm: 'none' } }}
                  >
                      <MenuIcon />
                  </IconButton>
                  <Typography
                      variant="h6"
                      component="div"
                      sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                  >
                    <div className='logo' onClick={() => navigate('/')}>
                      <Home/>
                      <div className='logo-text'>
                        <h5>Nathaniel Lester</h5>
                        <h6>Real Estate</h6>
                      </div>
                    </div>

                  </Typography>

                  <ScrollToColor01>
                    <Box sx={{ display: { xs: 'none', sm: 'block' } }} id='nav-links'>
                        {navItems.map((item) => (
                        <Button key={item} sx={{ color: '#000' }} id='nav-link' onClick={() => navigate(`/${item}`)}>
                            {item}
                        </Button>
                        ))}
                        <Button id='contact-btn' onClick={() => navigate('/contact')}>
                            Contact Me
                        </Button>
                    </Box>
                  </ScrollToColor01>


                  </Toolbar>
              </AppBar>
            <nav>
                <Drawer
                container={container}
                variant="temporary"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                    keepMounted: true, // Better open performance on mobile.
                }}
                sx={{
                    display: { xs: 'block', sm: 'none' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                }}
                >
                {drawer}
                </Drawer>
            </nav>
            <Box component="main" sx={{ p: 3 }}>
                <Toolbar />
            </Box>
        </Box>
        </>
    );
}

export default Navbar;