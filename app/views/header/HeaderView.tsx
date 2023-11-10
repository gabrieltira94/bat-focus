'use client';

import About from "@/app/views/header/About";
import InstallPWA from "@/app/views/header/InstallPWA";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import Image from "next/image";

export default function HeaderView() {
  const { breakpoints, palette } = useTheme();

  const getLogoWidth = () => useMediaQuery(breakpoints.down("md")) ? 70 : 60;

  const getLogoHeight = () => useMediaQuery(breakpoints.down('md')) ? 50 : 80;

  return (
    <Box
      display='flex'
      justifyContent='space-between'
      alignItems='center'
      width='100%'
      px={2}
    >
      <Box display='flex' alignItems='center' ml={{ xs: 2, md: 0 }} mt={{ xs: 1, md: 0 }}>
        <Image
          src='/logo.svg'
          alt='Bat Focus'
          width={getLogoWidth()}
          height={getLogoHeight()}
          priority
          blurDataURL='/bat-svgrepo-com'
        />
        <Typography variant="h5" fontWeight={600} display={{ xs: 'none', md: 'block' }} ml={1} color={palette.primary.main}>Bat Focus</Typography>
      </Box>

      <Box display='flex'>
        <InstallPWA />
        <About />
      </Box>
    </Box>
  );
}