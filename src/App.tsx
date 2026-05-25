import { Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import ProjectRoute from "@/pages/ProjectRoute";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects/:slug" element={<ProjectRoute />} />
      <Route path="*" element={<Home />} />
    </Routes>
  );
}