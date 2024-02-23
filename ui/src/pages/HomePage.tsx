import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import type ActivityData from '../types/activity';
import ActivityCard from '../components/ActivityCard';

import { List, ListItem } from '@mui/material';
import LayoutTemplate from './LayoutTemplate';
import { getActivities } from '../api/activities';

const HomePage: React.FC = () => {

    const navigate = useNavigate();
    const [activities, setActivities] = useState<ActivityData[]>([]);

    useEffect(() => {
        console.log("Getting activities");
        getActivities().then((res) => {
            setActivities(res);
        }).catch((error) => {
            console.log(error);
        });
    },[])

    const navigateToActivity = (activityId: string) => {
        const path = `./${activityId}`;
        console.log(path);
        navigate(path);

    }

    return (
        <>
            <LayoutTemplate>
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

export default HomePage;
