"use client"

import type React from "react"
import { Box, Chip, Divider, Stack, Typography, IconButton } from "@mui/material"
import CloseIcon from "@mui/icons-material/Close"
import { useState } from "react"
import sparklogo from "../../public/assets/Spark/spark4.avif";
import spark1 from "../../public/assets/Spark/spark1.avif";
import spark2 from "../../public/assets/Spark/spark2.avif";
import spark3 from "../../public/assets/Spark/spark3.avif";
import spark5 from "../../public/assets/Spark/spark5.avif";
import spark6 from "../../public/assets/Spark/spark6.avif";
import spark7 from "../../public/assets/Spark/spark7.avif";
import spark8 from "../../public/assets/Spark/spark8.avif";
import spark9 from "../../public/assets/Spark/spark9.avif";
import spark10 from "../../public/assets/Spark/spark10.avif";
import Image from "next/image"

interface IProps {
    onClose: () => void
}

const Spark: React.FC<IProps> = ({ onClose }) => {
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
                            <Image style={{ borderRadius: '10px' }} src={sparklogo} height={60} width={60} alt="Spark Logo" />
                        </Box>
                        <Box sx={{ display: 'flex', flexDirection: 'column', ml: 2 }}>
                            <Typography variant="h6" sx={{ fontWeight: 600 }}>
                                Spark
                            </Typography>
                            <Typography color="text.secondary" variant="body2">
                                Sustainable home improvement
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
                        Enabling the blockchain for commerce and payments
                    </Typography>
                    <Box sx={{ fontWeight: 400, mb: 2, color: 'GrayText' }}>
                        Spark enables anyone, anywhere, to use the blockchain for commerce and payments. We partnered with Spark to create a simple and intuitive checkout experience for non-Web3 natives, as well as a robust merchant interface for managing checkouts, customer insights, and revenue tracking.
                    </Box>

                    <Stack direction="row" spacing={1} sx={{ mb: 3 }}>
                        {["Motion", "Product", "Web"].map((label) => (
                            <Chip label={label} key={label} variant="outlined" sx={{ backgroundColor: 'lightgray', color: 'GrayText' }} />
                        ))}
                    </Stack>
                </Box>

                <Box sx={{ width: '100%', height: '400px', mb: 1 }}>
                    <Image src={spark10} alt="Spark Hero" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </Box>

                <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: 1, mb: 1 }}>
                    <Box sx={{ width: '100%', height: '400px', backgroundColor: 'black' }}>
                        <Image src={spark1} alt="Spark Showcase" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </Box>
                    <Box sx={{ width: '100%', height: '400px', backgroundColor: 'black' }}>
                        <Image src={spark2} alt="Spark Showcase" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </Box>
                </Box>

                <Box sx={{ width: '100%', height: '400px', mb: 1 }}>
                    <Image src={spark3} alt="Spark Feature" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </Box>

                <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: 1, mb: 1 }}>
                    <Box sx={{ width: '100%', height: '400px', backgroundColor: 'black' }}>
                        <Image src={sparklogo} alt="Spark Logo" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </Box>
                    <Box sx={{ width: '100%', height: '400px', backgroundColor: 'black' }}>
                        <Image src={spark5} alt="Spark Showcase" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </Box>
                </Box>

                <Box sx={{ width: '100%', height: '400px', backgroundColor: 'black', mb: 1 }}>
                    <Image src={spark6} alt="Spark Mockup" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </Box>

                <Box sx={{ width: '100%', height: '400px', mb: 1 }}>
                    <Image src={spark7} alt="Spark Feature" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </Box>

                <Box sx={{ width: '100%', height: '400px', mb: 1 }}>
                    <Image src={spark8} alt="Spark Feature" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </Box>

                <Box sx={{ width: '100%', height: '400px', mb: 1 }}>
                    <Image src={spark9} alt="Spark Feature" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </Box>
            </Box>
        </Box>
    );
};

export default Spark;