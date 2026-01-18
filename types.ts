
export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
}

export interface Skill {
  name: string;
  level: number;
  category: 'Frontend' | 'Backend' | 'Tools' | 'AI';
}

export interface Message {
  role: 'user' | 'assistant';
  content: string;
}
