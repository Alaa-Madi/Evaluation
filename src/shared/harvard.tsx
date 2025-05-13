"use client"

import type React from "react"
import { Box, Chip, Divider, Stack, Typography, IconButton } from "@mui/material"
import CloseIcon from "@mui/icons-material/Close"
import { useState } from "react"
import ColorPalette from "../components/projects/animation"
import AlphabetAnimation from "../components/projects/scrollCharacters"
import h1 from '../../public/assets/Harvard/harvard1.avif';
import h2 from '../../public/assets/Harvard/harvard2.avif';
import h3 from '../../public/assets/Harvard/harvard3.avif';
import h4 from '../../public/assets/Harvard/harvard4.avif';
import h5 from '../../public/assets/Harvard/harvard5.avif';
import h6 from '../../public/assets/Harvard/harvard6.avif';
import h8 from '../../public/assets/Harvard/harvard8.avif';
import h9 from '../../public/assets/Harvard/harvard9.avif';
import h10 from '../../public/assets/Harvard/harvard10.avif';
import h11 from '../../public/assets/Harvard/harvard12.avif';
import h12 from '../../public/assets/Harvard/harvard12.avif';
import h13 from '../../public/assets/Harvard/harvard13.avif';
import Image from "next/image"

interface IProps {
    onClose: () => void
}

const Harvard: React.FC<IProps> = ({ onClose }) => {
    const [, setOpen] = useState<boolean>(false);

    const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
        if (event.type === 'keydown' && (event as React.KeyboardEvent).key === 'Tab') {
            return;
        }
        setOpen(open);
    };

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
            <Box
                sx={{
                    width: '100%',
                    backgroundColor: "#fff",
                }}
            >
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
                    {/* Left Side: Image + Text */}
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Box sx={{ width: 60, height: 60, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <Image style={{ borderRadius: '10px' }} src={h1} height={60} width={60} alt="Harvard Logo" />
                        </Box>
                        <Box sx={{ display: 'flex', flexDirection: 'column', ml: 2 }}>
                            <Typography variant="h6" sx={{ fontWeight: 600 }}>
                                Harvard
                            </Typography>
                            <Typography color="text.secondary" variant="body2">
                                Empowering youth with neuroscience
                            </Typography>
                        </Box>
                    </Box>

                    {/* Right Side: Close Button */}
                    <IconButton
                        onClick={onClose}
                        sx={{
                            color: 'grey.700',
                            paddingRight: 8,
                        }}
                    >
                        <CloseIcon />
                    </IconButton>
                </Box>

                <Divider sx={{ mb: 3 }} />

                <Box sx={{ padding: 2 }}>
                    <Typography variant="h6" sx={{ fontWeight: 400, mb: 2, fontFamily: "FK Roman Standard Light", fontSize: '40px' }}>
                        Helping empower the incarcerated youth with neuroscience
                    </Typography>
                    <Box sx={{ fontWeight: 400, mb: 2, color: 'GrayText' }}>
                        Collaborating closely with Monogram, we helped design the InCite Library, a digital platform created for the Center for Law, Brain & Behavior at Massachusetts General Hospital. This AI-powered library democratizes complex neuroscience and legal research by allowing incarcerated youth, legal professionals, and policymakers to access and understand critical information at varying reading levels.
                    </Box>

                    <Stack direction="row" spacing={1} sx={{ mb: 3 }}>
                        {["Brand", "Product", "Web"].map((label) => (
                            <Chip label={label} key={label} variant="outlined" sx={{ backgroundColor: 'lightgray', color: 'GrayText' }} />
                        ))}
                    </Stack>
                </Box>

                <Box sx={{ width: '100%', height: '400px', mb: 1 }}>
                    <Image src={h2} alt="Harvard" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </Box>

                <Box sx={{ width: '100%', height: '400px', mb: 1 }}>
                    <Image src={h3} alt="Harvard" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </Box>

                <Box sx={{ width: '100%', height: '400px', mb: 1 }}>
                    <Image src={h4} alt="Harvard" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </Box>

                <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: 1, mb: 1 }}>
                    <Box sx={{ width: '100%', height: '400px' }}>
                        <ColorPalette />
                    </Box>
                    <Box sx={{ width: '100%', height: '400px' }}>
                        <Image src={h5} alt="Harvard" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </Box>
                </Box>

                <Box sx={{ width: '100%', height: '400px', mb: 1 }}>
                    <Image src={h6} alt="Harvard" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </Box>

                <Box sx={{ width: '100%', height: '400px', mb: 1 }}>
                    <video
                        src={'assets/Harvard/harvard7.mp4'}
                        autoPlay
                        loop
                        muted
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                </Box>

                <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: 1, mb: 1 }}>
                    <Box sx={{ width: '100%', height: '400px' }}>
                        <Image src={h8} alt="Harvard" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </Box>
                    <Box sx={{ width: '100%', height: '400px' }}>
                        <Image src={h9} alt="Harvard" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </Box>
                </Box>

                <Box sx={{ width: '100%', height: '400px', mb: 1 }}>
                    <AlphabetAnimation />
                </Box>

                <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: 1, mb: 1 }}>
                    <Box sx={{ width: '100%', height: '400px' }}>
                        <Image src={h10} alt="Harvard" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </Box>
                    <Box sx={{ width: '100%', height: '400px' }}>
                        <Image src={h12} alt="Harvard" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </Box>
                </Box>

                <Box sx={{ width: '100%', height: '400px', mb: 1 }}>
                    <Image src={h13} alt="Harvard" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </Box>
            </Box>
        </Box>
    );
};

export default Harvard;