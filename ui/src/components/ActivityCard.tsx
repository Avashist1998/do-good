import type ActivityData from '../types/activity';
const ActivityCard = (props: {
    activity: ActivityData
}) => {

    return (
        <>
            <h1>{props.activity.title}</h1>
        </>
        )
}


export default ActivityCard;