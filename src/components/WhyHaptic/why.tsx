import { Box, Typography } from '@mui/material';
import './whyHaptic.css';

const WhyHaptics = () => {
  return (
    <Box className="why-haptics">
      <Box>
        <ul>
          <li>
            <Typography variant="h6" className="why-haptics-title">
              Why Haptic
            </Typography>
          </li>
        </ul>
      </Box>
      <Box>
        <Typography variant="h2" className="why-haptics-headline">
          Startups come to us when <br />
          they need a team that can <br />
          deliver real results.
        </Typography>
      </Box>
    </Box>
  );
};

export default WhyHaptics;
