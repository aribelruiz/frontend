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

const drawerWidth = 240;
const navItems = ['home', 'about'];

function Navbar(props) {

    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const navigate = useNavigate();
    
  
    const handleDrawerToggle = () => {
      setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
          <Typography variant="h6" sx={{ my: 2 }}>
            Nate Real Estate
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
                    Nate Real Estate
                </Typography>
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