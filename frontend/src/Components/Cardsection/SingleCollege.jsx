import React from "react";
import { useLoaderData } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const SingleCollege = () => {
  const college = useLoaderData();

  const {
    _id,
    name,
    image,
    admission_dates,
    events,
    research_history,
    sports_field,
    rating,
  } = college;

  console.log(college);
  return (
    <div className="flex  flex-col items-center rounded-md border my-6 ">
      <div className="h-full w-11/12 md:h-[400px] p-4">
        <img
          src={image}
          alt=""
          className="h-full w-full rounded-md object-cover"
        />
      </div>
      <div>
        <div className="p-4">
          <h1 className="inline-flex items-center text-lg font-semibold">
            {name} <ArrowUpRight className="ml-2 h-4 w-4" />
          </h1>
          <p className="mt-3 text-sm text-gray-600">{}</p>
          <div className="mt-4">
            <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
              Admission Date: {admission_dates}
            </span>
            <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
              Rating: {rating}
            </span>
            <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
              Events: {events.length}
            </span>
          </div>
          <div className="mt-3 flex items-center space-x-2">
            <span className="flex flex-col">
              <span className="text-[15px] font-medium text-gray-900">
                Research History: {research_history}
              </span>
              <span className="text-[15px] font-medium text-gray-800">
                Sports: {sports_field}
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCollege;
