import { createTheme } from "@mui/material";


export const JoinStyle = createTheme({
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
                        variant: 'h5'
                    },
                    style: {
                        margin: '20px 0px'
                    }
                }
            ]
        }
    }
})