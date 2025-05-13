'use client';
import { Box } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import ProjectCard, { Project } from "./projectCard";

export default function ProjectGrid() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch("/api/projects");
        const data = await res.json();
        setProjects(data);
      } catch (error) {
        console.error("Failed to fetch projects:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  useEffect(() => {
    const scrollContainer = containerRef.current;
    let scrollSpeed = 2;

    const step = () => {
      if (scrollContainer && !isHovered) {
        scrollContainer.scrollLeft += scrollSpeed;

        if (
          scrollContainer.scrollLeft + scrollContainer.clientWidth >=
          scrollContainer.scrollWidth - 10
        ) {
          scrollContainer.scrollLeft = 0;
        }
      }
      animationRef.current = requestAnimationFrame(step);
    };

    animationRef.current = requestAnimationFrame(step);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isHovered]);

  if (loading) return <div>Loading...</div>;
  if (!projects.length) return <div>No projects found.</div>;

  return (
    <Box
      ref={containerRef}
      sx={{ display: "flex", gap: 1, overflowX: "auto", py: 4 }}
    >
      {projects.map((project) => (
        <ProjectCard
          key={project._id}
          project={project}
          setIsHovered={setIsHovered}
        />
      ))}
    </Box>
  );
}
