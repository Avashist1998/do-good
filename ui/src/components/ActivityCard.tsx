import { Card, CardActionArea, CardContent, CardHeader, IconButton, Typography } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import type ActivityData from '../types/activity';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import IosShareIcon from '@mui/icons-material/IosShare';

const ActivityCard = (props: {
    activity: ActivityData
}) => {
    return (
        <>
            <Card>
                <CardHeader
                    action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>}
                    title={props.activity.name}
                    subheader={new Date(props.activity.date).toLocaleDateString(undefined, {
                                            year: 'numeric',
                                            month: 'short',
                                            day: 'numeric',})}
                    />
                <CardActionArea>
                    <CardContent>
                        <ul className="flex space-x-2">
                            <Typography variant="body2" color="text.secondary">
                                {props.activity.points} Points
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {props.activity.duration || "0"} hr
                            </Typography>
                        </ul>
                        <div className='row flex'>
                            <Typography textAlign={"left"} gutterBottom variant="h5" component="div">
                                {props.activity.title}
                            </Typography>
                        </div>
                        <Typography variant="body2" color="text.secondary">
                            {props.activity.description}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <div className='row flex justify-center'>
                    <div className="w-[50%]">
                        <IconButton>
                            <ThumbUpIcon/>
                        </IconButton>
                    </div>
                    <IconButton>
                        <IosShareIcon/>
                    </IconButton>
                </div>
            </Card>
        </>
        )
}


export default ActivityCard;