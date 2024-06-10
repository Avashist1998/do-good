import React, { useState, useContext, useEffect } from 'react';
import { Button, TextField} from '@mui/material';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Unstable_NumberInput as NumberInput } from '@mui/base/Unstable_NumberInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';




import getLocation from '../api/location';
import LocationData from '../types/location';
import { CurrentUserContext } from '../contexts/UserContext';

import LayoutTemplate from './LayoutTemplate';
import { addActivity, getActivities, getActivityCount, getActivityTypes } from '../api/activities';
import ActivityData from '../types/activity';
import { useNavigate } from 'react-router-dom';


const RecordPage: React.FC = () => {

    const { userData } = useContext(CurrentUserContext);
    const [location, setLocation] = useState<LocationData | null>(null);
    
    const creator = userData?.username
    const [isValidInput, setIsValidInput] = useState<Boolean>(false);
    const [title, setTitle] = useState("");
    const [duration, setDuration] = useState<number | null>(null);
    const [activityType, setActivityType] = useState("");
    const [activityGoal, setActivityGoal] = useState("");
    const [description, setDescription] = useState("");
    const [date, setDate] = useState("");

    const activityTypes = getActivityTypes();
    const navigate = useNavigate();
    const navigateTo = (path: string) => {
        navigate(path);
    }
    // TODO: Tags, Location, Organization
    useEffect(() => {
        getLocation().then((res) => {
            setLocation(res);
        }).catch((error) => {
            console.log(error);
            setLocation({lat: -1, log: -1} as LocationData);
        })
        
    }, [])

    const inputValidation = (): Boolean => {
        if (title === "") {
            return false
        }
        if (date === "") {
            return false
        }
        if (activityType === "") {
            return false
        }
        if (duration === null) {
            return false
        }
        return true;
    }

    useEffect(() => {
        const res = inputValidation();
        setIsValidInput(res)
    }, [title, date])

    const handleEntry = () => {
        const count  = getActivityCount() + 1;
        const activityId = `ACT0${count}`;
        const newActivity = {
            "activity_id": activityId,
            "title": title,
            "creator": creator,
            "description": description,
            "date": date,
            "latitude": 51.5074,
            "longitude": -0.1278,
            "points": Math.floor(duration*(500*(1 - Math.random()*0.1))),
            "duration": duration,
            "organization_id": "",
            "type": activityType,
            "tags": ["#SDG1"],
            "likes": 0,
            "img_url":"https://www.thechannels.org/wp-content/uploads/2012/10/EdenCharity1-1024x619.jpg",
        } as ActivityData
        addActivity(newActivity);
        navigateTo("/");
    }
    return (
        <LayoutTemplate>
            <div>
                <div className="flex flex-col mt-8">
                    <div className="left-0">
                        <TextField label="Activity Title"  onChange={e => setTitle(e.target.value)}
                            style={{paddingTop: 2, paddingBottom: 2}}
                        />
                    </div>
                    <TextField label= "Description" multiline rows={4} onChange={e => setDescription(e.target.value)}
                        style={{width: 400, paddingTop: 2, paddingBottom: 2}}
                    />
                    <Box sx={{ width: 200, paddingTop: 2, paddingBottom: 2 }}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Activity Type</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={activityType}
                                label="activityType"
                                onChange={e => setActivityType(e.target.value)}
                            >
                            {
                                activityTypes.map(val => (
                                    <MenuItem value={val}>{val}</MenuItem>   
                                ))
                            }   
                            </Select>
                        </FormControl>
                    </Box>
                    <TextField label="" sx={{ width: 200, paddingTop: 2, paddingBottom: 2}} type="date" onChange={e => setDate(e.target.value)}/> 
                    <NumberInput placeholder="Duration (hr)" value={duration} onChange={(e, val) => setDuration(val)} style={{paddingTop: 2, paddingBottom: 2}} />
                    <TextField label="Location" type="longitude" style={{paddingTop: 2, paddingBottom: 2}}/>
                    <TextField label="Organization" style={{paddingTop: 2, paddingBottom: 2}}/>
                    <div className="p-2">
                        <input accept='image/*' id="icon-button-file" type="file"></input>
                    </div>
                    <div className='rounded-lg'>
                        <Button variant="contained" sx={{borderRadius: 2, backgroundColor: 'white', color: 'black' }} onClick={handleEntry} disabled={!isValidInput}>
                            Submit
                        </Button> 
                    </div>
                </div>
                <p>Your location is {location?.lat || ""}, {location?.log || ""}</p>
            </div>
        </LayoutTemplate>
    )
};



export default RecordPage;