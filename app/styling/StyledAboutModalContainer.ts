import { Box, BoxProps, styled } from "@mui/material";

export const StyledAboutModalContainer = styled(Box)<BoxProps>(({ theme }) => ({
  backgroundColor: theme.palette.background.modal,
  color: theme.palette.text.whiteGrey,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  margin: 'auto',
  borderRadius: 10,
  padding: '1.5rem 1.5rem',
  [theme.breakpoints.up('xs')]: {
    width: '85%',
    marginTop: '10%',
    marginBottom: '10%',
  },
  [theme.breakpoints.up('sm')]: {
    marginTop: '5%',
    marginBottom: '5%',
    maxWidth: 600,
  },
  '.MuiTypography-body2': {
    fontSize: 15,
  },
  '.MuiTypography-body1': {
    fontSize: 17,
  }
}));