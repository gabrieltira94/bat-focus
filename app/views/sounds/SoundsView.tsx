import { sounds } from "@/app/utils/data";
import { Grid } from "@mui/material";
import dynamic from "next/dynamic";

const NoSSRSoundItem = dynamic(() => import('@/app/views/sounds/SoundItem'), { ssr: false });

export default function SoundsView() {
  return (
    <Grid container>
      {sounds.map((sound, index) =>
        <NoSSRSoundItem key={index} sound={sound} />
      )}
    </Grid>
  );
}