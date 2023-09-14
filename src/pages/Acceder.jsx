import { Container } from "@mui/material"
import FormAcceder from "../components/FormAcceder"

function AccederPage() {
    return (
        <>
            <Container maxWidth="sm" sx={{
                bgcolor:"#454545"
            }}>
                
               <FormAcceder/>

            </Container>
        </>
    )
}

export default AccederPage