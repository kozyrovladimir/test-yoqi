import { createTheme } from "@material-ui/core";

export const theme = createTheme({
    palette: {
        type: 'light',
        primary: {
            main: '#ffffff',
            contrastText: '#7d7d7d',
        },
        secondary: {
            main: '#f50057',
        },
        background: {
            paper: '#ffffff',
            default: '#ffffff',
        },
        text: {
            primary: '#7d7d7d',
        },
    },
});