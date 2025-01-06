export interface ProjectType {
  id: number;
  translationKey: string;
  category: string;
  image: string;
  client: string;
}

export interface CategoryType {
  id: string;
  label: string;
}