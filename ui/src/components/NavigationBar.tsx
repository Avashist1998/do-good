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
            <BottomNavigationAction label="Home" icon={<TimelineIcon sx={{ color: '#51882a'}} />} href="./" sx={{ color: '#51882a' }}/>
            <BottomNavigationAction label="Record" icon={<RadioButtonCheckedIcon sx={{ color: '#51882a'}}  />} sx={{ color: '#51882a' }}/>
            <BottomNavigationAction label="Nearby" icon={<LocationOnIcon sx={{ color: '#51882a'}}  />} sx={{ color: '#51882a' }}/>
            
        </BottomNavigation>
    )
}


export default NavigationBar;