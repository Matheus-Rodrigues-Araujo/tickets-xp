import '@mui/material/styles';

declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides {
    'submit': true;
  }
}
