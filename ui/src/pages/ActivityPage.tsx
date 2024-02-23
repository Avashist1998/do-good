import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import type ActivityData from '../types/activity';
import ActivityCard from '../components/ActivityCard';
// import { CurrentUserContext } from '../contexts/UserContext';

import { Box, CircularProgress } from '@mui/material';
import LayoutTemplate from './LayoutTemplate';
import { getActivity } from '../api/activities';

const ActivityPage: React.FC = () => {

    // const { userData } = useContext(CurrentUserContext);
    const { activityId } = useParams<{ activityId: string } >();
    const [loading, setLoading] = useState(true);
    const [activity, setActivity] = useState<ActivityData | null>(null);

    useEffect(() => {
        const id: string = activityId || "";
        getActivity(id).then((res) => {
            setActivity(res);
        }).catch((error) => {
            console.log(error);
        }).finally(() => {
            setLoading(false);
        });
    }, [])

    return (
        <>
            <LayoutTemplate>
                <div className='overflow-auto pb-[50px]'>
                    <div className='text-center'>
                        <div className='justify-center w-full'>
                           {
                                loading ? 
                                <Box className="flex justify-center">
                                    <CircularProgress />
                                </Box>
                                :
                                activity === null ?
                                <div>
                                    <h1>404</h1>
                                </div>
                                :
                                 <div>
                                      <ActivityCard activity={activity} />
                                 </div>
                           }
                        </div>
                    </div>
                </div>
            </LayoutTemplate>

        </>
    )
}

export default ActivityPage;
