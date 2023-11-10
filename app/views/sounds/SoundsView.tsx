import { sounds } from "@/app/utils/data";
import SoundItem from "@/app/views/sounds/SoundItem";
import { Grid } from "@mui/material";

export default function SoundsView() {
  return (
    <Grid container>
      {sounds.map((sound, index) =>
        <SoundItem key={index} sound={sound} />
      )}
    </Grid>
  );
}