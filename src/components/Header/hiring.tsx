"use client"

import type React from "react"
import { useState } from "react"
import { Box, Drawer, Button, Typography } from "@mui/material"
import "../../styles/general.css"
import JobDrawerContent from "../../shared/jobDrawer"

const Hiring: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false)

  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (event.type === "keydown" && (event as React.KeyboardEvent).key === "Tab") {
      return
    }
    setOpen(open)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const drawerContent = <JobDrawerContent onClose={handleClose} />

  return (
    <>
      <Box className="text" position="static" sx={{ width: "100%", height: '500px', justifyContent: "space-between", display: "flex", alignItems: 'flex-end', p: 5 }}>
        <Box className="mt-36 max-w-3xl" sx={{ color: "black", fontSize: "30px", ml: 2, alignSelf: "left" }}>
          <Typography variant="h2" className="text-5xl leading-tight font-light text-black">
            We help
            <Box className="container">
              <Box className="scroller">
                {[...Array(1000)].map((_, index) => (
                  <Box className="half-circle10" key={index}></Box>
                ))}
              </Box>
            </Box>
            ambitious <br /> teams turn bold visions <br /> into &nbsp; &nbsp;
            <Box className="shape-container">
              <Box className="half-circle1 top"></Box>
              <Box className="half-circle1 right"></Box>
              <Box className="half-circle1 bottom"></Box>
              <Box className="half-circle1 left"></Box>
              <Box className="square"></Box>
            </Box>
            &nbsp;&nbsp; lasting impact.
          </Typography>
        </Box>

        <Box
          className="hiring"
          sx={{
            backgroundColor: "white",
            width: "350px",
            height: "100px",
            marginRight: "40px",
            marginBottom: "40px",
            marginTop: "150px",
            transition: "all 0.3s ease",
            color: "black",
            "&:hover": {
              backgroundColor: "black",
              color: "white",
              "& .MuiTypography-root": {
                color: "white",
              },
              "& .MuiButton-root": {
                backgroundColor: "white",
                color: "black",
              },
              "& .shape": {
                backgroundColor: "white",
              },
            },
          }}
        >
           <Box
            sx={{
              marginTop: "10px",
              marginLeft: "10px",
              marginBottom: "10px",
              marginRight: "10px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Box className="container1">
              <Box className="shape horizontal-up"></Box>
              <Box className="shape horizontal-up"></Box>
              <Box className="shape horizontal-down"></Box>
              <Box className="shape horizontal-down"></Box>
            </Box>

            <Box>
              <Typography color="text.secondary">Hiring</Typography>
              <Typography sx={{ fontWeight: 500, fontSize: '0.875rem' }}>Senior Designer</Typography>
            </Box>

            <Button
              aria-label="Open hiring drawer"
              onClick={toggleDrawer(true)}
              sx={{
                backgroundColor: "lightgray",
                color: "darkgray",
                borderRadius: "50%",
                width: 40,
                height: 40,
                transition: "all 0.3s",
              }}
            >
              +
            </Button>
          </Box>
        </Box>
      </Box>

      <Drawer
        anchor="right"
        open={open}
        onClose={handleClose}
        PaperProps={{ sx: { width: "50vw", backgroundColor: "#fff" } }}
      >
        {drawerContent}
      </Drawer>
    </>
  )
}

export default Hiring
