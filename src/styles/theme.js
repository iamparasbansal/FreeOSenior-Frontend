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
    }
})


export default theme;