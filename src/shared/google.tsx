"use client"
import type React from "react"
import { Box, Chip, Divider, Stack, Typography, IconButton } from "@mui/material"
import { useState } from "react"
import icons from '../../public/assets/Google/googlelogoo.avif';
import neon from '../../public/assets/Google/google3.avif';
import hello from '../../public/assets/Google/google5.webp';
import google from '../../public/assets/Google/google4.avif';
import angular from '../../public/assets/Google/google6.avif';
import palette from '../../public/assets/Google/google7.avif';
import snapshot from '../../public/assets/Google/google8.avif';
import palette2 from '../../public/assets/Google/palette2.avif';
import snapshot1 from '../../public/assets/Google/google10.avif';
import snapshot2 from '../../public/assets/Google/google11.avif';
import CloseIcon from '@mui/icons-material/Close';
import Image from 'next/image';


interface IProps {
    onClose: () => void
}

const Google: React.FC<IProps> = ({ onClose }) => {
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
                            <Image style={{ borderRadius: '10px' }} src={icons} height={60} width={60} alt="Logo" />
                        </Box>
                        <Box sx={{ display: 'flex', flexDirection: 'column', ml: 2 }}>
                            <Typography variant="h6" sx={{ fontWeight: 600 }}>
                                Google
                            </Typography>
                            <Typography color="text.secondary" variant="body2">
                                A new home for Angular
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
                        Loved by millions
                    </Typography>
                    <Box sx={{ fontWeight: 400, mb: 2, color: 'GrayText' }}>
                        Partnering with Monogram, we led the design of Angular's refreshed developer experience — creating a modern, intuitive interface that simplifies how developers learn, explore, and engage with one of the world's most popular web frameworks. Focused on usability, clarity, and accessibility, the new Angular.dev site introduces a design system that supports everything from interactive tutorials to documentation, empowering developers of all levels to build confidently with Angular.
                    </Box>

                    <Stack direction="row" spacing={1} sx={{ mb: 3 }}>
                        {["Motion", "Product", "Web"].map((label) => (
                            <Chip label={label} key={label} variant="outlined" sx={{ backgroundColor: 'lightgray', color: 'GrayText' }} />
                        ))}
                    </Stack>
                </Box>

                <Box sx={{ width: '100%', height: '400px', mb: 1 }}>
                    <video
                        src="/assets/Google/google2.mp4"
                         autoPlay 
                         muted 
                         loop 
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                </Box>

                <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: 1, mb: 1 }}>
                    <Box sx={{ width: '100%', height: '400px' }}>
                        <Image src={neon} alt="Neon" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </Box>
                    <Box sx={{ width: '100%', height: '400px' }}>
                        <Image src={google} alt="Google" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </Box>
                </Box>

                <Box sx={{ width: '100%', height: '400px', mb: 1 }}>
                    <Image src={hello} alt="Hello" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </Box>

                <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: 1, mb: 1 }}>
                    <Box sx={{ width: '100%', height: '400px' }}>
                        <Image src={angular} alt="Angular" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </Box>
                    <Box sx={{ width: '100%', height: '400px' }}>
                        <Image src={palette} alt="Palette" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </Box>
                </Box>

                <Box sx={{ width: '100%', height: '400px', mb: 1 }}>
                    <Image src={snapshot} alt="Snapshot" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </Box>

                <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: 1, mb: 1 }}>
                    <Box sx={{ width: '100%', height: '400px' }}>
                        <Image src={palette2} alt="Palette" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </Box>
                    <Box sx={{ width: '100%', height: '400px' }}>
                        <Image src={snapshot1} alt="Snapshot" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </Box>
                </Box>

                <Box sx={{ width: '100%', height: '400px', mb: 1 }}>
                    <Image src={snapshot2} alt="Icons" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </Box>
            </Box>
        </Box>
    );
};

export default Google;