import { ArrowUpRight } from "lucide-react";
import uLondon from "/download (1).jpeg";

export function ReviewCard3() {
  return (
    <div className="flex max-w-2xl flex-col items-center rounded-md border md:flex-row">
      <div className="h-full w-full md:h-[200px] md:w-[300px]">
        <img src={uLondon} className="h-full w-full rounded-md object-cover" />
      </div>
      <div>
        <div className="p-4">
          <h1 className="inline-flex items-center text-lg font-semibold">
            U. London <ArrowUpRight className="ml-2 h-4 w-4" />
          </h1>
          <p className="mt-3 text-sm text-gray-600">
            The teacher of this university are very friendly to students. They
            always focus on the practical that give me a better opportunity to
            standout in my placement journey
          </p>

          <div className="mt-3 flex items-center space-x-2">
            <img
              className="inline-block h-8 w-8 rounded-full"
              src="https://i.ibb.co/y81s7hX/IMG-20210123-150054-796.jpg"
              alt="Fahim"
            />
            <span className="flex flex-col">
              <span className="text-[10px] font-medium text-gray-900">
                Fahim
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
