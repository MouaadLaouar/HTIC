import { createTheme } from "@mui/material";

export const CardTeamStyle = createTheme({
    components: {
        MuiGrid: {
            styleOverrides: {
                root: {
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                }
            }
        },
        MuiTypography: {
            variants: [
                {
                    props: {
                        variant: 'h2'
                    },
                    style: {
                        fontSize: '16px',
                        fontWeight: '700',
                        color: '#394149',
                        width: '100%',
                        marginTop: '5px'
                    }
                },
                {
                    props: {
                        variant: 'h3'
                    },
                    style: {
                        fontWeight: '400',
                        color: '#0084E9',
                        fontSize: '16px',
                        width: '100%'
                    }
                },
                {
                    props: {
                        variant: 'body2'
                    },
                    style: {
                        marginTop: '7px',
                        fontSize: '16px',
                        color: '#394149',
                        width: '100%'
                    }
                }
            ]
        }
    }
})