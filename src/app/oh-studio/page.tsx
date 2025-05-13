'use client'
import Hero from "@/components/oh-sudio/header/hero"
import ProjectGrid from "@/components/oh-sudio/scroller/projectGrid"
import { Box } from "@mui/material"


export default function OHStusio() {
  return (
      <Box sx={{ width: "100%",height:'100%'}}>
        <Hero />
        <ProjectGrid  />
      </Box>
  )
}
