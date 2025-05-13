"use client"

import type React from "react"
import { Box, Button, Chip, Divider, Stack, Typography, IconButton } from "@mui/material"
import CloseIcon from "@mui/icons-material/Close"
import { useState } from "react"

interface JobDrawerContentProps {
    onClose: () => void
}

const JobDrawerContent: React.FC<JobDrawerContentProps> = ({ onClose }) => {
    const [open, setOpen] = useState<boolean>(false);

    const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
        if (event.type === 'keydown' && (event as React.KeyboardEvent).key === 'Tab') {
            return;
        }
        setOpen(open);
    };
    return (
        <Box
            sx={{
                width: "45vw",
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
                    width: "100%",
                    padding: "40px",
                    backgroundColor: "#fff",
                }}
            >
                <IconButton
                    onClick={onClose}
                    sx={{
                        position: "absolute",
                        top: 16,
                        right: 16,
                        color: "grey.700",
                    }}
                >
                    <CloseIcon />
                </IconButton>


                <Typography variant="overline" color="text.secondary">
                    Hiring
                </Typography>
                <Typography variant="h4" sx={{ fontWeight: 500, mb: 2 }}>
                    Senior Designer
                </Typography>
                <Divider sx={{ mb: 3 }} />

                <Typography variant="h6" sx={{ fontWeight: 400, mb: 2 ,fontFamily:'FK Roman Standard Light',fontSize:'48px'}}>
                    As a Senior Designer, you’ll be a driving force in shaping our creative output and studio culture.
                </Typography>

                <Stack direction="row" spacing={1} sx={{ mb: 3 }}>
                    {["Full-Time", "UK", "Europe", "Remote"].map((label) => (
                        <Chip label={label} key={label} variant="outlined" sx={{ backgroundColor: 'lightgray', color: 'GrayText' }} />
                    ))}
                </Stack>

                <Button
                    variant="contained"
                    sx={{ borderRadius: "999px", px: 4, py: 1.5, mb: 4, backgroundColor: 'black' }}
                >
                    Apply
                </Button>
                <Box sx={{ width: '100%', height: '300px',mb:16 }}>
                    <div className="container2">
                        <div className="shape1 horizontal-up1"></div>
                        <div className="shape1 horizontal-up1"></div>
                        <div className="shape1 horizontal-down1"></div>
                        <div className="shape1 horizontal-down1"></div>
                    </div>
                </Box>
                {/* Sections */}
                <ul>
                    <li>
                        <Typography variant="h6" sx={{ fontWeight: 500, mt: 4, mb: 4 }}>
                            <b>About Us</b>
                        </Typography>
                    </li>


                    <Typography sx={{ color: 'text.secondary' ,fontFamily:'SF Pro Display Medium'}}>
                        Haptic is a forward-thinking design studio that seamlessly blends creativity and technology to craft powerful brand, web, motion, and product experiences.
                        Our partners range from ambitious startups to global innovators, including industry leaders such as Google, IBM, Harvard University, and Reddit.
                    </Typography>
                    <Typography sx={{ color: 'text.secondary' }}>
                        As the new kids on the block, we've rapidly made our mark — in our first year alone, we've delivered over 50 projects and surpassed £1M in revenue.
                        Now, we're poised for further growth and exciting expansion in 2025.
                    </Typography>
                    <Typography sx={{ color: 'text.secondary' }}>
                        At Haptic, we're driven by a passion for creation, whether collaborating with clients or pursuing our own exploratory projects. We embrace technology as
                        our creative partner — a dynamic force that enhances human ingenuity, turning bold ideas into immersive experiences.
                    </Typography>
                </ul>

                <ul>
                    <li>
                        <Typography variant="h6" sx={{ fontWeight: 500, mt: 4, mb: 4 }}>
                            In This Role, You Will:
                        </Typography>
                    </li>
                    <Typography sx={{ color: 'text.secondary' }}>
                        <li>Present work directly to clients and gather feedback from stakeholders</li>
                        <li>Provide constructive feedback and foster a collaborative, idea-driven environment</li>
                        <li>Elevate concepts through thoughtful refinement and strategic decision-making</li>
                        <li>Develop and maintain internal design systems and processes</li>
                        <li>Explore new tools, techniques, and visual approaches to push creative boundaries</li>
                    </Typography>

                </ul>


                <ul>
                    <li>
                        <Typography variant="h6" sx={{ fontWeight: 500, mt: 4, mb: 4 }}>
                            You Should Apply If:
                        </Typography>
                    </li>

                    <Typography sx={{ color: 'text.secondary' }}>
                        <li>You have 5+ years of design experience, including at least 2 years at an agency</li>
                        <li>Your portfolio includes work for real-world clients across various mediums</li>
                        <li>You have a keen eye for detail, a sharp sense of judgment, and a strategic approach to design</li>
                        <li>You’re a creative problem-solver who knows when to adapt and iterate</li>
                        <li>You understand design from both a creative and technical perspective, ensuring seamless handoffs between design and engineering</li>
                        <li>You thrive in dynamic environments and enjoy pushing creative boundaries</li>
                        <li>You communicate clearly and collaborate effectively with cross-functional teams</li>
                        <li>You are a kind, solution-oriented person who others enjoy working with</li>
                    </Typography>

                </ul>
                <ul>
                    <li>
                        <Typography variant="h6" sx={{ fontWeight: 500, mt: 4 }}>
                            Nice to Haves
                        </Typography>
                    </li>

                    <Typography sx={{ color: 'text.secondary' }}>

                        <Typography >
                            Bonus points if you have experience with one or more of the following:
                        </Typography>
                        <li>Motion design</li>
                        <li>Art direction</li>
                        <li>Copywriting</li>
                        <li>Coding</li>
                        <li>3D design</li>
                    </Typography>

                </ul>

                <ul>
                    <li>
                        <Typography variant="h6" sx={{ fontWeight: 500, mt: 4, mb: 4 }}>
                            Working Together
                        </Typography>
                    </li>

                    <Typography sx={{ color: 'text.secondary' }}>
                        At Haptic, we believe in process. We take the time to deeply understand each project, ensuring that every detail is thoughtfully considered before moving forward.
                    </Typography>
                    <Typography sx={{ color: 'text.secondary' }}>
                        We are committed to the growth of our team. We value who you are now and who you are becoming, fostering an environment where everyone can learn, evolve, and thrive.
                    </Typography>
                    <Typography sx={{ color: 'text.secondary' }}>
                        There’s no single type of person we’re looking for—our strength comes from the diverse backgrounds, skills, and perspectives that fuel our creativity.
                        By bringing together different experiences and ways of thinking, we push boundaries, challenge assumptions, and create truly innovative work.
                    </Typography>
                </ul>
                <ul>
                    <li>
                        <Typography variant="h6" sx={{ fontWeight: 500, mt: 4, mb: 4 }}>
                            Application
                        </Typography>
                    </li>

                    <Typography sx={{ color: 'text.secondary' }}>
                        To apply, please click the 'Apply' button to email us. Please link us to your portfolio and your LinkedIn — we’ll reach out if we’re interested in talking further.
                    </Typography>

                </ul>

                <Button
                    variant="contained"
                    sx={{ borderRadius: "999px", px: 4, py: 1.5, mt: 2, backgroundColor: 'black' }}
                >
                    Apply
                </Button>
            </Box>
        </Box>
    );
};
export default JobDrawerContent
