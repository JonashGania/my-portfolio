"use client";

import CertificationCard from "./CertificationCard"
import { useState } from "react";
import data from "@/src/data";

const Certificates = () => {
    const [showMore, setShowMore] = useState(false);

    const toggleShowMore = () => {
        setShowMore((prevState) => !prevState);
    };

    const displayedItems = showMore
    ? data.certificates
    : data.certificates.slice(0, 4);

    return (
        <div className="pt-36 pb-20">
            <h1 className="text-3xl text-white font-semibold pb-10">
                Certificates
            </h1>
            <div className="flex items-center justify-center sm:justify-between flex-wrap gap-x-4 gap-y-6">
                {displayedItems.map((cert) => (
                    <CertificationCard
                        key={cert.id}
                        name={cert.name}
                        company={cert.company}
                        link={cert.link}
                    />
                ))}
            </div>
            <div className="w-full flex justify-center pt-12">
                <button
                    className="text-black bg-white py-2 px-8 rounded-md"
                    onClick={toggleShowMore}
                >
                    <span className=" text-lg font-medium">
                        {showMore ? "Show Less" : "Show More"}
                    </span>
                </button>
            </div>
        </div>
    )
}

export default Certificates