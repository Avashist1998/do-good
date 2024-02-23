import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import TimelineIcon from '@mui/icons-material/Timeline';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import { green, grey } from '@mui/material/colors';

const NavigationBar = () => {

    const navigate = useNavigate();
    const location = useLocation();

    const getActiveTab = () => {
        if (location.pathname === "/") {
            return 0;
        } else if (location.pathname === "/record") {
            return 1;
        } else if (location.pathname === "/nearby") {
            return 2;
        }
        return 0;
    }

    const getColor = (index: number) => {
        if (index === getActiveTab()) {
            return green[500];
        }
        return grey[500];
    }

    const [value, setValue] = useState(getActiveTab());

    const navigateTo = (path: string) => {
        navigate(path);
    }

    return (
        <BottomNavigation
            showLabels
            value={value}
            onChange={(_, newValue) => {
                setValue(newValue);
            }}
        >
            <BottomNavigationAction label="Home"             sx={{
                "& .MuiBottomNavigationAction-root, .Mui-selected,": {
                    color: getColor(0)
                },
            }} icon={<TimelineIcon sx={{ color: getColor(0) }} />} onClick={() => { navigateTo("/") }}/>
            <BottomNavigationAction label="Record"  
             sx={{ 
                "& .MuiBottomNavigationAction-root, .Mui-selected,": {
                    color: getColor(1)
                },
            }} icon={<RadioButtonCheckedIcon sx={{ color: getColor(1) }} />} onClick={() => { navigateTo("/record") }}/>
            <BottomNavigationAction label="Nearby"  sx={{
                "& .MuiBottomNavigationAction-root, .Mui-selected,": {
                    color: getColor(2)
                },
            }} icon={<LocationOnIcon sx={{ color: getColor(2) }} />} onClick={() => { navigateTo("/nearby") }} />
        </BottomNavigation>
    )
}


export default NavigationBar;