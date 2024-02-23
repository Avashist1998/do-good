import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import TimelineIcon from '@mui/icons-material/Timeline';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';

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

    const [value, setValue] = useState(getActiveTab());

    const navigateTo = (path: string) => {
        navigate(path);
    }

    return (
        <BottomNavigation
            showLabels
            value={value}
            onChange={(_, newValue) => {
                console.log("This was triggered")
                setValue(newValue);
            }}>
            <BottomNavigationAction label="Home" icon={<TimelineIcon />} onClick={()=>{navigateTo("/")}}/>
            <BottomNavigationAction label="Record" icon={<RadioButtonCheckedIcon />} onClick={()=>{navigateTo("/record")}}/>
            <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} onClick={()=>{navigateTo("/nearby")}}/>
        </BottomNavigation>
    )
}


export default NavigationBar;