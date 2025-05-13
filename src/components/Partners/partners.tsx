"use client";
import { useState } from "react";
import { Box, Typography, Drawer } from "@mui/material";
import WebBrands from "../../shared/momentify";
import Image from "next/image";
import "./partner.css";

import partner1 from "../../../public/assets/partners/harvardlogoo.avif";
import partner2 from "../../../public/assets/partners/neonlogoo.avif";
import partner3 from "../../../public/assets/partners/sparklogo.avif";
import partner4 from "../../../public/assets/partners/norbylogo.avif";
import partner5 from "../../../public/assets/partners/momentifylogo.avif";
import partner6 from "../../../public/assets/partners/googlelogo.avif";

import harvard from "../../../public/assets/partners/harvard.avif";
import neon from "../../../public/assets/partners/norbylogo.avif";
import spark from "../../../public/assets/partners/spak.avif";
import norby from "../../../public/assets/partners/norbylogo.avif";
import momentify from "../../../public/assets/partners/momentify.avif";
import google from "../../../public/assets/partners/google.avif";

import NeonAnimation from "../projects/neon";
import Motion from "../../shared/norby";
import Spark from "../../shared/spark";
import Google from "../../shared/google";
import Harvard from "../../shared/harvard";
import NeonHrizons from "../../shared/neonHorizon";

const Images = [harvard, neon, spark, norby, momentify, google];

const projects = [
  {
    name: "Harvard",
    description: "Empowering youth with neuroscience",
    image: partner1,
    drawer: "Harvard",
  },
  {
    name: "Neon Horizons",
    description: "Welcome to the cyberscape",
    image: partner2,
    drawer: "NeonHrizons",
  },
  {
    name: "Spark",
    description: "Blockchain for commerce",
    image: partner3,
    drawer: "Spark",
  },
  {
    name: "Norby",
    description: "See your business clearly",
    image: partner4,
    drawer: "Motion",
  },
  {
    name: "Momentify",
    description: "Capture live music experiences",
    image: partner5,
    drawer: "momentify",
  },
  {
    name: "Google",
    description: "A new home for Angular",
    image: partner6,
    drawer: "Google",
  },
];

export default function HorizontalScrollProjects() {
  const [activeDrawer, setActiveDrawer] = useState<string | null>(null);

  const handleOpenDrawer = (drawerName: string) => {
    setActiveDrawer(drawerName);
  };

  const handleCloseDrawer = () => {
    setActiveDrawer(null);
  };

  const renderDrawerContent = () => {
    switch (activeDrawer) {
      case "momentify":
        return <WebBrands onClose={handleCloseDrawer} />;
      case "Motion":
        return <Motion onClose={handleCloseDrawer} />;
      case "Spark":
        return <Spark onClose={handleCloseDrawer} />;
      case "Google":
        return <Google onClose={handleCloseDrawer} />;
      case "Harvard":
        return <Harvard onClose={handleCloseDrawer} />;
      case "NeonHrizons":
        return <NeonHrizons onClose={handleCloseDrawer} />;
      default:
        return null;
    }
  };

  return (
    <Box className="horizontal-scroll">
      {projects.map((project, index) => (
        <Box
          key={project.name}
          onClick={() => handleOpenDrawer(project.drawer)}
          className="project-card"
        >
          <Box className="project-media">
            {index === 1 ? (
              <NeonAnimation />
            ) : (
              <Image
                src={Images[index]}
                alt={project.name}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            )}
          </Box>

          <Box className="project-footer">
            <Image src={project.image} alt={project.name} />
            <Box className="project-footer-content">
              <Typography variant="h6" color="text.primary">
                {project.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {project.description}
              </Typography>
            </Box>
          </Box>
        </Box>
      ))}

      <Drawer anchor="right" open={!!activeDrawer} onClose={handleCloseDrawer}>
        {renderDrawerContent()}
      </Drawer>
    </Box>
  );
}
