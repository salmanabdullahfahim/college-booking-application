import React from "react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const CollegeCard = ({ college }) => {
  const {
    _id,
    name,
    image,
    admission_dates,
    events,
    research_history,
    sports_field,
  } = college;
  console.log(college);
  return (
    <div className="w-[300px] rounded-md border">
      <img
        src={image}
        alt="Laptop"
        className="h-[200px] w-full rounded-t-md object-cover"
      />
      <div className="p-4">
        <h1 className="inline-flex items-center text-lg font-semibold">
          {name} &nbsp; <ArrowUpRight className="h-4 w-4" />
        </h1>
        <p className="mt-3 text-sm text-gray-600">
          Admission Date: {admission_dates}
        </p>
        <div className="mt-4">
          <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
            Events: {events.length}
          </span>
          <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-2 text-[10px] font-semibold text-gray-900">
            Sports: {sports_field}
          </span>
          <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-2 text-[10px] font-semibold text-gray-900">
            Research: {research_history}
          </span>
        </div>
        <Link to={`/colleges/${_id}`}>
          <button
            type="button"
            className="mt-4 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CollegeCard;
