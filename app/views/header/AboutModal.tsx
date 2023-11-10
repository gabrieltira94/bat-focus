import { StyledAboutModalContainer } from "@/app/styling/StyledAboutModalContainer";
import { Box, Link, Modal, Typography } from "@mui/material";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Image from "next/image";

interface Props {
  onAction: () => void;
}

export default function AboutModal(props: Props) {
  const { onAction } = props;

  return (
    <Modal open onClose={onAction} sx={{ overflowY: 'auto' }}>
      <StyledAboutModalContainer onClick={onAction}>
        <Box>
          <Typography variant="h5" mb={2} fontWeight={600}>Bat Focus</Typography>

          <Typography variant="body2" mb={2.5} sx={{ textIndent: '10px' }}>🦇 Your Sonic Sanctuary for Concentration and Serenity. Immerse yourself in a world of tranquility as you harness the power of sound to enhance your focus and mindfulness.</Typography>
          <Typography variant="body2" mb={2.5} sx={{ textIndent: '10px' }}>🎵🔉 With Bat Focus, you have the freedom to compose your unique symphony of serenity by choosing from a variety of soothing sounds. Just like bats rely on their exceptional hearing, Bat Focus amplifies your concentration and inner peace.</Typography>
          <Typography variant="body2" sx={{ textIndent: '10px' }}>Tune in to your productivity and well-being with Bat Focus today. 🌟🧘‍♂️👂</Typography>
        </Box>

        <Box mt={5} display='flex' flexDirection='column' alignItems='center'>
          <Typography variant="body1" sx={{ mb: 1 }} textAlign='center'>Work more efficient with 'Pomodoro technique'</Typography>

          <Box onClick={e => e.stopPropagation()}>
            <Link display='flex' alignItems='center' href='https://attlara.info' target="_blank" rel='noreferrer'>
              <Image
                src='/spider-focus.png'
                alt='Spider Focus'
                width={40}
                height={40}
                priority
              />
              <Typography ml={0.5} color="secondary" textAlign='center' fontWeight={900}>Spider Focus</Typography>
            </Link>
          </Box>
        </Box>

        <Box mt={5} display='flex' flexDirection='column' alignItems='center'>
          <Typography variant="body2" sx={{ textIndent: '10px' }}>No Cookies, Trackers, or Ads used.</Typography>
          <Typography variant="body2" mb={2} sx={{ textIndent: '10px' }}>It's 100% Free, just enjoy it!</Typography>

          <Typography variant="caption">Find me on</Typography>
          <Box onClick={e => e.stopPropagation()}>
            <Link display='flex' href='https://linkedin.com/in/gabriel-tira-81237b131' target="_blank" rel='noreferrer'>
              <LinkedInIcon color="primary" />
              <Typography ml={0.5}>Gabriel Tira</Typography>
            </Link>
          </Box>
        </Box>
      </StyledAboutModalContainer>
    </Modal>
  );
}