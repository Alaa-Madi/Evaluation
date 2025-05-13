"use client"

import type React from "react"
import { Box, Chip, Divider, Stack, Typography, IconButton } from "@mui/material"
import CloseIcon from "@mui/icons-material/Close"
import { useState } from "react"
import Image1 from '../../public/assets/Momentify/momentifylogo.avif';
import Image2 from '../../public/assets/Momentify/mo10.avif';
import Image3 from '../../public/assets/Momentify/mo1.avif';
import Image4 from '../../public/assets/Momentify/mo2.avif';
import Image5 from '../../public/assets/Momentify/mo3.avif';
import Image6 from '../../public/assets/Momentify/mo4.avif';
import Image7 from '../../public/assets/Momentify/mo5.avif';
import Image8 from '../../public/assets/Momentify/mo6.avif';
import Image9 from '../../public/assets/Momentify/mo7.avif';
import Image10 from '../../public/assets/Momentify/mo8.avif';
import Image11 from '../../public/assets/Momentify/mo9.avif';
import Image from "next/image"

interface IProps {
    onClose: () => void
}

const WebBrands: React.FC<IProps> = ({ onClose }) => {
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
                            <Image style={{ borderRadius: '10px' }} src={Image1} height={60} width={60} alt="Momentify Logo" />
                        </Box>
                        <Box sx={{ display: 'flex', flexDirection: 'column', ml: 2 }}>
                            <Typography variant="h6" sx={{ fontWeight: 600 }}>
                                Momentify
                            </Typography>
                            <Typography color="text.secondary" variant="body2">
                                Capture live music experiences
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
                        Capture live music experiences
                    </Typography>
                    <Box sx={{ fontWeight: 400, mb: 2, color: 'GrayText' }}>
                        Momentify is where lovers of live music can collect, share and earn rewards from visiting venues, discovering new bands and making memories. We worked with the team to help take their initial vision from 0-1, delivering brand, product strategy UX, UI and marketing materials.
                    </Box>

                    <Stack direction="row" spacing={1} sx={{ mb: 3 }}>
                        {["Brands", "Products", "Web"].map((label) => (
                            <Chip label={label} key={label} variant="outlined" sx={{ backgroundColor: 'lightgray', color: 'GrayText' }} />
                        ))}
                    </Stack>
                </Box>

                <Box sx={{ width: '100%', height: '400px', mb: 1 }}>
                    <Image src={Image3} alt="Momentify" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </Box>

                <Box sx={{ width: '100%', height: '400px', mb: 1 }}>
                    <Image src={Image2} alt="Momentify" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </Box>

                <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: 1, mb: 1 }}>
                    <Box sx={{ width: '100%', height: '400px' }}>
                        <Image src={Image4} alt="Momentify" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </Box>
                    <Box sx={{ width: '100%', height: '400px', display: 'flex', flexDirection: 'column', gap: 1 }}>
                        <Box sx={{ height: '50%' }}>
                            <Image src={Image5} alt="Momentify" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </Box>
                        <Box sx={{ height: '50%' }}>
                            <Image src={Image6} alt="Momentify" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </Box>
                    </Box>
                </Box>

                <Box sx={{ width: '100%', height: '400px', backgroundColor: 'black', display: 'flex', justifyContent: 'center', alignItems: 'center', mb: 1 }}>
                    <Image src={Image7} alt="Momentify" style={{ width: '50%', height: '80%', objectFit: 'contain' }} />
                </Box>

                <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: 1, mb: 1 }}>
                    <Box sx={{ width: '100%', height: '400px', backgroundColor: 'black', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Image src={Image8} alt="Momentify" style={{ width: '50%', height: '80%', objectFit: 'contain' }} />
                    </Box>
                    <Box sx={{ width: '100%', height: '400px', backgroundColor: 'black' }}>
                        <Image src={Image9} alt="Momentify" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </Box>
                </Box>

                <Box sx={{ width: '100%', height: '400px', backgroundColor: 'black', mb: 1 }}>
                    <Image src={Image10} alt="Momentify" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </Box>

                <Box sx={{ width: '100%', height: '400px', mb: 1 }}>
                    <Image src={Image11} alt="Momentify" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </Box>
            </Box>
        </Box>
    );
};

export default WebBrands;