import React, { useContext } from 'react';

import { addActivity } from '../api/db/activities';
// import { addActivity } from "../api/mock/activities";
import { CurrentUserContext } from '../contexts/UserContext';

import LayoutTemplate from './LayoutTemplate';
import AddActivityForm from '../forms/AddActivityForm';



const RecordPage: React.FC = () => {

    const { userData } = useContext(CurrentUserContext);
    return (
        <LayoutTemplate>
            <AddActivityForm userData={userData} addActivity={addActivity} />
        </LayoutTemplate>
    )
};



export default RecordPage;