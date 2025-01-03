import React from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';

interface LogoProps {
  width?: string; 
  height?: string;
  marginBottom?: string;
}

const Logo: React.FC<LogoProps> = ({ width = "180px", height = "57.6px", marginBottom = "16px" }) => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate('/'); 
  };

  return (
    <Box
      component="img"
      src="logo.png"
      alt="Logo"
      onClick={handleLogoClick}
      sx={{
        width,
        height,
        marginBottom,
        cursor: "pointer",
      }}
    />
  );
};

export default Logo;
