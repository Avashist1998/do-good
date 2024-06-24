import UserInfo from '../../types/userInfo';
import UserLogin from '../../types/userLogin';
import UserSignUp from '../../types/userSignUp';


type UserDB = {
    id: string,
    email: string,
    name: string,
    username: string,
    role: string,
    token: string,
    password: string,

}

export const users: UserDB[] = [
    {   id: "1",
        email: "test@gmail.com",
        name: "test",
        username: "test",
        role: "user",
        token: "123",
        password: "123456789"
    }
]



export async function signUpUser(user: UserSignUp): Promise<UserInfo> {
    const data = {
        "id": `user-${users.length}`,
        "token": "43",
        "username": user.name,
        "email": user.email,
        "emailVisibility": true,
        "password": user.password,
        "passwordConfirm": user.password,
        "name": user.name,
        "role": user.role
    } as UserDB;
    try {
        users.push(data)
        return data as unknown as UserInfo
    }
    catch (error) {
        console.log(error)
        throw new Error('Failed to create a user');
    }
}


export async function loginUser(user: UserLogin): Promise<UserInfo> {
    try {
        console.log(users)
        console.log(user)
        let foundUser: UserInfo | null = null;
        users.forEach(aUser => {
            if (aUser.email === user.email && aUser.password === user.password) {
                foundUser =  aUser as UserInfo;
            }
        })

        return new Promise<UserInfo>((resolve, reject) => {
            if (foundUser !== null) {
                resolve(foundUser)
            } else {
                reject("Failed to get user")
            }
        })
        throw new Error("Invalid credentials");
    } catch (error) {
        console.log(error)
        throw new Error('Invalid credentials');
    }
}


export async function logout() {
    console.log("Logout")
}
