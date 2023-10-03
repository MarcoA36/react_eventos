import { Container } from "@mui/material"
import CardsContainer from "../components/CardsContainer"
import Header from "../components/Header"



function HomePage() {
    return (
        <>
            <Container
                maxWidth="xl"
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "20px"
                }}
            >
                <Header />  
                         
                <CardsContainer/>
            </Container>
        </>
    )
}

export default HomePage