'use client';

import { StyledSoundItem } from "@/app/styling/StyledSoundItem";
import { isMobile } from "@/app/utils/browserUtils";
import { Sound } from "@/app/views/sounds/sound.dto";
import { Box, Grid, Grow, Slider, Tooltip, useTheme } from "@mui/material";
import Image from "next/image";
import { useEffect, useState } from "react";

interface Props {
  sound: Sound;
}

export default function SoundItem(props: Props) {
  const { sound: { name, track, icon } } = props;
  const { palette } = useTheme();
  const [volume, setVolume] = useState(1);
  const [isActive, setIsActive] = useState(false);
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audioObj = new Audio(`/sounds/${track}.mp3`);
    audioObj.loop = true;

    setAudio(audioObj);
  }, []);

  useEffect(() => {
    if (isActive)
      audio?.play();
    else
      audio?.pause();
  }, [isActive]);

  const handleChange = (event: Event, value: number | number[]) => {
    if (audio)
      audio.volume = value as number;

    setVolume(value as number);
  };

  return (
    <Grid item xs={6} md={4}
      p={2}
      display='flex'
      flexDirection='column'
      alignItems='center'
      justifyContent='center'
    >
      <StyledSoundItem
        onClick={() => setIsActive(!isActive)}
        className={isActive ? 'active' : undefined}
      >
        <Tooltip title={name}>
          <Image
            priority
            src={`/icons/${icon}.svg`}
            height={100}
            width={100}
            alt={name}
          />
        </Tooltip>
      </StyledSoundItem>

      {!isMobile() &&
        <Grow in={isActive} timeout={1500}>
          <Box display='flex' alignItems='center' justifyContent='center' width={{ xs: '60%', sm: '50%', md: '70%' }}>
            <Slider
              aria-label="Volume"
              value={volume}
              onChange={handleChange}
              step={0.1}
              min={0}
              max={1}
              valueLabelDisplay="auto"
              valueLabelFormat={`${volume * 100}%`}
            />
          </Box>
        </Grow>
      }
    </Grid>
  );
}