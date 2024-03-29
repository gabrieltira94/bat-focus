import { Box, BoxProps, keyframes, styled } from "@mui/material";

const effect = keyframes`
0% {
  transform: scaleX(0);
  transform: scaleY(0);
}

100% {
  transform: scaleX(1);
  transform: scaleY(1);
}
`;

export const StyledSoundItem = styled(Box)<BoxProps>(({ theme }) => ({
  display: 'flex',
  '&.active': {
    img: {
      padding: 15,
      animation: `${effect} 1s ease`
    },
    backgroundColor: theme.palette.background.active,
    borderRadius: '50%'
  }
}));