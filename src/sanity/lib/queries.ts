import { client } from "./client";
import { Project, Experience, Certificate } from "@/src/types";
import data from "@/src/constants";

export const getProjects = async (): Promise<Project[]> => {
  const projects = await client.fetch<Project[]>(
    `*[_type == "project"] | order(_createdAt asc) { 
            _id,
            title, 
            description,
            tools,
            link,
            "imageUrl": imageUrl.asset->url
        }`,
    {},
    {
      next: { revalidate: 60 },
    }
  );

  if (projects.length === 0) {
    return data.projects;
  }

  return projects;
};

export const getExperiences = async (): Promise<Experience[]> => {
  const experience = await client.fetch<Experience[]>(
    `*[_type == "experience"] | order(_createdAt desc) { 
            _id,
            company, 
            role,
            date,
            description,
        }`,
    {},
    {
      next: { revalidate: 60 },
    }
  );

  if (experience.length === 0) {
    return data.experience;
  }

  return experience;
};

export const getCertificates = async (): Promise<Certificate[]> => {
  const certificate = await client.fetch<Certificate[]>(
    `*[_type == "certificate"] | order(_createdAt asc) { 
            _id,
            title, 
            company,
            link,
        }`,
    {},
    {
      next: { revalidate: 60 },
    }
  );

  if (certificate.length === 0) {
    return data.certificates;
  }

  return certificate;
};
