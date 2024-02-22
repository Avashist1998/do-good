import {useContext} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import { CurrentUserContext } from '../contexts/UserContext';

const TopAppBar = () => {

  const { setUserData } = useContext(CurrentUserContext);
    
  const logOutUser = () => {
      console.log("Logging out");
      setUserData(null);
      sessionStorage.removeItem("userData");
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
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