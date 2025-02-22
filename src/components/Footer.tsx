import data from "../constants";

export default function Footer() {
  return (
    <footer className="w-full pt-32 pb-4 flex justify-center">
      <div className="h-[100px] w-full border-t border-t-gray-200 dark:border-t-zinc-700">
        <div className="pt-6 flex justify-between flex-col md:flex-row gap-4 md:gap-12">
          <p className="text-zinc-700 dark:text-zinc-300 text-sm ">
            &copy; 2025 {data.name}. All rights reserved.
          </p>
          <p className="text-zinc-700 dark:text-zinc-300 text-sm">
            Built with <strong>Next.js</strong> and{" "}
            <strong>Tailwind CSS</strong>, deployed with{" "}
            <strong>Vercel.</strong>
          </p>
        </div>
      </div>
    </footer>
  );
}
