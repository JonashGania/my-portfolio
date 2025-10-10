import { getCertificates } from "../sanity/lib/queries";

const Certificates = async () => {
  const certificates = await getCertificates();
  return (
    <div className="w-full sm:w-[300px] md:w-[390px] px-5 py-4 border border-gray-200 dark:bg-neutral-900/70 dark:border-[#333] duration-100 transition-all ease-in-out rounded-lg">
      <h2 className="text-lg font-semibold mb-3">Certificates</h2>
      <div className="flex flex-col gap-2">
        {certificates.map((cert, index) => (
          <a
            key={cert._id}
            href={cert.link}
            target="_blank"
            rel="noreferrer"
            className="group relative px-4 py-3 flex flex-col bg-white dark:bg-zinc-900 border border-gray-100 dark:border-zinc-800 rounded-lg hover:border-gray-300 dark:hover:border-zinc-600 transition-all duration-200 hover:shadow-sm hover:-translate-y-0.5"
          >
            {/* Certificate number badge */}
            <div className="absolute -top-2 -left-2 w-6 h-6 bg-black dark:bg-white rounded-full flex items-center justify-center">
              <span className="text-xs font-bold text-white dark:text-black">
                {index + 1}
              </span>
            </div>

            {/* Certificate content */}
            <div className="flex items-start justify-between gap-2">
              <div className="flex-1 min-w-0">
                <h3 className="text-sm font-semibold text-zinc-900 dark:text-gray-100 truncate group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {cert.title}
                </h3>
                <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-0.5">
                  {cert.company}
                </p>
              </div>

              {/* Arrow icon */}
              <svg
                className="w-4 h-4 text-zinc-400 dark:text-zinc-500 group-hover:text-zinc-700 dark:group-hover:text-zinc-300 group-hover:translate-x-0.5 transition-all flex-shrink-0 mt-0.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Certificates;
