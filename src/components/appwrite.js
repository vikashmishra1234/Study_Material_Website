import { Client, Databases, Storage } from "appwrite";

// Initialize Appwrite client
const client = new Client();
client
  .setEndpoint("https://cloud.appwrite.io/v1") // Replace with your Appwrite endpoint
  .setProject("6750303f00270b2f1508"); // Replace with your Appwrite project ID

// Initialize Storage SDK
export const databases = new Databases(client);
export const storage = new Storage(client)
