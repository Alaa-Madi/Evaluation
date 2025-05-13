"use client"
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import hapticstudio from '../../../public/assets/hapticstudio_logo.jpeg';
import Image from 'next/image';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    ...theme.applyStyles('dark', {
        backgroundColor: '#1A2027',
    }),
}));
const HapticFooter = () => {
    return (
        <>
            <Box sx={{ flexGrow: 1, mt: 4 }}>
                <Grid container spacing={2}>
                    <Grid size={{ xs: 8, md: 3, lg: 2 }} sx={{ mt: 4 }}>
                        <Image src={hapticstudio} alt="Haptic Logo" width={100} height={100} />
                    </Grid>

                    <Grid size={{ xs: 6, lg: 3 }} sx={{ border: 'none' }}>
                        <Item sx={{ border: 'none', boxShadow: 'none', p: 0 }}>
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: 1,
                                }}
                            >
                                <Typography
                                    variant="h6"
                                    sx={{
                                        mt: 4,
                                        fontWeight: 'bold',
                                        color: 'black',
                                        fontSize: '14px',
                                    }}
                                >
                                    Learn More
                                </Typography>

                                <Box
                                    component="ul"
                                    aria-labelledby="category-a"
                                    sx={{
                                        mt: 2,
                                        listStyle: 'none',
                                        m: 0,
                                        p: 0,
                                        display: 'flex',
                                        flexDirection: 'column',
                                        gap: 1,
                                    }}
                                >
                                    {[
                                        { label: 'Home', href: '#home' },
                                        { label: 'Work', href: '#work' },
                                        { label: 'Pricing', href: '#pricing' },
                                        { label: 'Career', href: '#career' },
                                    ].map((link) => (
                                        <li key={link.label}>
                                            <a
                                                href={link.href}
                                                style={{
                                                    textDecoration: 'none',
                                                    color: 'inherit',
                                                    fontWeight: 'normal',
                                                }}
                                                onMouseOver={(e) => (e.currentTarget.style.color = 'black')}
                                                onMouseOut={(e) => (e.currentTarget.style.color = 'inherit')}
                                            >
                                                {link.label}
                                            </a>
                                        </li>
                                    ))}
                                </Box>
                            </Box>
                        </Item>
                    </Grid>

                    <Grid size={{ xs: 6, lg: 3 }} sx={{ border: 'none' }}>
                        <Item sx={{ border: 'none', boxShadow: 'none', p: 0 }}>
                            <Box
                                sx={{
                                    mt: 4,
                                    gap: 2,
                                    alignItems: 'center',

                                }}
                            >
                                <Typography
                                    sx={{
                                        mb: 2,
                                        fontWeight: 'bold',
                                        color: 'black',
                                        fontSize: '14px',
                                    }}
                                >
                                    Follow Us
                                </Typography>

                                <Box
                                    component="ul"
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        gap: 2,
                                        listStyle: 'none',
                                        m: 0,
                                        p: 0,
                                    }}
                                >
                                    <li>
                                        <a
                                            href="https://www.linkedin.com/company/hapticstudio/"
                                            style={{
                                                textDecoration: 'none',
                                                color: 'inherit',
                                                fontWeight: 'normal',
                                            }}
                                            onMouseOver={(e) => (e.currentTarget.style.color = 'black')}
                                            onMouseOut={(e) => (e.currentTarget.style.color = 'inherit')}
                                        >
                                            LinkedIn
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="https://www.instagram.com/byhaptic/"
                                            style={{
                                                textDecoration: 'none',
                                                color: 'inherit',
                                                fontWeight: 'normal',
                                            }}
                                            onMouseOver={(e) => (e.currentTarget.style.color = 'black')}
                                            onMouseOut={(e) => (e.currentTarget.style.color = 'inherit')}
                                        >
                                            Instagram
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="https://x.com/madebyhaptic"
                                            style={{
                                                textDecoration: 'none',
                                                color: 'inherit',
                                                fontWeight: 'normal',
                                            }}
                                            onMouseOver={(e) => (e.currentTarget.style.color = 'black')}
                                            onMouseOut={(e) => (e.currentTarget.style.color = 'inherit')}
                                        >
                                            X
                                        </a>
                                    </li>
                                </Box>
                            </Box>
                        </Item>
                    </Grid>

                </Grid>
                <Grid
                    container
                    justifyContent="flex-start"
                    alignItems="center"
                    flexDirection={{ xs: 'column', sm: 'row' }}
                    sx={{
                        width: '100%',
                        fontSize: '12px',
                        pl: 2,
                        py: 1,
                        border: 'none',
                        boxShadow: 'none'
                    }}
                >
                    <Grid size={{ xs: 6, lg: 3 }} sx={{ border: 'none' }}>
                        <Item sx={{ border: 'none', boxShadow: 'none', p: 0 }}>
                            Haptic © Copyright 2025
                        </Item>
                    </Grid>
                </Grid>


            </Box >

        </>

    );
};

export default HapticFooter;
