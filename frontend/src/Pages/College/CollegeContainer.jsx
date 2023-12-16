import React, { useEffect, useState } from "react";
import CollegeCard from "../../Components/Cardsection/CollegeCard";

const CollegeContainer = () => {
  const [colleges, setColleges] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5001/colleges")
      .then((res) => res.json())
      .then((data) => setColleges(data));
  }, []);

  return (
    <section>
      <h2 className="text-3xl italic font-bold text-center">Colleges</h2>
      <div className=" mx-auto flex flex-col md:flex-row justify-center gap-4 my-4">
        {colleges?.map((college) => (
          <CollegeCard college={college} key={college?.id}></CollegeCard>
        ))}
      </div>
    </section>
  );
};

export default CollegeContainer;
