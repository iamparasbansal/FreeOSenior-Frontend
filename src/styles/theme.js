import { createMuiTheme } from '@material-ui/core/styles';
// borderRadius : 15
const theme = createMuiTheme({
    palette: {
        primary: {
            light: '#F4F6FB',
            main: '#1C3B6B',
            dark: '#004ba0',
            contrastText: '#fff',
        },
        secondary: {
            light: '#e6ffff',
            main: '#E8F0FE',
            dark: '#82b3c9',
            contrastText: '#000',
        },
        text: {
            light: '#48434F',
            black: '#2B2A35',

        },
        hover: '#F1F3F4',
        disabledColor: '#757575',
    },
    typography: {
        fontFamily: [
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '-apple-system',
            'BlinkMacSystemFont',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        h1: {
            fontWeight: 500,
            textAlign: 'center',
            fontSize: "2.5rem"
        },
        h2: {
            fontWeight: 500,
            fontSize: "2.25rem"
        },
        h3: {
            fontWeight: 500,
            fontSize: "1.5rem",
        },
        h4: {
            fontSize: "1.3rem",
            fontWeight: 400
        },
        h5: {
            fontSize: "1.2rem",
            fontWeight: 400
        },
        h6: {
            fontSize: "1.10rem"
        },
        body1: {
            fontSize: "0.875rem",
            lineHeight: "1.65",
            textAlign: "justify"
        },
        body2: {
            fontSize: "0.65rem",
            lineHeight: "1.5",
            color: "#2B2A35",
        },
        subtitle1: {
            fontSize: "1rem",
            fontWeight: "400",
            lineHeight: "1.25",
        },
        subtitle2: {
            fontSize: "0.80rem",
            fontWeight: "400",
            lineHeight: "1.20",
            textAlign: 'justify'
        }
    }
})


export default theme;