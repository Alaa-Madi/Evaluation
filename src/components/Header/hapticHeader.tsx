"use client";

import { Stack } from "@mui/material";
import Hiring from "./hiring";
import Navigator from "./navigator";
import './hapticHeader.css';

interface HapticHeaderProps {
  open: boolean;
  toggleDrawer: (open: boolean) => (event?: React.KeyboardEvent | React.MouseEvent) => void;
}

const HapticHeader: React.FC<HapticHeaderProps> = ({ open, toggleDrawer }) => {
  return (
    <Stack id="home"
      direction="column"
      sx={{ width: '100%', backgroundColor: '#FF4D12', px: { xs: 2, sm: 4 } }}
      spacing={{ xs: 4, sm: 6, md: 10 }}
    >
      <Navigator />
      <Hiring />
    </Stack>

  );
};

export default HapticHeader;
