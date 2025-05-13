"use client";

import { useState } from "react";
import { Box, Drawer, Typography } from "@mui/material";
import WebBrands from "../../shared/momentify";
import Spark from "../../shared/spark";
import Motion from "../../shared/norby";
import Google from "../../shared/google";
import Harvard from "../../shared/harvard";
import NeonHrizons from "../../shared/neonHorizon";
import NeonAnimation from "../../components/projects/neon";
import Image1 from "../../../public/assets/Momentify/mo2.avif";
import Image2 from "../../../public/assets/norby/norbylogo.avif";
import Image3 from "../../../public/assets/Spark/spark9.avif";
import Image4 from "../../../public/assets/Google/google4.avif";
import Image6 from "../../../public/assets/Harvard/harvard6.avif";
import { motion } from "framer-motion";
import type { StaticImageData } from "next/image";

import styles from "./project.module.css";

type Project = {
  name: string;
  year: number;
  type: string;
  image?: string | StaticImageData;
  video?: string | StaticImageData;
  component?: React.ReactNode;
  drawer: string | null;
};

const projects: Project[] = [
  { name: "Momentify", year: 2024, type: "Brand, Web, Product", image: Image1, drawer: "momentify" },
  { name: "Norby", year: 2025, type: "Motion", video: Image2, drawer: "Motion" },
  { name: "Spark", year: 2025, type: "Brand, Web, Product", image: Image3, drawer: "Spark" },
  { name: "Google", year: 2024, type: "Web, Product", image: Image4, drawer: "Google" },
  { name: "Harvard", year: 2025, type: "Brand, Web, Product", image: Image6, drawer: "Harvard" },
  {
    name: "Neon Horizons",
    year: 2025,
    type: "Brand, Product",
    component: (
      <Box sx={{ backgroundColor: "black", color: "white", height: "100%", width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
        <NeonAnimation />
      </Box>
    ),
    drawer: "NeonHrizons",
  },
];

export default function ProjectList() {
  const [hoveredProject, setHoveredProject] = useState<Project>(projects[0]);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeDrawer, setActiveDrawer] = useState<string | null>(null);

  const handleClick = (project: Project) => {
    setSelectedProject(project);
    setActiveDrawer(project.drawer);
  };

  const handleClose = () => {
    setActiveDrawer(null);
    setSelectedProject(null);
  };

  const renderDrawerContent = () => {
    switch (activeDrawer) {
      case "momentify":
        return <WebBrands onClose={handleClose} />;
      case "Motion":
        return <Motion onClose={handleClose} />;
      case "Spark":
        return <Spark onClose={handleClose} />;
      case "Google":
        return <Google onClose={handleClose} />;
      case "Harvard":
        return <Harvard onClose={handleClose} />;
      case "NeonHrizons":
        return <NeonHrizons onClose={handleClose} />;
      default:
        return null;
    }
  };

  return (
    <Box className={styles.root} id="work">
      <Box className={styles.leftColumn}>
        <Typography variant="h6" className={styles.projectTitle}>
          Partners + Projects
        </Typography>
        <Box className={styles.projectList}>
          {projects.map((project) => (
            <Typography
              key={project.name}
              variant="h3"
              onClick={() => handleClick(project)}
              onMouseEnter={() => setHoveredProject(project)}
              className={`${styles.projectName} ${selectedProject?.name === project.name ? styles.active : ""}`}
            >
              {project.name}
            </Typography>
          ))}
        </Box>
      </Box>

      <Box className={styles.previewContainer}>
        <Box className={styles.previewBox}>
          {hoveredProject.image && (
            <motion.img
              key={typeof hoveredProject.image === "string" ? hoveredProject.image : hoveredProject.image?.src}
              src={typeof hoveredProject.image === "string" ? hoveredProject.image : hoveredProject.image?.src}
              alt={`${hoveredProject.name} Preview`}
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4 }}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          )}
          {hoveredProject.video && (
            <motion.video
              key={typeof hoveredProject.video === "string" ? hoveredProject.video : hoveredProject.video?.src}
              src={typeof hoveredProject.video === "string" ? hoveredProject.video : hoveredProject.video?.src}
              autoPlay
              muted
              loop
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4 }}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          )}
          {hoveredProject.component && (
            <motion.div
              key={hoveredProject.name}
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4 }}
              style={{ width: "100%", height: "100%" }}
            >
              {hoveredProject.component}
            </motion.div>
          )}
        </Box>
      </Box>

      <Box className={styles.detailsColumn}>
        {projects.map((project) => (
          <Box key={project.name} onClick={() => handleClick(project)} className={styles.projectDetailRow}>
            <Typography variant="body2" color="text.secondary">
              {project.type}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {project.year}
            </Typography>
          </Box>
        ))}
      </Box>

      <Drawer
        anchor="right"
        open={activeDrawer !== null}
        onClose={handleClose}
        PaperProps={{ className: styles.drawerPaper }}
      >
        {renderDrawerContent()}
      </Drawer>
    </Box>
  );
}
