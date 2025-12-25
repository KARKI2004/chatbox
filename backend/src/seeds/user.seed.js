import { config } from "dotenv";
import { connectDB } from "../lib/db.js";
import User from "../models/user.model.js";

config();

const seedUsers = [
  {
    email: "anisha.@example.com",
    fullName: "Anisha",
    password: "12345678",
    profilePic: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    email: "sita.@example.com",
    fullName: "Sita",
    password: "12345678",
    profilePic: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    email: "ramesh.@example.com",
    fullName: "Ramesh",
    password: "12345678",
    profilePic: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    email: "bikash.@example.com",
    fullName: "Bikash",
    password: "12345678",
    profilePic: "https://randomuser.me/api/portraits/men/2.jpg",
  },
];

const seedDatabase = async () => {
  try {
    await connectDB();
    await User.insertMany(seedUsers);
    console.log("Database seeded successfully");
  } catch (error) {
    console.error("Error seeding database:", error);
  }
};

seedDatabase();
