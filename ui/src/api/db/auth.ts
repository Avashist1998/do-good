import UserInfo from '../../types/userInfo';
import UserLogin from '../../types/userLogin';
import UserSignUp from '../../types/userSignUp';
import { getPocketBaseInstance } from './pocketbaseInstance';


export async function signUpUser(user: UserSignUp): Promise<UserInfo> {
    const pb = getPocketBaseInstance();
    const data = {
        "username": user.name,
        "email": user.email,
        "emailVisibility": true,
        "password": user.password,
        "passwordConfirm": user.password,
        "name": user.name,
        "role": user.role
    };
    try {
        console.log(data)
        const newUser = await pb.collection('users').create(data);
        return newUser as unknown as UserInfo
    }
    catch (error) {
        console.log(error)
        throw new Error('Failed to create a user');
    }
}


export async function loginUser(user: UserLogin) : Promise<UserInfo> {
    const pb = getPocketBaseInstance();
    try {
        const authUser = await pb.collection('users').authWithPassword(user.email, user.password);
        const userInfo = authUser.record as unknown as UserInfo;
        if (userInfo !== undefined) {
            return userInfo;
        }
        throw new Error("Invalid credentials");
    } catch (error) {
        console.log(error)
        throw new Error('Invalid credentials');
    }
}


export async function logout() {
    const pb = getPocketBaseInstance();
    try {
        await pb.authStore.clear();
    } catch (error) {
        throw new Error('Error logging out');
    }
}



export async function signUpAndLoginInWithOAuth(provider: string) {
    const pb = getPocketBaseInstance();
    try {
        console.log("we are here")
        const authUser = await pb.collection("users").authWithOAuth2({ provider: provider })
        const userInfo = authUser.record as unknown as UserInfo;
        if (userInfo !== undefined) {
            return userInfo;
        }
        throw new Error("Invalid credentials");
    } catch (error) {
        console.log(error)
        throw new Error('Invalid credentials');
    }
}