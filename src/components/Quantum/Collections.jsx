import React from "react";
import { useQuery } from "react-query";
import fetchQuantums from "../utills/getPdfs";
import { Book, BookOpen, Download } from "lucide-react";
import { Link } from "react-router-dom";

const Collections = () => {
  const { data, isLoading, error } = useQuery("quantums", fetchQuantums, {
    staleTime: 1000 * 60 * 5,
  });
  const purchasedQuantum = data?.filter(
    (item) => `${item.$id}` === localStorage.getItem(`quantum${item.$id}`)
  );

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-purple-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-red-500 text-center p-4 bg-red-100 rounded-lg">
        {error.message}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-indigo-100 p-4 sm:p-8">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center text-purple-800 animate-fade-in">
          Your Magical Library
        </h2>
        {purchasedQuantum && purchasedQuantum.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {purchasedQuantum.map((item, ind) => (
              <div
                key={ind}
                className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105"
              >
                <div className="p-6 bg-gradient-to-r from-purple-500 to-indigo-500">
                  <Book className="w-12 h-12 text-white mb-4 mx-auto" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-capitalize text-gray-800 truncate">
                    {item.title}
                  </h3>
                  <span className="text-sm text-indigo-600 bg-indigo-100 px-2 py-1 rounded-full">
                    {item.code}
                  </span>
                  <div className="mt-4 flex justify-between items-center">
                    <Link
                      to={`/collections/read?q=${item.url}`}
                      className="flex items-center text-sm text-purple-600 hover:text-purple-800 transition-colors duration-300"
                    >
                      <BookOpen className="w-4 h-4 mr-1" />
                      Read
                    </Link>
                    <a
                      href={item.url}
                      download
                      className="flex items-center text-sm text-indigo-600 hover:text-indigo-800 transition-colors duration-300"
                    >
                      <Download className="w-4 h-4 mr-1" />
                      Download
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center p-8 bg-white rounded-xl shadow-md">
            <Book className="w-16 h-16 text-purple-500 mb-4 mx-auto" />
            <p className="text-xl text-gray-600">
              Your magical bookshelf is empty. Time to add some enchanted tomes!
              (please refresh page if not showing data accordingly)
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Collections;
