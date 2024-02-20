import PocketBase from 'pocketbase';

import { dbURL } from './base'
const pb = new PocketBase(dbURL);


export async function login(email: string, password: string) {
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
    try {
        await pb.authStore.clear();
    } finally {
        throw new Error('Error logging out');
    }
}
