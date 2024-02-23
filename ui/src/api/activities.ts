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
    },
    {
      "activity_id": "ACT006",
      "title": "Tree Planting",
      "name": "Alexandra Martinez",
      "description": "Tree planting event organized by Green Earth Initiative",
      "date": "2024-02-22",
      "latitude": 34.0522,
      "longitude": -118.2437,
      "points": 120,
      "duration": 4,
      "organization_id": "3a1e816e-06e4-4f78-8a41-cc62c5e8e624",
      "type": "Environmental Conservation",
      "tags": ["#SDG15"],
      "likes": 55
    },
    {
      "activity_id": "ACT007",
      "title": "Senior Center Visit",
      "name": "Sophia Lee",
      "description": "Visiting senior center organized by Helping Hands Foundation",
      "date": "2024-02-22",
      "latitude": 40.7128,
      "longitude": -74.0060,
      "points": 90,
      "duration": 2,
      "organization_id": "dcd1b577-fdf8-4d52-8893-8b31d3d11a7b",
      "type": "Community Service",
      "tags": ["#SDG3"],
      "likes": 35
    },
    {
      "activity_id": "ACT008",
      "title": "Park Cleanup",
      "name": "Daniel Garcia",
      "description": "Park cleanup event organized by City Parks Department",
      "date": "2024-02-22",
      "latitude": 37.7749,
      "longitude": -122.4194,
      "points": 80,
      "duration": 3,
      "organization_id": "",
      "type": "Community Cleanup",
      "tags": ["#SDG15"],
      "likes": 40
    },
    {
      "activity_id": "ACT009",
      "title": "Blood Donation Drive",
      "name": "Isabella Rodriguez",
      "description": "Blood donation drive organized by Red Cross",
      "date": "2024-02-22",
      "latitude": 34.0522,
      "longitude": -118.2437,
      "points": 150,
      "duration": 6,
      "organization_id": "d9874162-6886-4eae-99c1-2d701f42602e",
      "type": "Healthcare",
      "tags": ["#SDG3"],
      "likes": 70
    },
    {
      "activity_id": "ACT010",
      "title": "Homeless Shelter Volunteer",
      "name": "Ethan Thompson",
      "description": "Volunteering at local homeless shelter organized by Community Aid Organization",
      "date": "2024-02-22",
      "latitude": 51.5074,
      "longitude": -0.1278,
      "points": 100,
      "duration": 5,
      "organization_id": "f7f1dcb9-2904-4b7b-99b4-28a38a6f8df6",
      "type": "Volunteer",
      "tags": ["#SDG1"],
      "likes": 45
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
              description: activity.description,
              tags: activity.tags,
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
              description: activity.description,
              tags: activity.tags,
          } as ActivityData);
      } else {
          reject("Activity not found");
      }
  });
}




