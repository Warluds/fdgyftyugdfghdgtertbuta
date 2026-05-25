import { createFileRoute, notFound } from "@tanstack/react-router";
import { ProjectPage } from "@/components/ProjectPage";
import { getProject } from "@/data/projects";

export const Route = createFileRoute("/projects/albion")({
  head: () => ({
    meta: [
      { title: "BUTA Albion — английский квартал у гор · BUTA Group" },
      { name: "description", content: "ЖК BUTA Albion в Алматы: лондонские townhouse, 5 этажей, консьерж-сервис. Квартиры от 22,8 млн ₸." },
      { property: "og:title", content: "BUTA Albion — английский квартал у подножия Заилийского Алатау" },
      { property: "og:description", content: "Тёмный кирпич, латунные детали, эркеры с панорамным видом на горы." },
    ],
  }),
  component: () => {
    const p = getProject("albion");
    if (!p) throw notFound();
    return <ProjectPage project={p} />;
  },
});