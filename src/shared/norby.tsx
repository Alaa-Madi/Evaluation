"use client"

import type React from "react"
import { Box, Chip, Divider, Stack, Typography, IconButton } from "@mui/material"
import CloseIcon from "@mui/icons-material/Close"
import { useState } from "react"
import Image from "next/image"
import logo from '../../public/assets/norby/norbylogo.avif'

interface IProps {
  onClose: () => void
}

const videoPaths = [
  "/assets/norby/NOYBYVedio.mp4",
  "/assets/norby/vv.mp4",
  "/assets/norby/vvv.mp4",
  "/assets/norby/vvvv.mp4",
  "/assets/norby/vvvvv.mp4",
  "/assets/norby/vvvvvv.mp4",
  "/assets/norby/vvvvvvv.mp4",
];

const Motion: React.FC<IProps> = ({ onClose }) => {
  const [, setOpen] = useState<boolean>(false)

  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (event.type === 'keydown' && (event as React.KeyboardEvent).key === 'Tab') return
    setOpen(open)
  }

  return (
    <Box
      sx={{
        width: "50vw",
        height: "100vh",
        backgroundColor: "#fff",
      }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      {/* Right Section */}
      <Box sx={{ width: '100%', backgroundColor: "#fff" }}>
        <Box
          sx={{
            position: 'sticky',
            top: 0,
            width: '100%',
            backgroundColor: '#fff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            px: 2,
            py: 1,
            boxShadow: 3,
            zIndex: 10,
          }}
        >
          {/* Logo and Title */}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box sx={{ width: 60, height: 60, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <Image style={{ borderRadius: '10px' }} src={logo} height={60} width={60} alt="Norby Logo" />
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', ml: 2 }}>
              <Typography variant="h6" sx={{ fontWeight: 600 }}>Norby</Typography>
              <Typography color="text.secondary" variant="body2">See your business clearly</Typography>
            </Box>
          </Box>

          {/* Close Button */}
          <IconButton onClick={onClose} sx={{ color: 'grey.700', paddingRight: 8 }}>
            <CloseIcon />
          </IconButton>
        </Box>

        <Divider sx={{ mb: 3 }} />

        {/* Description */}
        <Box sx={{ padding: 2 }}>
          <Typography variant="h6" sx={{ fontWeight: 400, mb: 2, fontFamily: "FK Roman Standard Light", fontSize: '40px' }}>
            See your business clearly
          </Typography>
          <Box sx={{ fontWeight: 400, mb: 2, color: 'GrayText' }}>
            We collaborated with Norby to craft a suite of product animations that bring their all-in-one creator platform to life. These animations showcase the platform's features and functionality in a dynamic, engaging way that aligns with Norby's clean and professional brand aesthetic.
          </Box>
          <Stack direction="row" spacing={1} sx={{ mb: 3 }}>
            <Chip label="Motion" variant="outlined" sx={{ backgroundColor: 'lightgray', color: 'GrayText' }} />
          </Stack>
        </Box>

        {/* Videos */}
        {videoPaths.map((videoSrc, index) => (
          <Box key={index} sx={{ width: '100%', height: '400px', mb: 1 }}>
            <video
              src={videoSrc}
              autoPlay
              loop
              muted
              playsInline
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </Box>
        ))}
      </Box>
    </Box>
  )
}

export default Motion
