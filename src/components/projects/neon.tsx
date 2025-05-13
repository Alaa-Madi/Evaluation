'use client '
import React, { useEffect } from 'react';
import { Box } from '@mui/material';
import { motion, useAnimation } from 'framer-motion';

const NeonAnimation = () => {
  const controls = useAnimation();
  const letters = ['N', 'E', 'O', 'N'];
  const isMiddleLetter = (index: number) => index === 1 || index === 2;

  useEffect(() => {
    const sequence = async () => {
      while (true) {
        await controls.start({
          y: [0, -15, 0, 15, 0],
          transition: { duration: 3, repeat: Infinity }
        });
      }
    };
    sequence();
  }, [controls]);

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '300px',
        backgroundColor:'black'
      }}
    >
      <Box
        sx={{
          position: 'relative',
          width: '200px',
          height: '200px',
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gridTemplateRows: 'repeat(2, 1fr)',
        }}
      >
        {letters.map((letter, index) => (
          <Box
            key={`${letter}-${index}`}
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              position: 'relative',
            }}
          >
            <motion.div
              animate={isMiddleLetter(index) ? controls : {}}
              style={{
                fontSize: '80px',
                fontWeight: 'bold',
                color: 'white',
              }}
            >
              {letter}
            </motion.div>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default NeonAnimation;