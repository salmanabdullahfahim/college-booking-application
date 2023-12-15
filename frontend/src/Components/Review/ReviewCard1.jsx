import { ArrowUpRight } from "lucide-react";
import manitoba from "/Administration-Building-University-of-Manitoba-Winnipeg-Canada.webp";

export function ReviewCard1() {
  return (
    <div className="flex max-w-2xl flex-col items-center rounded-md border md:flex-row">
      <div className="h-full w-full md:h-[200px] md:w-[300px]">
        <img src={manitoba} className="h-full w-full rounded-md object-cover" />
      </div>
      <div>
        <div className="p-4">
          <h1 className="inline-flex items-center text-lg font-semibold">
            U Manitoba <ArrowUpRight className="ml-2 h-4 w-4" />
          </h1>
          <p className="mt-3 text-sm text-gray-600">
            This is an amazing college that tech me the real life experience
            with industry expert. I always recommend my junior to admit here
          </p>

          <div className="mt-3 flex items-center space-x-2">
            <img
              className="inline-block h-8 w-8 rounded-full"
              src="https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250"
              alt="Alex Carry"
            />
            <span className="flex flex-col">
              <span className="text-[10px] font-medium text-gray-900">
                Alex Carry
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
