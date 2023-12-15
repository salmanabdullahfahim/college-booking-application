import { Link } from "react-router-dom";

const ResearchPaper = () => {
  const researches = [
    {
      photo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvTfBX6hprV2doC1Uvu2OmLYseIHe4pmoWVPLGQ-lwrA&s",
      name: "Artificial Intelligence",
      link: "https://arxiv.org/list/cs.AI/recent",
      college: "Cornell University",
    },
    {
      photo:
        "https://media.springernature.com/lw685/springer-static/image/art%3A10.1038%2Fs41598-023-47053-4/MediaObjects/41598_2023_47053_Fig1_HTML.png",
      name: "Intra Cardiac Flow",
      link: "https://www.nature.com/articles/s41598-023-47053-4",
      college: "IIT Khragpur",
    },
    {
      photo:
        "https://www.incrementors.com/blog/wp-content/uploads/2022/06/HTML-Sitemap-1.png",
      name: "Efficient Web Structuring with Sitexml",
      link: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4619725",
      college: "Michigan University",
    },
  ];
  return (
    <div className="py-6 md:mb-12">
      <h2 className="text-center text-3xl font-bold italic py-4">
        Research Paper
      </h2>
      <div className="flex flex-col md:flex-row justify-center gap-6 mx-auto">
        {researches.map((research) => (
          <div key={research.name}>
            <div className="relative h-[400px] w-[300px] rounded-lg">
              <img
                src={research.photo}
                alt=""
                className="z-0 h-full w-full rounded-md object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-left">
                <h1 className="text-lg font-semibold text-white">
                  {research.name}
                </h1>
                <p className="mt-2 text-sm text-gray-300">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Excepturi, debitis?
                </p>
                <Link
                  to={research.link}
                  className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white underline"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResearchPaper;
