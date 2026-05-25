import { createFileRoute, notFound } from "@tanstack/react-router";
import { ProjectPage } from "@/components/ProjectPage";
import { getProject } from "@/data/projects";

export const Route = createFileRoute("/projects/legend")({
  head: () => ({
    meta: [
      { title: "BUTA Legend — сданный квартал на Рыскулова · BUTA Group" },
      { name: "description", content: "ЖК BUTA Legend в Алматы: введён в эксплуатацию, готовые ремонты, закрытый двор. Квартиры от 27 млн ₸." },
      { property: "og:title", content: "BUTA Legend — дом, в котором уже горит свет" },
      { property: "og:description", content: "Первый знаковый проект BUTA Group. Сдан, заселён и проверен временем." },
    ],
  }),
  component: () => {
    const p = getProject("legend");
    if (!p) throw notFound();
    return <ProjectPage project={p} />;
  },
});