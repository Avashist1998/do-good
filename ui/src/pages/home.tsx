import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import type ActivityData from '../types/activity';
import ActivityCard from '../components/ActivityCard';

// import getLocation from '../api/location';
// import LocationData from '../types/location';
// import { CurrentUserContext } from '../contexts/UserContext';

import { List, ListItem } from '@mui/material';
import LayoutTemplate from './LayoutTemplate';
import { getActivities } from '../api/activities';

const Home: React.FC = () => {

    const navigate = useNavigate();
    const [activities, setActivities] = useState<ActivityData[]>([]);
    
    // const { userData } = useContext(CurrentUserContext);
    // const [location, setLocation] = useState<LocationData | null>(null);
    
    useEffect(() => {
        getActivities().then((res) => {
            setActivities(res);
        }).catch((error) => {
            console.log(error);
        });
    }, [activities, setActivities])
    

    const navigateToActivity = (activityId: string) => {
        const path = `./${activityId}`;
        console.log(path);
        navigate(path);

    }

    return (
        <>
            <LayoutTemplate>
                <div>
                    {/* <p>Welcome {userData?.username}</p>
                    <p>Your role is {userData?.role}</p>
                    <p>Your token is {userData?.token}</p> */}
                    {/* <p>Your location is {location?.lat || ""}, {location?.log || ""}</p> */}
                    {/* <div>                
                        <Button onClick={() => {
                                getLocation().then((res) => {
                                    setLocation(res);
                                }).catch((error) => {
                                    console.log(error);
                                    setLocation({lat: -1, log: -1} as LocationData);
                                })
                            }}>
                            Get Location
                        </Button>
                    </div> */}
                </div>
                <div className='overflow-auto pb-[50px]'>
                    <div className='text-center'>
                        <div className='justify-center w-full'>
                            <List>
                                {activities.map((activity, index) => {
                                    return (
                                        <ListItem key={index}>
                                            <div className="w-full">
                                                <ActivityCard activity={activity} navigateToActivity={navigateToActivity} />
                                            </div>
                                        </ListItem>
                                    )
                                })}
                            </List>
                        </div>
                    </div>
                </div>
            </LayoutTemplate>

        </>
    )
}

export default Home;
