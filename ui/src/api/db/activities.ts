import ActivityData, { ActivityUploadData } from '../../types/activity';
import { getPocketBaseInstance } from './pocketbaseInstance';


export async function getActivities(userId: string): Promise<ActivityData[]> {
    const pb = getPocketBaseInstance();
    const res: ActivityData[] = []
    try {
        const activites = await pb.collection('activities').getList(1, 50, {
            filter: `creator="${userId}"`,
            expand: 'creator',
            sort: "-date"
        });
        for await (const activity of activites.items) { 

            console.log(activity.tags)
            if (activity.tags === null) {
                activity.tags = []
            }
            const activityData = activity as unknown as ActivityData;
            console.log(activity.tags)
            try {
                activityData.creator = activity.expand?.creator.username;
                activityData.activity_id = activity.id
                activityData.img_url = [];
                activity.images.forEach((subURL: string) => {
                    const url = pb.files.getUrl(activity, subURL, {'thumb': '100x250'});
                    activityData.img_url.push(url);
                });
                res.push(activityData);
            } catch (error) {
                console.error(error)
                res.push(activityData);
            }
        }
        console.log(res);
        return res;
    }
    catch (error) {
        console.log(error)
        throw new Error('Failed to get activities');
    }
}

export async function getActivity(activityId: string) {
    const pb = getPocketBaseInstance();
    try {
        const activity = await pb.collection('activities').getOne(activityId, {
            expand: 'creator'
        });
        if (activity.tags === null) {
            activity.tags = []
        }
        const activityData = activity as unknown as ActivityData;
        activityData.activity_id = activity.id
        activityData.creator = activity.expand?.creator.username
        activityData.img_url = [];
        activity.images.forEach((subURL: string) => {
            const url = pb.files.getUrl(activity, subURL, {'thumb': '100x250'});
            activityData.img_url.push(url);
        });
        return activityData
    } catch (error) {
        console.log(error)
        throw new Error('Invalid credentials');
    }
}


export async function addActivity(userId: string, activity: ActivityUploadData) {
    const pb = getPocketBaseInstance();
    try {

        const data = {
            "title": activity.title,
            "creator": userId,
            "date": activity.date,
            "description": activity.description,
            "points": activity.points,
            "duration": activity.duration,
            "type": activity.type,
            "tags": activity.tags,
            "images": activity.images
        };
        console.log(data)
        const newActivity = await pb.collection('activities').create(data);
        return newActivity as unknown as ActivityData;
    } catch (error) {
        console.log(error)
        throw new Error('Invalid credentials');
    }
}


