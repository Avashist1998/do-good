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
    // const { userData } = useContext(CurrentUserContext);
    return (
        <>
            <LayoutTemplate>
                <div>
                    {/* <p>Welcome {userData?.username}</p>
                    <p>Your role is {userData?.role}</p>
                    <p>Your token is {userData?.token}</p> */}
                    <p>Your location is {location?.lat || ""}, {location?.log || ""}</p>
                    <div>                
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
                    </div>
                </div>
                <div className='overflow-auto pb-[50px]'>
                    <div className='text-center'>
                        <div className='justify-center w-full'>
                            <List>
                                {Array.from({length: 10}, (_, i) => i).map((i) => {
                                    return (
                                        <ListItem key={i}>
                                            <div className="w-full">
                                                <ActivityCard activity={{
                                                        title: "Activity " + (i+1),
                                                        description: "This is the first activity",
                                                        date: "2021-09-01",
                                                        points: 10,
                                                        lot: 1,
                                                        log: 1
                                                    } as ActivityData} />
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
