import { useEffect, useState } from "react";

import getLocation from '../api/location';
import LocationData from '../types/location';
import { getActivityTypes } from '../api/activities';
import ActivityData, { ActivityUploadData } from '../types/activity';

import { useNavigate } from 'react-router-dom';
import { Button, TextField} from '@mui/material';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import UserInfo from "../types/userInfo";


const AddActivityForm = (props: {userData: UserInfo | null, addActivity: (userId: string, activity: ActivityUploadData) => Promise<ActivityData>}) => {

    const [isValidInput, setIsValidInput] = useState<Boolean>(false);
    const [title, setTitle] = useState("");
    const [duration, setDuration] = useState<number | null>(null);
    const [activityType, setActivityType] = useState("");
    const [description, setDescription] = useState("");
    const [date, setDate] = useState("");
    const [images, setImages] = useState<File>();
    const [location, setLocation] = useState<LocationData | null>(null);

    // TODO: Tags, Location, Organization, Goal
    // const [activityGoal, setActivityGoal] = useState("");


    const activityTypes = getActivityTypes();
    const navigate = useNavigate();
    const navigateTo = (path: string) => {
        navigate(path);
    }

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
            console.log(duration)
            return false
        }
        return true;
    }

    useEffect(() => {
        const res = inputValidation();
        setIsValidInput(res)
    }, [title, date, activityType, duration])

    const handleEntry = () => {
        const creator = props.userData?.username
        const hourDuration = duration === null  ? 0 : duration;
        const newActivity = {
            "title": title,
            "creator": creator,
            "description": description,
            "date": date,
            "points": Math.floor(hourDuration*(500*(1 - Math.random()*0.1))),
            "duration": duration,
            "type": activityType,
            "tags": ["#SDG1"],
            "images": [images],
        } as ActivityUploadData;
        if (props.userData !== null) {
            props.addActivity(props.userData?.id, newActivity).then(() => {
                navigateTo("/");
            }).catch((error) => {
                console.log(error);
            });
        }
    }

    return (
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
        <TextField inputProps={{ type: 'number'}} placeholder="Duration (hr)" sx={{ width: 200, paddingTop: 2, paddingBottom: 2}} value={duration} onChange={e => setDuration(Number(e.target.value))} />
        <TextField label="Location" type="longitude" style={{paddingTop: 2, paddingBottom: 2}}/>
        <div className="p-2">
            <input accept='image/*' id="icon-button-file" type="file" onChange={e => {
                if (e.target.files !== null) {
                    setImages(e.target.files[0])
                }
            }}></input>
        </div>
        <div className='rounded-lg'>
            <Button variant="contained" sx={{borderRadius: 2, backgroundColor: 'white', color: 'black' }} onClick={handleEntry} disabled={!isValidInput}>
                Submit
            </Button> 
        </div>
        <div>
            <h4>Your location</h4>
            <h5>Latidute {location?.lat || ""}</h5>
            <h5>Logitude {location?.log || ""}</h5>
        </div>
    </div>
</div>
    )

}

export default AddActivityForm;