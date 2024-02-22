import { getPocketBaseInstance } from './pocketbaseInstance';

export async function login(email: string, password: string) {
    const pb = getPocketBaseInstance();
    try {
        const user = await pb.collection('users').authWithPassword(email, password);
        if (pb.authStore.isValid) {
            return user;
        }
    } finally {
        throw new Error('Invalid credentials');
    }
}


export async function logout() {
    const pb = getPocketBaseInstance();
    try {
        await pb.authStore.clear();
    } finally {
        throw new Error('Error logging out');
    }
}
