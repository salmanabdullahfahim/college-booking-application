import React, { useEffect, useState } from "react";
import CollegeCard from "./CollegeCard";
import { ScaleLoader } from "react-spinners";

const CollegeCardSection = () => {
  const [colleges, setColleges] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("https://college-booking-app.vercel.app/colleges")
      .then((res) => res.json())
      .then((data) => {
        setColleges(data);
        setLoading(false);
      });
  }, []);
  // Slice the first three colleges
  const firstThreeColleges = colleges.slice(0, 3);
  return (
    <section>
      <h2 className="text-3xl italic font-bold text-center mt-6">Colleges</h2>

      {loading ? (
        <div className="flex justify-center items-center h-32">
          <div className="loader">
            <ScaleLoader color="#6674cc" />
          </div>
        </div>
      ) : (
        <div className="mx-14 md:mx-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 my-4">
          {firstThreeColleges?.map((college) => (
            <CollegeCard college={college} key={college?._id}></CollegeCard>
          ))}
        </div>
      )}
    </section>
  );
};

export default CollegeCardSection;
