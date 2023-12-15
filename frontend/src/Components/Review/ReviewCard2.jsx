import { ArrowUpRight } from "lucide-react";
import arizona from "/download.jpeg";

export function ReviewCard2() {
  return (
    <div className="flex max-w-2xl flex-col items-center rounded-md border md:flex-row">
      <div className="h-full w-full md:h-[200px] md:w-[300px]">
        <img src={arizona} className="h-full w-full rounded-md object-cover" />
      </div>
      <div>
        <div className="p-4">
          <h1 className="inline-flex items-center text-lg font-semibold">
            U. Arizona <ArrowUpRight className="ml-2 h-4 w-4" />
          </h1>
          <p className="mt-3 text-sm text-gray-600">
            Amazing campus with better lab facilities which took me into a big
            tech company.
          </p>

          <div className="mt-3 flex items-center space-x-2">
            <img
              className="inline-block h-8 w-8 rounded-full"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUIYhxZyjXVCEBnZCWb2DN1c3b2QCQnucG7Q&usqp=CAU"
              alt="Al Arabi"
            />
            <span className="flex flex-col">
              <span className="text-[10px] font-medium text-gray-900">
                Al Arabi
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
