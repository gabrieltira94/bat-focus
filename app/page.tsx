'use client';

import HeaderView from "@/app/views/header/HeaderView";
import SoundsView from "@/app/views/sounds/SoundsView";
import { Box } from "@mui/material";

export default function Home() {
  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      margin: 'auto',
      width: { xs: '100%', sm: '85%', md: 800 }
    }}>
      <HeaderView />
      <SoundsView />
    </Box>
  );
}
