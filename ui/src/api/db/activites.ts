import ActivityData from '../../types/activity';
import { getPocketBaseInstance } from './pocketbaseInstance';


export async function getActivities(): Promise<ActivityData[]> {
    const pb = getPocketBaseInstance();
    try {
        console.log("this was called")
        const activites = await pb.collection('activities').getList(1, 50, {
            expand: 'creator' 
        });
        console.log(activites)
        const res: ActivityData[] = []
        let index = 0;
        for await (const activity of activites.items) { 
            const activityData = activity as unknown as ActivityData;
            try {
                activityData.creator = activity.expand?.creator.username;
                activityData.activity_id = activity.id
                activityData.img_url = [];
                activity.images.forEach((subURL: string) => {
                    const url = pb.files.getUrl(activity, subURL, {'thumb': '100x250'});
                    activityData.img_url.push(url);
                });
                console.log(activityData)
                res.push(activityData);
            } catch (error) {
                console.error(error)
                res.push(activityData);
            }
            index += 1;
        };
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
        console.log(activity)
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


export async function addActivity(userId: string, activity: ActivityData) {
    const pb = getPocketBaseInstance();
    try {

        const data = {
            "title": activity.title,
            "creator": userId,
            "date": activity.date,
            "description": activity.description,
            "points": activity.points,
            "duration": activity.duration,
            "Type": activity.type,
            "Tags": "[]"
        };
        console.log(data)
        const newActivity = await pb.collection('activities').create(data);
        return newActivity as unknown as ActivityData;
    } catch (error) {
        console.log(error)
        throw new Error('Invalid credentials');
    }
}


