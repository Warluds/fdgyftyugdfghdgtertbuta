import { createFileRoute, notFound } from "@tanstack/react-router";
import { ProjectPage } from "@/components/ProjectPage";
import { getProject } from "@/data/projects";

export const Route = createFileRoute("/projects/mirai")({
  head: () => ({
    meta: [
      { title: "BUTA Mirai — японский квартал на Алатауской · BUTA Group" },
      { name: "description", content: "ЖК BUTA Mirai в Алматы: деревянные ламели, дзен-сад, тепловые насосы. Квартиры от 21,3 млн ₸." },
      { property: "og:title", content: "BUTA Mirai — японская сдержанность в Алматы" },
      { property: "og:description", content: "Диалог с японской архитектурой: дерево, свет и природные материалы." },
    ],
  }),
  component: () => {
    const p = getProject("mirai");
    if (!p) throw notFound();
    return <ProjectPage project={p} />;
  },
});