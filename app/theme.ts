import { alpha, createTheme } from "@mui/material";

declare module '@mui/material/styles' {
  interface TypeBackground {
    active: string;
    modal: string;
  }

  interface TypeText {
    whiteGrey: string;
  }
}

export const theme = createTheme({
  palette: {
    primary: {
      main: '#A85CFF'
    },
    secondary: {
      main: '#43B929'
    },
    background: {
      default: 'rgb(0,0,0)',
      active: alpha('#A85CFF', 0.65),
      modal: 'rgba(48, 47, 43, 0.95)',
    },
    text: {
      primary: 'rgb(255,255,255)',
      secondary: 'rgb(255,0,255)',
      whiteGrey: '#c0c2c4'
    }
  },

});