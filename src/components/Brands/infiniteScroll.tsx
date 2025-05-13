"use client"
import { Box, Card, CardContent } from "@mui/material"
import Brand1 from '../../../public/assets/images (1).png';
import Brand2 from '../../../public/assets/images (2).png';
import Brand3 from '../../../public/assets/images.png';
import Brand4 from '../../../public/assets/silver-logo-apple-1.webp';
import Brand5 from '../../../public/assets/react.svg';
import Image from "next/image";

const Brands = [
  { id: 1, image: Brand1},
  { id: 2, image:  Brand2},
  { id: 3, image: Brand3 },
  { id: 4, image: Brand4},
  { id: 5, image: Brand5 },
]

export function InfityBrandScroll() {
  const repeatedBrands = [...Brands, ...Brands, ...Brands]

  return (
    <Box
      style={{
        position: "relative",
        width: "100%",
        height: "200px",
        overflow: "hidden",
        background: "white",
      }}
    >
      {/* Left fade effect */}
      <Box
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          bottom: 0,
          width: "4rem",
          zIndex: 10,
          pointerEvents: "none",
        }}
      />

      {/* Right fade effect */}
      <Box
        style={{
          position: "absolute",
          right: 0,
          top: 0,
          bottom: 0,
          width: "4rem",
          zIndex: 10,
          pointerEvents: "none",
        }}
      />

      {/* Scrolling container */}
      <Box
        style={{
          overflow: "hidden",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Box
          style={{
            display: "flex",
            gap: "1.5rem",
            padding: "1rem 0",
            animation: "scroll 6s linear infinite",
            width: "fit-content",
          }}
        >
          {repeatedBrands.map((brand, index) => (
            <Box key={`${brand.id}-${index}`} style={{ width: "180px", flexShrink: 0 }}>
              <Card
                sx={{
                  height: "120px",
                  backgroundColor: "white",
                  transition: "0.3s",
                  "&:hover": {
                    borderColor: "#3f51b5",
                  },
                  boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
                }} 
              >
                <CardContent
                  sx={{
                    height: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: "16px ",
                  }}
                >
                  <Image
                    src={brand.image || "/placeholder.svg"}
                    alt={`Brand ${brand.id}`}
                    style={{
                      width: "60px",
                      height: "60px",
                    }}
                  />
                </CardContent>
              </Card>
            </Box>
          ))}
        </Box>
      </Box>

      {/* Global styles for animation */}
      <style>
        {`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(calc(-180px * ${Brands.length} - 1.5rem * ${Brands.length}));
            }
          }
        `}
      </style>
    </Box>
  )
}
