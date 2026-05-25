import { createFileRoute, notFound } from "@tanstack/react-router";
import { ProjectPage } from "@/components/ProjectPage";
import { getProject } from "@/data/projects";

export const Route = createFileRoute("/projects/fenomen")({
  head: () => ({
    meta: [
      { title: "BUTA Fenomen — кирпичный квартал в Нуркенте · BUTA Group" },
      { name: "description", content: "ЖК BUTA Fenomen в Алматы: кирпичная архитектура, закрытый двор, 3 очереди. Квартиры от 30,6 млн ₸." },
      { property: "og:title", content: "BUTA Fenomen — наследие будущего" },
      { property: "og:description", content: "Кирпичная классика, переосмысленная для современного Алматы." },
    ],
  }),
  component: () => {
    const p = getProject("fenomen");
    if (!p) throw notFound();
    return <ProjectPage project={p} />;
  },
});