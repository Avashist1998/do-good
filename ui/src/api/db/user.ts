import UserInfo from '../../types/userInfo';
import { getPocketBaseInstance } from './pocketbaseInstance';


export async function getUser(userId: string): Promise<UserInfo> {
    const pb = getPocketBaseInstance();
    try {
        const user = await pb.collection('users').getOne(userId);
        console.log(user)
        return user as unknown as UserInfo;
    }
    catch (error) {
        console.log(error)
        throw new Error('Failed to get activities');
    }
}

