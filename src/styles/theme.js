import { createMuiTheme } from '@material-ui/core/styles';
// borderRadius : 15
const theme = createMuiTheme({
    palette: {
        primary: {
            light: '#e1f3fa',
            main: '#649cde',
            dark: '#141fbc',
            contrastText: '#fff',
        },
        secondary: {
            light: '#b8e4f4',
            main: '#649cac',
            dark: '#446c74',
            contrastText: '#000',
        },
        text: {
            light: '#808080',
            black: '#616161',

        },
        hover: '#003040',
        disabledColor: '#cccccc',
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