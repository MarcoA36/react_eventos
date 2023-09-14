
import { Button, Card, CardActions, CardContent, Select, List, ListItem, ListItemIcon, ListItemText } from "@mui/material"
import RoomIcon from '@mui/icons-material/Room';
import DateRangeIcon from "@mui/icons-material/DateRange";
import PaymentIcon from '@mui/icons-material/Payment';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import TitleEvento from "./TitleEvento";


function CardInfoEvento() {
    return (
        <>
            <Card>
                <TitleEvento />
                <CardContent>
                    <List>
                        <ListItem>
                            <ListItemIcon>
                                <RoomIcon />
                            </ListItemIcon>
                            <ListItemText primary="Ubicación" secondary="Nombre del lugar" />
                        </ListItem>

                        <ListItem>
                            <ListItemIcon>
                                <AccessTimeIcon />
                            </ListItemIcon>
                            <ListItemText primary="Apertura de puertas" secondary="19:00" />
                        </ListItem>

                        <ListItem>
                            <ListItemIcon>
                                <LocalAtmIcon />
                            </ListItemIcon>
                            <ListItemText primary="Entradas online desde" secondary="$2500" />
                        </ListItem>

                        <ListItem>
                            <ListItemIcon>
                                <PaymentIcon />
                            </ListItemIcon>
                            <ListItemText
                                primary="Formas de Pago"
                                secondary="Tarjeta de crédito, Efectivo"
                            />
                        </ListItem>

                        <ListItem>
                            <ListItemIcon>
                                <DateRangeIcon />
                            </ListItemIcon>
                            <Select
                                multiple
                            >
                                Fecha del evento
                            </Select>
                        </ListItem>

                    </List>
                </CardContent>



                <CardActions>
                    <Button variant="contained"
                        sx={{
                            fontSize: 15,
                            width: "100%"
                        }}>
                        Comprar
                    </Button>
                </CardActions>

            </Card>
        </>
    )
}

export default CardInfoEvento




