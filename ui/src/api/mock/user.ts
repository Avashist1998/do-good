import UserInfo from '../../types/userInfo';
import { users } from "./auth"




export async function getUser(userId: string): Promise<UserInfo> {
    try {
        users.forEach(user => {
            if (user.id == userId) {
                return user as UserInfo
            }
        });
        throw new Error("Failed to get user");
    }
    catch (error) {
        console.log(error)
        throw new Error('Failed to get activities');
    }
}

