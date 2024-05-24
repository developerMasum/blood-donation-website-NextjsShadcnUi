export interface TDonner {
  id: string;
  name: string;
  email: string;
  bloodType: string;
  location: string;
  availability: boolean;
  createdAt: string;
  updatedAt: string;
  UserProfile: {
    id: string;
    userId: string;
    bio: string;
    age: number;
    lastDonationDate: string;
    createdAt: string;
    updatedAt: string;
  };
} 


  export const bloodGroups: string[] = [
    "A+",
    "A-",
    "B+",
    "B-",
    "AB+",
    "AB-",
    "O+",
    "O-",
  ];