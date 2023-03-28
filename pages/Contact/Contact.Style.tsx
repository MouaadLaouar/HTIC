import { createTheme } from "@mui/material";

export const ContactFormStyle = createTheme({
    components: {
        MuiTextField: {
            styleOverrides: {
                root: {
                    margin: '10px 0px'
                }
            }
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    backgroundColor: '#0084E9',
                    padding: '5px 30px',
                    marginLeft: '75%'
                }
            }
        }
    }
})