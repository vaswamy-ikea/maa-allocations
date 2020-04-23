import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import { blueGrey, red } from '@material-ui/core/colors';

export const primaryColor = '#0d47a1';
export const secondaryColor = '#2196f3';

let theme = createMuiTheme({
    palette: {
        type: 'light',
        background: {
            default: blueGrey[50]
        },
        primary: { main: primaryColor },
        secondary: { main: secondaryColor },
        error: { main: red[500] },
        contrastThreshold: 3,
        tonalOffset: 0.2
    },
    typography: {
        fontFamily: 'Verdana, Geneva, sans-serif',
        fontSize: 13
    }
});

theme.overrides = {
    MuiSelect: {
        selectMenu: {
            '&:focus': {
                background: 'inherit'
            }
        }
    },
    MuiCheckbox: {
        root: {
            padding: 0
        }
    },
    MuiTableCell: {
        paddingNone: {
            padding: `${theme.spacing(0.2)}px ${theme.spacing(1)}px`,
            '&:last-child': {
                padding: `${theme.spacing(0.2)}px ${theme.spacing(1)}px`
            }
        }
    }
};

theme = responsiveFontSizes(theme);

export default theme;
