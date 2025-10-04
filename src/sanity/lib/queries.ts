import { client } from "./client";
import { Project } from "@/src/types";
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
