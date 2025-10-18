"use client";

import { Download } from "lucide-react";

const DownloadResume = ({ resumeUrl }: { resumeUrl: string }) => {
  const handleDownload = async () => {
    try {
      const response = await fetch(resumeUrl);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "Jonash_Gaña_Resume.pdf";
      link.click();
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error downloading file:", error);
    }
  };
  return (
    <button
      onClick={handleDownload}
      className="py-2 rounded-lg flex items-center gap-2 justify-center border border-gray-300 dark:border-zinc-700 text-xs px-4 hover:bg-gray-300/20 dark:hover:bg-zinc-700/20  hover:-translate-y-[2px] duration-100 transition-all ease-in-out"
    >
      <Download
        size={15}
        className="dark:text-gray-200 text-black duration-100 transition-color ease-in-out"
      />
      Download CV
    </button>
  );
};

export default DownloadResume;
