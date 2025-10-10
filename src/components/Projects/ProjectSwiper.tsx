"use client";

import { useEffect, useRef, useState } from "react";
import { Link as LinkIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Project } from "@/src/types";
import { AnimationPlaybackControls, motion, useAnimate } from "motion/react";

import Link from "next/link";
import Image from "next/image";

const ProjectSwiper = ({ projects }: { projects: Project[] }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [scope, animate] = useAnimate();
  const animation = useRef<AnimationPlaybackControls | null>(null);

  useEffect(() => {
    animation.current = animate(
      scope.current,
      { x: "-50%" },
      { duration: 30, ease: "linear", repeat: Infinity }
    );
  }, [animate, scope]);

  useEffect(() => {
    if (animation.current) {
      if (isHovered) {
        animation.current.pause();
      } else {
        animation.current.play();
      }
    }
  }, [isHovered]);

  return (
    <div className="overflow-x-clip flex">
      <motion.div
        ref={scope}
        className="flex flex-none gap-16 "
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {projects
          .slice()
          .reverse()
          .map((proj, index) => (
            <div key={proj._id} className="max-w-[280px] md:max-w-[350px]">
              <div
                className={`flex flex-col w-full transition-opacity duration-300 ${
                  hoveredIndex === null || hoveredIndex === index
                    ? "opacity-100 "
                    : "opacity-60 dark:opacity-50"
                }`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="aspect-video">
                  <Image
                    src={proj.imageUrl}
                    alt="Project image"
                    height={190}
                    width={350}
                    className="w-[280px] h-[170px] md:w-[350px] md:h-[190px]"
                  />
                </div>

                <div className="flex flex-col pt-2">
                  <div className="flex items-center gap-2">
                    <h2 className="text-sm font-semibold text-zinc-700 dark:text-white duration-100 transition-colors ease-in-out">
                      {proj.title}
                    </h2>
                    <Link href={proj.link}>
                      <LinkIcon
                        size={16}
                        className="dark:text-gray-300 text-neutral-700 duration-100 transition-colors ease-in-out"
                      />
                    </Link>
                  </div>

                  <p className="text-xs text-zinc-700 dark:text-zinc-300 duration-100 transition-colors ease-in-out pt-1">
                    {proj.description}
                  </p>
                  <div className="flex items-center flex-wrap gap-2 pt-2">
                    {proj.tools.map((tech, index) => (
                      <Badge
                        variant={"outline"}
                        key={index}
                        className="text-xs rounded-full font-normal dark:bg-white/5 bg-gray-100 duration-100 transition-[background-colors] ease-in-out"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
      </motion.div>
    </div>
  );
};

export default ProjectSwiper;

// <Swiper
//   slidesPerView={"auto"}
//   navigation={true}
//   freeMode={true}
//   centeredSlides={false}
//   modules={[Navigation, FreeMode]}
//   className="mySwiper w-full mt-12"
//   spaceBetween={50}
// >
//   {projects
//     .slice()
//     .reverse()
//     .map((proj, index) => (
//       <SwiperSlide
//         key={proj._id}
//         className="max-w-[280px] md:max-w-[350px]"
//       >
//         <div
//           className={`flex flex-col w-full transition-opacity duration-300 ${
//             hoveredIndex === null || hoveredIndex === index
//               ? "opacity-100 "
//               : "opacity-60 dark:opacity-50"
//           }`}
//           onMouseEnter={() => setHoveredIndex(index)}
//           onMouseLeave={() => setHoveredIndex(null)}
//         >
//           <div className="aspect-video">
//             <Image
//               src={proj.imageUrl}
//               alt="Project image"
//               height={190}
//               width={350}
//               className="w-[280px] h-[170px] md:w-[350px] md:h-[190px]"
//             />
//           </div>

//           <div className="flex flex-col pt-2">
//             <div className="flex items-center gap-2">
//               <h2 className="text-sm font-semibold text-zinc-700 dark:text-white duration-100 transition-colors ease-in-out">
//                 {proj.title}
//               </h2>
//               <Link href={proj.link}>
//                 <LinkIcon
//                   size={16}
//                   className="dark:text-gray-300 text-neutral-700 duration-100 transition-colors ease-in-out"
//                 />
//               </Link>
//             </div>

//             <p className="text-xs text-zinc-700 dark:text-zinc-300 duration-100 transition-colors ease-in-out pt-1">
//               {proj.description}
//             </p>
//             <div className="flex items-center flex-wrap gap-2 pt-2">
//               {proj.tools.map((tech, index) => (
//                 <Badge
//                   variant={"outline"}
//                   key={index}
//                   className="text-xs rounded-full font-normal dark:bg-white/5 bg-gray-100 duration-100 transition-[background-colors] ease-in-out"
//                 >
//                   {tech}
//                 </Badge>
//               ))}
//             </div>
//           </div>
//         </div>
//       </SwiperSlide>
//     ))}
// </Swiper>
