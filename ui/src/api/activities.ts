import ActivityData from "../types/activity";


const activity_data = [
    {
      "activity_id": "ACT001",
      "title": "Community Cleanup",
      "name": "Geetanjali Vashist",
      "description": "Community Cleanup event organized by local community",
      "date": "2024-02-21",
      "latitude": 37.7749,
      "longitude": -122.4194,
      "points": 150,
      "duration": 3,
      "organization_id": "53a6f1e2-8e48-4c7c-87e4-860f4059ae35",
      "type": "Community Cleanup",
      "tags": [
        "#SDG5"
      ],
      "likes": 76
    },
    {
      "activity_id": "ACT002",
      "title": "Beach Cleanup",
      "name": "Jane Smith",
      "description": "Community Cleanup event organized by Clean Beaches Organization",
      "date": "2024-02-21",
      "latitude": 40.7128,
      "longitude": -74.0060,
      "points": 85,
      "duration": 6,
      "organization_id": "cb51d5b4-20d2-4f6a-b4f5-06cf0b032f52",
      "type": "Beach Cleanup",
      "tags": [
        "#SDG13"
      ],
      "likes": 42
    },
    {
      "activity_id": "ACT003",
      "title": "Teaching kids to code",
      "name": "David Johnson",
      "description": "Teaching kids to code event organized by local school",
      "date": "2024-02-21",
      "latitude": 34.0522,
      "longitude": -118.2437,
      "points": 110,
      "duration": 4,
      "organization_id": "",
      "type": "Education",
      "tags": [
        "#SDG7"
      ],
      "likes": 62
    },
    {
      "activity_id": "ACT004",
      "title": "Animal Shelter Volunteer",
      "name": "Emily Brown",
      "description": "Organized by Every Animal Matters",
      "date": "2024-02-21",
      "latitude": 51.5074,
      "longitude": -0.1278,
      "points": 70,
      "duration": 2,
      "organization_id": "2a9c162b-c1ff-4d11-b445-f15a3484308f",
      "type": "Volunteer",
      "tags": [
        "#SDG11"
      ],
      "likes": 38
    },
    {
      "activity_id": "ACT005",
      "title": "Volunteer at Food Bank",
      "name": "Michael Wilson",
      "description": "Organized by the Houston food bank",
      "date": "2024-02-21",
      "latitude": 51.5074,
      "longitude": -0.1278,
      "points": 190,
      "duration": 7,
      "organization_id": "4c2f3728-20c0-49d1-a0a3-6cfb3d4f5b6d",
      "type": "Food Distribution",
      "tags": [
        "#SDG1"
      ],
      "likes": 88
    }
  ]

export const getActivities = (): Promise<ActivityData[]> => {
  return new Promise((resolve) => {
      resolve(activity_data.map((activity: any) => {
          return {
              activity_id: activity.activity_id,
              name: activity.name,
              date: activity.date,
              points: activity.points,
              duration: activity.duration,
              title: activity.title,
              description: activity.description
          } as ActivityData;
      }));
  });
};

export const getActivity = (activity_id: string): Promise<ActivityData> => {
  return new Promise((resolve, reject) => {
      const activity = activity_data.find((activity) => activity.activity_id === activity_id);
      if (activity) {
          resolve({
              activity_id: activity.activity_id,
              name: activity.name,
              date: activity.date,
              points: activity.points,
              duration: activity.duration,
              title: activity.title,
              description: activity.description
          } as ActivityData);
      } else {
          reject("Activity not found");
      }
  });
}




