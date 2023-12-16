import React, { useEffect, useState } from "react";
import CollegeCard from "./CollegeCard";

const CollegeCardSection = () => {
  const [colleges, setColleges] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5001/colleges")
      .then((res) => res.json())
      .then((data) => setColleges(data));
  }, []);
  // Slice the first three colleges
  const firstThreeColleges = colleges.slice(0, 3);
  return (
    <section>
      <h2 className="text-3xl italic font-bold text-center">Colleges</h2>
      <div className=" mx-auto flex flex-col md:flex-row justify-center gap-4 my-4">
        {firstThreeColleges?.map((college) => (
          <CollegeCard college={college} key={college?._id}></CollegeCard>
        ))}
      </div>
    </section>
  );
};

export default CollegeCardSection;
