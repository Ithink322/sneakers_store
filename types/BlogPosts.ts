export interface ContentSection {
  header: string;
  paragraphs: string[];
}
export interface BlogPost {
  id: number;
  hero: string;
  category: string;
  title: string;
  date: string;
  intro: string;
  sections: ContentSection[];
}
