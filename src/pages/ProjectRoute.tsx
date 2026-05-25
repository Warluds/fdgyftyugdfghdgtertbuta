import { useParams, Navigate } from "react-router-dom";
import { ProjectPage } from "@/components/ProjectPage";
import { getProject } from "@/data/projects";

export default function ProjectRoute() {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? getProject(slug) : undefined;
  if (!project) return <Navigate to="/" replace />;
  return <ProjectPage project={project} />;
}