import { createTheme } from '@mui/material/styles';

const commonTypography={
    fontFamily: '"Poppins","Roboto", "Helvetica", "Arial", "sans-serif"',
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    h1: {
        fontWeight: 600,
        fontSize: '36px',
    },
    h2: {
        fontWeight: 600,
        fontSize: '32px',
    },
    h3: {
        fontWeight: 600,
        fontSize: '28px',
    },
    h4: {
        fontWeight: 600,
        fontSize: '24px',
    },
    h5: {
        fontWeight: 600,
        fontSize: '20px',
    },
    h6: {
        fontWeight: 600,
        fontSize: '16px',
    },
    sh1: {
        fontWeight: 500,
        fontSize: '24px',
    },
    sh2: {
        fontWeight: 500,
        fontSize: '18px',
    },
    sh3: {
        fontWeight: 500,
        fontSize: '16px',
    },
    sh4: {
        fontWeight: 500,
        fontSize: '12px',
    },
    body1: {
        fontWeight: 400,
        fontSize: '20px',
    },
    body2: {
        fontWeight: 400,
        fontSize: '18px',
    },
    body3: {
        fontWeight: 400,
        fontSize: '16px',
    },
    body4: {
        fontWeight: 400,
        fontSize: '12px',
    },
    body5: {
        fontWeight: 400,
        fontSize: '14px',
    },
    button: {
        fontWeight: 500,
        fontSize: '12px',
        textTransform: 'capitalize',
    }
}

const lightTheme = createTheme({
    root: {
        display: 'flex',
        height:'100vh',
    },
    palette: {
        light: {
            mode: "light",
            base: {
                main: 'transparent',
            },
            onSurface: {
                main: 'transparent',
            },
            onSurface2: {
                main: 'transparent',
            },
            onColorSurfaceText: {
                main: 'transparent',
            },
            white: {
                main: '#FFFFFF',
                // light: '#F5F6FE',
                // dark: '#EBEBEB'
            },
            lightBgBlue: {
                main: '#F5F6FE',
                light: '#EBECF5',
            },
            black: {
                main: '#000000',
                light: '#5E5E5E',
                dark: '#333333'
            },
            grey: {
                main: '#5E5E5E',
                light: '#C6C6C6'
            },
            blue: {
                main: '#5B6AF1',
                light: '#ACB3F1',
                dark: '#161E6A',
            },
            green: {
                main: '#5BF1D2',
                light: '#ACF1E3',
                dark: '#166A59'
            },
            yellow: {
                main: '#F1C65B',
                light: '#F1DAAC',
                dark: '#6A5216'
            },
            red: {
                main: '#F15B65',
                light: '#F1ACB0',
                dark: '#6A161B'
            },
            linearGradient: {
                main: 'linear-gradient(180deg, #0D1773 1.04%, #0D735E 100%)',
            },
            graph01: {
                main: '#D86445',
                // mainRgb: 'rgba(216, 73, 69, 0.5)',
            },
            graph02: {
                main: '#D89E45',
                // mainRgb: 'rgba(216, 100, 69, 0.5)',
            },
            graph03: {
                main: '#D8CF45',
                // mainRgb: 'rgba(216, 158, 69, 0.5)',
            },
            graph04: {
                main: '#45D853',
                // mainRgb: 'rgba(216, 207, 69, 0.5)',
            },
            graph05: {
                main: '#45D8D7',
                // mainRgb: 'rgba(69, 216, 83, 0.5)',
            },
            graph06: {
                main: '#458FD8',
                // mainRgb: 'rgba(69, 216, 215, 0.5)',
            },
            graph07: {
                main: '#8B45D8',
                // mainRgb: 'rgb(69, 143, 216, 0.5)',
            },
            graph08: {
                main: '#D8459C',
                // mainRgb: 'rgba(139, 69, 216, 0.5)',
            },
            graph09: {
                main: '#D84945;',
                // mainRgb:'rgba(139, 69, 216, 0.5)'
            },
            borderColor: {
                main: '#c6c6c6'
            },
            chartFont: {
                main: "#000000"
            },
            gridColor: {
                main: "rgba(0, 0, 0, 0.5)",
            }
        },
        typography: commonTypography,
        
    },
});

const darkTheme=createTheme({
    palette: {
        mode: "dark",
        base: {
            main: '#1A1B24',
        },
        onSurface: {
            main: '#2C2D36',
        },
        onSurface2: {
            main: '#31323A',
        },
        onColorSurfaceText: {
            main: '#121212',
        },
        white: {
            main: '#FFFFFF',
            dark: '#E8E8E9',
        },
        grey: {
            main: '#D1D1D3',
            light: '#A3A4A7',
        },
        blue: {
            main: '#9DA6F7',
            light: '#CED2F3',
            dark: '#7378A6',
        },
        green: {
            main: '#9CF7E4',
            light: '#CEF3EC',
            dark: '#73A69B',
        },
        yellow: {
            main: '#F7DC9D',
            light: '#F3E8CE',
            dark: '#A69773'
        },
        red: {
            main: '#F79DA3',
            light: '#F3CED0',
            dark: '#A67376',
        },
        linearGradient: {
            main: 'linear-gradient(180deg, #CED1F3 1.04%, #CEF3EC 100%)',
        },
        graph01: {
            main: '#E8A28F',
            // mainRgb: 'rgba(216, 73, 69, 0.5)',
        },
        graph02: {
            main: '#E8C58F',
            // mainRgb: 'rgba(216, 100, 69, 0.5)',
        },
        graph03: {
            main: '#E8E28F',
            // mainRgb: 'rgba(216, 158, 69, 0.5)',
        },
        graph04: {
            main: '#8FE898',
            mainRgb: 'rgba(216, 207, 69, 0.5)',
        },
        graph05: {
            main: '#8FE8E7',
            mainRgb: 'rgba(69, 216, 83, 0.5)',
        },
        graph06: {
            main: '#8FBCE8',
            mainRgb: 'rgba(69, 216, 215, 0.5)',
        },
        graph07: {
            main: '#B98FE8',
            mainRgb: 'rgb(69, 143, 216, 0.5)',
        },
        graph08: {
            main: '#E88FC4',
            mainRgb: 'rgba(139, 69, 216, 0.5)',
        },
        graph09: {
            main: '#E8928F;',
            mainRgb: 'rgba(139, 69, 216, 0.5)'
        },
        borderColor: {
            main: '#c6c6c6'
        },
        chartFont: {
            main: "#FFFFFF"
        },
        gridColor: {
            main: "#D1D1D3"
        }
    },
    typography:commonTypography,
});

export {lightTheme,darkTheme}