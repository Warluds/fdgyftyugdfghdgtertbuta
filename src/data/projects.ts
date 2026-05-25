import fenomenImg from "@/assets/project-fenomen.jpg";
import fenomen2 from "@/assets/fenomen-2.jpg";
import fenomen3 from "@/assets/fenomen-3.jpg";
import albionImg from "@/assets/project-albion.jpg";
import albion2 from "@/assets/albion-2.jpg";
import albion3 from "@/assets/albion-3.jpg";
import legendImg from "@/assets/project-legend.jpg";
import legend2 from "@/assets/legend-2.jpg";
import legend3 from "@/assets/legend-3.jpg";
import miraiImg from "@/assets/project-mirai.jpg";
import mirai2 from "@/assets/mirai-2.jpg";
import mirai3 from "@/assets/mirai-3.jpg";

export type ProjectSlug = "fenomen" | "albion" | "legend" | "mirai";

export type ProjectVisual = {
  slug: ProjectSlug;
  id: string;
  name: string;
  cover: string;
  gallery: string[];
};

export const projects: ProjectVisual[] = [
  { slug: "fenomen", id: "01", name: "Fenomen", cover: fenomenImg, gallery: [fenomenImg, fenomen2, fenomen3] },
  { slug: "albion",  id: "02", name: "Albion",  cover: albionImg,  gallery: [albionImg, albion2, albion3] },
  { slug: "legend",  id: "03", name: "Legend",  cover: legendImg,  gallery: [legendImg, legend2, legend3] },
  { slug: "mirai",   id: "04", name: "Mirai",   cover: miraiImg,   gallery: [miraiImg, mirai2, mirai3] },
];

export const getProject = (slug: string): ProjectVisual | undefined =>
  projects.find((p) => p.slug === slug);