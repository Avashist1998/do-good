import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Icon } from '@mui/material';

import  Logo from '/logo.svg';

import { CurrentUserContext } from '../contexts/UserContext';

const TopAppBar = () => {
  const navigate = useNavigate();
  const { setUserData } = useContext(CurrentUserContext);
    
  const logOutUser = () => {
      console.log("Logging out");
      setUserData(null);
      sessionStorage.removeItem("userData");
  }

  const goHome = () => {
    navigate("/");
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{bgcolor:"#51882a"}} >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ 
              padding: '0px',
              marginRight: '36px',  
            }}
            onClick={goHome}
          >
            <Icon sx={{ width: '90px', height: '95px' }} >
              <img src={Logo} className='w-full h-full'/>
            </Icon>
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Do Good
          </Typography>
          <Button color="inherit" onClick={logOutUser}>LogOut</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default TopAppBar;