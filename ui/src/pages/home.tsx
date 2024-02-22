import React from 'react';
import { useState } from 'react';

import getLocation from '../api/location';

import LocationData from '../types/location';
import type ActivityData from '../types/activity';
import ActivityCard from '../components/ActivityCard';
// import { CurrentUserContext } from '../contexts/UserContext';

import { Button, List, ListItem } from '@mui/material';
import LayoutTemplate from './LayoutTemplate';

const Home: React.FC = () => {

    const [location, setLocation] = useState<LocationData | null>(null);
    const [activities, setActivities] = useState<ActivityData[]>([
        {
          "title": "Community Cleanup Activity by John Doe",
          "name": "John Doe",
          "description": "Community Cleanup event organized by local community",
          "date": "2024-02-21",
          "latitude": 37.7749,
          "longitude": -122.4194,
          "points": 150,
          "duration": 3,
          "organization_id": "53a6f1e2-8e48-4c7c-87e4-860f4059ae35",
          "type": "Community Cleanup",
          "tags": ["#SDG5"],
          "likes": 76
        },
        {
          "title": "Community Cleanup Activity by Jane Smith",
          "name": "Jane Smith",
          "description": "Community Cleanup event organized by local community",
          "date": "2024-02-21",
          "latitude": 40.7128,
          "longitude": -74.0060,
          "points": 85,
          "duration": 6,
          "organization_id": "cb51d5b4-20d2-4f6a-b4f5-06cf0b032f52",
          "type": "Community Cleanup",
          "tags": ["#SDG13"],
          "likes": 42
        },
        {
          "title": "Community Cleanup Activity by David Johnson",
          "name": "David Johnson",
          "description": "Community Cleanup event organized by local community",
          "date": "2024-02-21",
          "latitude": 34.0522,
          "longitude": -118.2437,
          "points": 110,
          "duration": 4,
          "organization_id": "effb2582-6b18-48f4-ae88-10c8b4088c3d",
          "type": "Community Cleanup",
          "tags": ["#SDG7"],
          "likes": 62
        },
        {
          "title": "Community Cleanup Activity by Emily Brown",
          "name": "Emily Brown",
          "description": "Community Cleanup event organized by local community",
          "date": "2024-02-21",
          "latitude": 51.5074,
          "longitude": -0.1278,
          "points": 70,
          "duration": 2,
          "organization_id": "2a9c162b-c1ff-4d11-b445-f15a3484308f",
          "type": "Community Cleanup",
          "tags": ["#SDG11"],
          "likes": 38
        },
        {
          "title": "Community Cleanup Activity by Michael Wilson",
          "name": "Michael Wilson",
          "description": "Community Cleanup event organized by local community",
          "date": "2024-02-21",
          "latitude": 51.5074,
          "longitude": -0.1278,
          "points": 190,
          "duration": 7,
          "organization_id": "4c2f3728-20c0-49d1-a0a3-6cfb3d4f5b6d",
          "type": "Community Cleanup",
          "tags": ["#SDG1"],
          "likes": 88
        }
      ]);


    // const { userData } = useContext(CurrentUserContext);
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
                                                <ActivityCard activity={activity} />
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
