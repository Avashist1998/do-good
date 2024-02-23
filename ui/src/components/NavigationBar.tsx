import { useState } from 'react';

import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import TimelineIcon from '@mui/icons-material/Timeline';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';


const NavigationBar = () => {

    const [value, setValue] = useState(0);


    return (
        <BottomNavigation
            showLabels
            value={value}
            onChange={(_, newValue) => {
                console.log("This was triggered")
                setValue(newValue);
            }}>
            <BottomNavigationAction label="Home" icon={<TimelineIcon />} href="./"/>
            <BottomNavigationAction label="Record" icon={<RadioButtonCheckedIcon />} />
            <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
        </BottomNavigation>
    )
}


export default NavigationBar;