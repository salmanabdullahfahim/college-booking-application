import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export function ErrorElement() {
  return (
    <div className="flex flex-col px-2 lg:flex-row lg:items-center lg:justify-center py-9 gap-x-3">
      <div>
        <div>
          <p className="text-sm font-semibold text-black">404 error</p>
          <h1 className="mt-3 text-2xl font-semibold text-gray-800 md:text-3xl">
            We can&apos;t find that page
          </h1>
          <p className="mt-4 text-gray-500">
            Sorry, the page you are looking for doesn&apos;t exist or has been
            moved.
          </p>
          <div className="mt-6 flex items-center gap-x-3">
            <Link
              to="/"
              type="button"
              className="inline-flex items-center rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              <ArrowLeft size={16} className="mr-2" />
              Go back to Home
            </Link>
            <button
              type="button"
              className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Contact us
            </button>
          </div>
        </div>
      </div>
      <div className="hidden lg:block">
        <img
          src="https://static.india.com/wp-content/uploads/2018/09/c.jpg"
          alt="404"
          className="h-full w-full rounded-md object-cover"
        />
      </div>
    </div>
  );
}
