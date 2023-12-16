import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { ScaleLoader } from "react-spinners";

const MyCollege = () => {
  const { user } = useContext(AuthContext);

  const [colleges, setColleges] = useState([]);

  const [isLoading, setIsLoading] = useState(true);
  const url = `http://localhost:5001/myCollege?email=${user?.email}`;

  useEffect(() => {
    setIsLoading(true);
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setColleges(data);

        setIsLoading(false);
      });
  }, []);
  return (
    <div className="min-h-screen">
      <h2 className="text-3xl text-center font-bold my-6 italic">My College</h2>

      {isLoading ? (
        <div className="flex justify-center items-center h-32">
          <div className="loader">
            <ScaleLoader color="#6674cc" />
          </div>
        </div>
      ) : (
        <div>
          {colleges?.map((college) => (
            <div key={college._id} className="bg-gray-200 mx-12 rounded-md p-6">
              <h2 className="text-2xl font-semibold ml-7">
                College Name: {college.college}
              </h2>
              <p className="text-xl font-semibold ml-7">
                Subject: {college.subject}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyCollege;
