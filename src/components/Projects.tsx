"use client";

import data from "../constants";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation } from "swiper/modules";
import { useState } from "react";
import { ChevronsRight, Link as LinkIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";

import "swiper/css";
import "swiper/css/pagination";

const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="w-full pt-12">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">Projects</h2>
        <div className="flex sm:hidden items-center gap-1">
          <span className="text-zinc-700 dark:text-gray-200 text-xs">
            Drag slide
          </span>
          <ChevronsRight
            size={18}
            className="text-zinc-700 dark:text-gray-200 animate-bounce-right"
          />
        </div>
      </div>

      <Swiper
        slidesPerView={"auto"}
        navigation={true}
        freeMode={true}
        centeredSlides={false}
        modules={[Navigation, FreeMode]}
        className="mySwiper w-full mt-12"
        spaceBetween={50}
      >
        {data.projects
          .slice()
          .reverse()
          .map((proj, index) => (
            <SwiperSlide key={index} className="max-w-[280px] md:max-w-[350px]">
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
                    src={proj.imgUrl}
                    alt="Project image"
                    height={190}
                    width={350}
                    className="w-[280px] h-[170px] md:w-[350px] md:h-[190px]"
                  />
                </div>

                <div className="flex flex-col pt-2">
                  <div className="flex items-center gap-2">
                    <h2 className="text-sm font-semibold text-zinc-700 dark:text-white">
                      {proj.title}
                    </h2>
                    <Link href={proj.link}>
                      <LinkIcon
                        size={16}
                        className="dark:text-gray-300 text-neutral-700"
                      />
                    </Link>
                  </div>

                  <p className="text-xs text-zinc-700 dark:text-zinc-300 pt-1">
                    {proj.description}
                  </p>
                  <div className="flex items-center flex-wrap gap-2 pt-2">
                    {proj.tools.map((tech, index) => (
                      <Badge
                        variant={"outline"}
                        key={index}
                        className="text-xs rounded-full font-normal dark:bg-white/5 bg-gray-100"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </section>
  );
};

export default Projects;
