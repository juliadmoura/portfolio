import { StaticImageData } from 'next/image';

export type Projects = {
  id: number;
  titulo: string;
  descricao: string;
  url: string;
  image: StaticImageData;
};
