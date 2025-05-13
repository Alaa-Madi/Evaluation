"use client";
import { Box, Typography, Link, useTheme, useMediaQuery } from "@mui/material";
import designer from '../../../../public/assets/designer.avif';
import design from '../../../../public/assets/design.png';
import Image from "next/image";
import SpinningReveal from "../animation/infinitscroll";

export default function Hero() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));

  return (
    <Box sx={{
      maxWidth: "100%",
      display: 'flex',
      justifyContent: 'space-between',
      flexDirection: { xs: 'column', md: 'row' },
      gap: { xs: 3, md: 0 },

    }}>
      {/* Main Content */}
      <Box sx={{
        width: { xs: '100%', md: '60%' },
        order: { xs: 1, md: 0 }
      }}>
        <Typography
          variant="h2"
          component="h1"
          sx={{
            fontSize: { xs: '32px', sm: '48px', md: '68px' },
            fontWeight: 400,
            lineHeight: 1.2,
            color: 'rgb(156, 156, 156)',
            fontFamily: 'Helvetica Now Display Bold',
            wordWrap: 'break-word'
          }}
        >
          A
          <Link
            href="https://x.com/olvhrs"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              textDecoration: 'none'
            }}
          >
            <Image
              src={designer}
              alt="designer"
              width={isMobile ? 30 : isTablet ? 40 : 50}
              height={isMobile ? 30 : isTablet ? 40 : 50}
              style={{
                borderRadius: '50px',
                verticalAlign: 'middle',
                margin: '0 4px',
                cursor: 'pointer',
                transition: 'transform 0.3s ease',

              }}
            />
          </Link>
          designer working with startups globally. Currently steering the ship at{" "}
          <Link
            href="/haptic"
            underline="none"
            sx={{
              display: "inline-flex",
              alignItems: "center",
              gap: 1,
              color: 'black',
              whiteSpace: 'nowrap'
            }}
          >
            <Box
              sx={{
                p: 0.5,
                borderRadius: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                src={design}
                alt="design"
                width={isMobile ? 30 : isTablet ? 40 : 50}
                height={isMobile ? 30 : isTablet ? 40 : 50}
                style={{
                  borderRadius: '10px',
                  verticalAlign: 'middle'
                }}
              />
            </Box>
            Haptic.
          </Link>
        </Typography>
      </Box>

      {/* Side Image - Hidden on mobile, visible on tablet/desktop */}
      <Box
        sx={{
          display: { xs: 'none', sm: 'flex' },
          justifyContent: 'center',
          alignItems: 'center',
          width: { sm: 50, md: 100 }, 
          height: { sm: 50, md: 100 }, 
          order: { xs: 0, md: 1 },
          marginTop:'10px',
          marginRight:'10px'

        }}
      >
        <Box
          sx={{
            width: '100%',
            height: '100%',
            borderRadius: '10px',
            overflow: 'hidden',
            position: 'relative',
          }}
        >
          <SpinningReveal />
        </Box>
      </Box>

    </Box>
  )
}