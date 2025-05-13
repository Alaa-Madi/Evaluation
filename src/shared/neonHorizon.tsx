"use client"

import type React from "react"
import { Box, Chip, Divider, Stack, Typography, IconButton } from "@mui/material"
import CloseIcon from "@mui/icons-material/Close"
import { useState } from "react"
import Image1 from '../../public/assets/Neon/hi.avif';
import Image2 from '../../public/assets/Neon/3CARDS.avif';
import Image3 from '../../public/assets/Neon/3RDD.avif';
import Image4 from '../../public/assets/Neon/56.avif';
import Image5 from '../../public/assets/Neon/FOX.avif';
import Image6 from '../../public/assets/Neon/M2.avif';
import Image7 from '../../public/assets/Neon/NFT.avif';
import Image8 from '../../public/assets/Neon/WOLF.avif';
import Image9 from '../../public/assets/Neon/collection.avif';
import Image10 from '../../public/assets/Neon/customtypeset.avif';
import Image11 from '../../public/assets/Neon/gameover.avif';
import Image12 from '../../public/assets/Neon/industry.avif';
import Image13 from '../../public/assets/Neon/neonLogo.avif';
import Image14 from '../../public/assets/Neon/numerical.avif';
import Image15 from '../../public/assets/Neon/output.avif';
import Image16 from '../../public/assets/Neon/random.avif';
import Image17 from '../../public/assets/Neon/sector.avif';

import NeonAnimation from '../components/projects/neon'
import Image from "next/image"

interface IProps {
    onClose: () => void
}

const NeonHrizons: React.FC<IProps> = ({ onClose }) => {
    const [, setOpen] = useState<boolean>(false);

    const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
        if (event.type === 'keydown' && (event as React.KeyboardEvent).key === 'Tab') {
            return;
        }
        setOpen(open);
    };

    return (
        <Box sx={{ width: "50vw", height: "100vh", backgroundColor: "#fff" }} role="presentation" onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
            <Box sx={{ width: '100%', backgroundColor: "#fff" }}>
                <Box sx={{ position: 'sticky', top: 0, width: '100%', backgroundColor: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'space-between', px: 2, py: 1, boxShadow: 3, zIndex: 10 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Box sx={{ width: 60, height: 60, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <Image style={{ borderRadius: '10px' }} src={Image1} height={60} width={60} alt="Logo" />
                        </Box>
                        <Box sx={{ display: 'flex', flexDirection: 'column', ml: 2 }}>
                            <Typography variant="h6" sx={{ fontWeight: 600 }}>
                                Neon Horizons
                            </Typography>
                            <Typography color="text.secondary" variant="body2">
                                Welcome to the cyberscape
                            </Typography>
                        </Box>
                    </Box>

                    <IconButton onClick={onClose} sx={{ color: 'grey.700', paddingRight: 8 }}>
                        <CloseIcon />
                    </IconButton>
                </Box>

                <Divider sx={{ mb: 3 }} />

                <Box sx={{ padding: 2 }}>
                    <Typography variant="h6" sx={{ fontWeight: 400, mb: 2, fontFamily: "FK Roman Standard Light", fontSize: '40px' }}>
                        Welcome to the cyberscape.
                    </Typography>
                    <Box sx={{ fontWeight: 400, mb: 2, color: 'GrayText' }}>
                        Neon Horizons is a web3 game that fuses immersive storytelling with on-chain strategy to create a unique, player-owned sci-fi universe...
                    </Box>

                    <Stack direction="row" spacing={1} sx={{ mb: 3 }}>
                        {["Brands", "Products"].map((label) => (
                            <Chip label={label} key={label} variant="outlined" sx={{ backgroundColor: 'lightgray', color: 'GrayText' }} />
                        ))}
                    </Stack>
                </Box>

                <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 8 }}>
                    <Image src={Image13} alt="Haptic Logo" width={800} height={400} />
                </Box>

                <Box sx={{ width: '100%', backgroundColor: 'black', display: 'flex', justifyContent: 'center', alignItems: 'center', mt: 1, mb: 1 }}>
                    <Image src={Image3} alt="Haptic Logo" width={600} height={240} style={{ borderRadius: '10px' }} />
                </Box>

                <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: 1 }}>
                    <Image src={Image11} alt="Haptic Logo" width={400} height={300} style={{ borderRadius: '10px' }} />
                    <Box sx={{ width: '100%', backgroundColor: 'black', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <NeonAnimation />
                    </Box>
                </Box>

                <Box sx={{ backgroundColor: 'black', display: 'flex', justifyContent: 'center', alignItems: 'center', mt: 1, mb: 1 }}>
                    <Image src={Image7} alt="Haptic Logo" width={800} height={300} />
                </Box>

                <Image src={Image1} alt="Haptic Logo" width={800} height={400} />
                <Image src={Image16} alt="Haptic Logo" width={800} height={400} />
                <Image src={Image12} alt="Haptic Logo" width={800} height={400} />
                <Image src={Image10} alt="Haptic Logo" width={800} height={400} />

                <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: 1, mt: 1 }}>
                    <Image src={Image14} alt="Haptic Logo" width={400} height={400} />
                    <Image src={Image15} alt="Haptic Logo" width={400} height={400} />
                </Box>

                <Image src={Image9} alt="Haptic Logo" width={800} height={400} />
                <Image src={Image4} alt="Haptic Logo" width={800} height={400} />
                <Image src={Image17} alt="Haptic Logo" width={800} height={400} />

                <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: 1, mt: 1 }}>
                    <Image src={Image5} alt="Haptic Logo" width={400} height={400} />
                    <Image src={Image8} alt="Haptic Logo" width={400} height={400} />
                </Box>

                <Image src={Image6} alt="Haptic Logo" width={800} height={400} />
                <Image src={Image2} alt="Haptic Logo" width={800} height={400} />
            </Box>
        </Box>
    );
};

export default NeonHrizons;
