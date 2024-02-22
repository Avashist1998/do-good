type ActivityData = {
    title: string,
    name: string,
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
}

export default ActivityData;