import PocketBase from "pocketbase";
import { promises as fs } from "node:fs";


const pb = new PocketBase("http://192.168.1.65:8090");
const authData = await pb.admins.authWithPassword(process.env.USERNAME, process.env.PASSWORD);

fs.readFile("./users.json").then(async (data) => {
    const users = JSON.parse(data);
    for (let user of users) {
        console.log(user);
        const record = await pb.collection("users").create(user);
    }
    pb.authStore.clear();
}).catch((err) => {
    console.error(err);
})
