import { getCertificates } from "../sanity/lib/queries";

const Certificates = async () => {
  const certificates = await getCertificates();
  return (
    <div className="w-full sm:w-[300px] md:w-[390px] px-4 py-2 border border-gray-200 dark:bg-neutral-900/70 dark:border-[#333] rounded-lg">
      <h2 className="text-lg font-semibold">Certificates</h2>
      <div className="certificate-grid gap-1">
        {certificates.map((cert) => (
          <a
            key={cert._id}
            href={cert.link}
            target="_blank"
            rel="noreferrer"
            className="px-4 flex flex-col hover:bg-slate-200 dark:hover:bg-slate-800 dark:bg-zinc-900 rounded-md py-1"
          >
            <span className="text-sm text-zinc-700 dark:text-gray-200  max-w-[320px] truncate font-medium">
              {cert.title}
            </span>
            <span className="text-xs text-zinc-700 dark:text-zinc-300">
              {cert.company}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Certificates;
