import { databases } from "../appwrite";

const getPdfs = async () => {
  try {
    const response = await databases.listDocuments(
      "675040be001e43585a68", // Replace with your Database ID
      "675040d30013eaa04001" // Replace with your Collection ID
    );
    console.log("Documents:", response.documents);
    return response.documents; // Array of documents
  } catch (error) {
    console.error("Error fetching documents:", error);
    return [];
  }
};

export default getPdfs
