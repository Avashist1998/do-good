import React, { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import type ActivityData from '../types/activity';
import ActivityCard from '../components/ActivityCard';

import { List, ListItem } from '@mui/material';
import LayoutTemplate from './LayoutTemplate';
// import { getActivities } from '../api/activities';
import { getActivities } from '../api/db/activites';
import { CurrentUserContext } from '../contexts/UserContext';

const HomePage: React.FC = () => {

    const navigate = useNavigate();
    const { userData } = useContext(CurrentUserContext)
    const [activities, setActivities] = useState<ActivityData[]>([]);

    useEffect(() => {
        console.log(userData)
        if (userData !== null) {
            console.log(userData)
            getActivities(userData.id).then((res) => {
                setActivities(res);
            }).catch((error) => {
                console.log(error);
            });
        } else {
            setActivities([]);
        }
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
