export interface Project {
  _id?: string;
  title: string;
  description: string;
  tools: string[];
  link: string;
  imageUrl: string;
}

export interface Experience {
  _id?: string;
  company: string;
  role: string;
  date: string;
  description: string;
}

export interface Certificate {
  _id?: string;
  company: string;
  title: string;
  link: string;
}
