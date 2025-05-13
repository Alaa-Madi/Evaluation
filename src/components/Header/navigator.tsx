"use client"
import { useEffect, useState } from 'react';
import { Box, Button, IconButton, Toolbar } from '@mui/material';
import Logo from './logo';

const Navigator = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <Box>
      <Toolbar sx={{ position: 'relative', justifyContent: 'space-between', px: 2 }}>
        <Logo />

        {menuOpen && (
          <Box
            className="menu-button-group"
            sx={{
              position: 'fixed',
              right: 80,
              top: '10%',
              transform: 'translateY(-50%)',
              display: 'flex',
              gap: 2,
              zIndex: 1000,
              padding: '8px 16px',
              borderRadius: '50px',
              flexDirection: { xs: 'column', sm: 'row' },
            }}
          >
            {['Home', 'Work', 'Pricing', 'Career'].map((text) => (
              <Button
                key={text}
                onClick={() => {
                  const id = text.toLowerCase(); // e.g., 'Home' → 'home'
                  const section = document.getElementById(id);
                  if (section) {
                    section.scrollIntoView({ behavior: 'smooth' });
                    setMenuOpen(false); // close the menu after clicking
                  }
                }}
                sx={{
                  color: 'white',
                  backgroundColor: 'black',
                  borderRadius: '50px',
                  '&:hover': {
                    backgroundColor: 'rgba(255,255,255,0.2)',
                  },
                  width: { xs: '100%', sm: 'auto' },
                }}
              >
                {text}
              </Button>

            ))}
          </Box>
        )}
      </Toolbar>

      <IconButton
        onClick={toggleMenu}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="menu-toggle-button"
        sx={{
          position: 'fixed',
          right: 20,
          top: '10%',
          transform: 'translateY(-50%)',
          backgroundColor: scrolled ? 'black' : menuOpen ? 'black' : 'lightgray',
          color: menuOpen ? 'white' : 'darkgray',
          borderRadius: '50%',
          width: 40,
          height: 40,
          transition: '0.3s',
          zIndex: 1001,
          '&:hover': {
            backgroundColor: 'black',
            color: 'white',
          },
        }}
      >
        {menuOpen ? '×' : hovered ? '+' : '='}
      </IconButton>
    </Box>

  );
};

export default Navigator;