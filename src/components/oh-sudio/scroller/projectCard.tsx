// 'use client';

import { Box, Typography, Card } from "@mui/material";
import Image from "next/image";

export interface Project {
  _id: string;
  name: string;
  description: string;
  logoUrl: string;
  imageUrl: string;
  bgColor: string;
  isVideo?: boolean;
}

interface ProjectCardProps {
  project: Project;
  setIsHovered?: (hovered: boolean) => void;
}

export default function ProjectCard({ project, setIsHovered }: ProjectCardProps) {
  return (
    <Box
      onMouseEnter={() => setIsHovered?.(true)}
      onMouseLeave={() => setIsHovered?.(false)}
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1,
          height: "100px",
        }}
      >
        <Box
          sx={{
            width: 40,
            height: 40,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
            borderRadius: "10px",
          }}
        >
          <Image
            src={project.logoUrl}
            alt={`${project.name} logo`}
            width={40}
            height={40}
            style={{ objectFit: "contain" }}
          />
        </Box>
        <Box>
          <Typography
            variant="subtitle1"
            sx={{
              fontWeight: 500,
              fontSize: "0.9rem",
            }}
          >
            {project.name}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              fontSize: "0.8rem",
            }}
          >
            {project.description}
          </Typography>
        </Box>
      </Box>

      <Card
        elevation={0}
        sx={{
          flexGrow: 1,
          overflow: "hidden",
          height: "350px",
          width: "400px",
          bgcolor:
            project.bgColor === "bg-black"
              ? "#000"
              : project.bgColor === "bg-lime-400"
              ? "#a3e635"
              : project.bgColor === "bg-gray-200"
              ? "#e5e7eb"
              : "transparent",
        }}
      >
        <Box
          sx={{
            position: "relative",
            width: "100%",
            height: "100%",
          }}
        >
          {project.imageUrl.endsWith(".mp4") || project.isVideo ? (
            <video
              autoPlay
              loop
              muted
              playsInline
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            >
              <source src={project.imageUrl} type="video/mp4" />
            </video>
          ) : (
            <Image
              src={project.imageUrl}
              alt="Project image"
              width={512}
              height={300}
              style={{ objectFit: "cover", width: "100%", height: "auto" }}
            />
          )}
        </Box>
      </Card>
    </Box>
  );
}
