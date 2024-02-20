import type LocationData from "../types/location";

const getLocation =  async () : Promise<LocationData> => {
    if (!navigator.geolocation) {
        throw new Error('Geolocation is not supported by your browser');
    }
    return new Promise ((resolve, reject) => {
        navigator.geolocation.getCurrentPosition((position) => {
        resolve({
            lat: position.coords.latitude,
            log: position.coords.longitude
        } as LocationData)}, error => {
            reject(error);
        })

    })

}

export default getLocation;