import React, { useRef, useEffect } from 'react';
import { Box } from '@mui/material';
import { motion, useAnimation } from 'framer-motion';

const AlphabetAnimation = () => {
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  const containerRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const duplicatedLetters = [...letters, ...letters]; // Double the letters for seamless loop

  useEffect(() => {
    const containerWidth = containerRef.current?.offsetWidth || 0;
    const letterWidth = 56; // 40px width + 16px margin (8px each side)
    const contentWidth = duplicatedLetters.length * letterWidth;
    const duration = contentWidth / 100; // Adjust speed (higher divisor = faster)

    const sequence = async () => {
      // Start off-screen to the right
      await controls.start({ x: containerWidth });
      
      // Infinite scroll animation
      controls.start({
        x: -contentWidth,
        transition: {
          duration,
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop"
        }
      });
    };

    sequence();
    return () => controls.stop();
  }, []);

  return (
    <Box
      ref={containerRef}
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '300px',
        width: '100%',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <motion.div
        animate={controls}
        style={{
          display: 'flex',
          position: 'absolute',
          whiteSpace: 'nowrap',
          left: 0,
        }}
      >
        {duplicatedLetters.map((letter, index) => {
          const isFirstHalf = index % letters.length < 13;
          return (
            <Box
              key={`${letter}-${index}`}
              sx={{
                display: 'inline-flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '80px',
                height: '100%',
                mx: 1,
                fontSize: '24px',
                fontWeight: 'bold',
                borderRadius: '4px',
                backgroundColor: isFirstHalf ? '#E0F7FA' : '#F8BBD0',
                color: isFirstHalf ? '#1976D2' : '#FFFFFF',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                flexShrink: 0,
              }}
            >
              {letter}
            </Box>
          );
        })}
      </motion.div>
    </Box>
  );
};

export default AlphabetAnimation;