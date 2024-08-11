export type ActivityUploadData = {
    title: string,
    creator: string,
    description: string,
    date: string,
    tag: string,
    points: number,
    duration: number,
    type: string,
    tags: string[],
    images: File[],
}


export type ActivityDownloadData = {
    activity_id: string,
    title: string,
    creator: string,
    description: string,
    date: string,
    latitude: number,
    longitude: number,
    points: number,
    duration: number,
    organization_id: string,
    type: string,
    tags: string,
    likes: number,
    img_url: string[],
}





type ActivityData = {
    activity_id: string,
    title: string,
    creator: string,
    description: string,
    date: string,
    latitude: number,
    longitude: number,
    points: number,
    duration: number,
    organization_id: string,
    type: string,
    tags: string[],
    likes: number,
    img_url: string[],
}

export default ActivityData;