import React, { useState } from "react";
import { storage, databases } from "../appwrite";

const UploadForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    code: "",
    about: "",
    price: "",
    year: "",
  });
  const [image, setImage] = useState(null);
  const [pdf, setPdf] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const { name } = e.target;
    if (name === "image") setImage(e.target.files[0]);
    if (name === "pdf") setPdf(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!pdf) {
      alert("Please upload a PDF.");
      return;
    }

    try {
      // 1. Upload PDF to Appwrite
      const pdfResponse = await storage.createFile(
        "67503155001b684f97ae", // Replace with your bucket ID
        "unique()",       // Generate unique file ID
        pdf
      );
      //bucket id
      const pdfUrl = storage.getFileView("67503155001b684f97ae", pdfResponse.$id);

      await databases.createDocument(
        "675040be001e43585a68",    // Replace with your Database ID
        "675051560037fb99824f",  // Replace with your Collection ID
        "unique()",            // Generate unique document ID
        {
          ...formData,
          image: image ? image.name : null, // Save image name (optional)
          url: pdfUrl,                   // Save the PDF view URL
        }
      );

      alert("Document uploaded successfully!");
    } catch (error) {
      console.error("Error uploading:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
          Title:
        </label>
        <input
          type="text"
          name="title"
          id="title"
          value={formData.title}
          onChange={handleChange}
          required
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="code">
          Code:
        </label>
        <input
          type="text"
          name="code"
          id="code"
          value={formData.code}
          onChange={handleChange}
          required
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="about">
          About:
        </label>
        <textarea
          name="about"
          id="about"
          value={formData.about}
          onChange={handleChange}
          required
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32"
        ></textarea>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="price">
          Price:
        </label>
        <input
          type="number"
          name="price"
          id="price"
          value={formData.price}
          onChange={handleChange}
          required
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="year">
          Year:
        </label>
        <input
          type="number"
          name="year"
          id="year"
          value={formData.year}
          onChange={handleChange}
          required
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="image">
          Image:
        </label>
        <input
          type="file"
          name="image"
          id="image"
          onChange={handleFileChange}
          accept="image/*"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="pdf">
          PDF:
        </label>
        <input
          type="file"
          name="pdf"
          id="pdf"
          onChange={handleFileChange}
          accept="application/pdf"
          required
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="flex items-center justify-between">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default UploadForm;

