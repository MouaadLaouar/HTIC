import { createTheme } from "@mui/material";


export const EventsStyle = createTheme({
    components: {
        MuiTypography: {
            variants: [
                {
                    props: {
                        variant: 'h1'
                    },
                    style: {
                        fontSize: '40px',
                        fontWeight: '700',
                        fontFamily: 'Roboto',
                        marginBottom: '45px'
                    }
                },
                {
                    props: {
                        variant: 'body1'
                    },
                    style: {
                        textAlign: 'center',
                        marginBottom: '45px'
                    }
                },
                {
                    props: {
                        variant: 'h2'
                    },
                    style: {
                        fontSize: '24px',
                        fontWeight: 'bold',
                        fontFamily: 'Roboto',
                        marginBottom: '25px'
                    }
                }
            ]
        }
    }
})