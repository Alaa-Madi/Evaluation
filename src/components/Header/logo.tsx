import { Typography } from '@mui/material';

const Logo = () => {
  return (
    <Typography
      variant="h1"
      className="logo-text"
      sx={{ color: 'black', fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' } }}
    >
      Haptic
    </Typography>

  );
};

export default Logo;
