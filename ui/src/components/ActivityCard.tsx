import { useState } from 'react';

import { Card, CardActionArea, CardContent, CardHeader, CardMedia, IconButton, Typography, Avatar } from '@mui/material';
import { red, green, orange, blue } from '@mui/material/colors';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import type ActivityData from '../types/activity';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import IosShareIcon from '@mui/icons-material/IosShare';

const ActivityCard = (props: {
    activity: ActivityData
    navigateToActivity?: (activityId: string) => void
}) => {

    const [liked, setLiked] = useState(false);
    const color = [red[500], red[300], green[500], green[200], orange[500], blue[200]][props.activity.description.length % 6]
    console.log(props.activity);
    return (
        <>
            <Card>
                <CardHeader
                    avatar={
                        <Avatar sx={{ bgcolor:  color}} aria-label="recipe">
                            {props.activity.creator[0]}
                        </Avatar>
                    }
                    action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>}

                    title={props.activity.creator}
                    subheader={new Date(props.activity.date).toLocaleDateString(undefined, {
                                            year: 'numeric',
                                            month: 'short',
                                            day: 'numeric',})}
                    />
                <CardActionArea onClick={() => {
                    if (props.navigateToActivity) {
                        props.navigateToActivity(props.activity.activity_id);
                    }
                }}>
                {
                    props.activity.img_url.length !== 0 ?
                    <>
                        <CardMedia
                            component="img"
                            height="300"
                            image={props.activity.img_url[0]}
                            alt="Paella dish"
                        />
                    </>
                    : null
                }
                <CardContent>
                    <Typography textAlign={"left"} gutterBottom variant="h5" component="div">
                        {props.activity.title}
                    </Typography>
                    <Typography textAlign={"left"} variant="body2" color="text.secondary">
                        {props.activity.description}
                    </Typography>
                </CardContent>
                </CardActionArea>
                <CardContent>
                    <ul className="flex space-x-2">
                        <Typography variant="body2" color="text.secondary">
                            {props.activity.points} Points
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {props.activity.duration || "0"} hr
                        </Typography>
                    </ul>
                    {/* <ul className={`flex space-x-${props.activity.tags.length}`}>
                        {props.activity.tags.map((tag, index) => {
                            return (
                                <li key={index}>
                                    {tag}
                                </li>
                            )
                            })
                        }
                    </ul> */}
                </CardContent>
                <div className='row flex justify-center'>
                    <div className="w-[50%]">
                        <IconButton onClick={
                            () => {
                                if (liked) {
                                    setLiked(false);
                                } else {
                                    setLiked(true);
                                }
                            }
                        
                        }>
                            <ThumbUpIcon color={liked ? "primary" : "action"}/>
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