import { createTheme } from "@mui/material";

export const NavBarTheme = createTheme({
    components: {
        MuiAppBar: {
            styleOverrides: {
                root: {
                    background: '#F0F5F9',
                    boxShadow: 'none'
                }
            }
        },
        MuiToolbar: {
            styleOverrides: {
                root: {
                    margin: '0px 5%',
                    Width: 1060,
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }
            }
        },
        MuiTypography: {
            variants: [
                {
                    props: {
                        variant: 'h6'
                    },
                    style: {
                        color: '#000',
                        fontSize: '16px',
                        textAlign: 'center',
                        fontWeight: 400
                    }
                },
                {
                    props: {
                        variant: 'h5'
                    },
                    style: {
                        color: '#0084E9',
                        fontSize: '16px',
                        fontWeight: 'bold',
                        textAlign: 'center'
                    }
                }
            ]
        }
    }
})