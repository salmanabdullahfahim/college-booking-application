import React, { useEffect, useState } from "react";

import AdmissionCard from "./AdmissionCard";
import { ScaleLoader } from "react-spinners";

const Admission = () => {
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

  return (
    <section>
      <h2 className="text-3xl italic font-bold text-center my-8">Admission</h2>

      {loading ? (
        <div className="flex justify-center items-center h-32">
          <div className="loader">
            <ScaleLoader color="#6674cc" />
          </div>
        </div>
      ) : (
        <div className="mx-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 my-4">
          {colleges?.map((college) => (
            <AdmissionCard college={college} key={college?.id}></AdmissionCard>
          ))}
        </div>
      )}
    </section>
  );
};

export default Admission;
