import PocketBase from 'pocketbase';
import { dbURL } from './base';

let pbInstance: PocketBase | null = null;

export function getPocketBaseInstance(): PocketBase {
    if (!pbInstance) {
        pbInstance = new PocketBase(dbURL);
    }
    return pbInstance;
}