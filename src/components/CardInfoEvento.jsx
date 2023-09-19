
import { Button, Card, CardActions, CardContent, Select, List, ListItem, ListItemIcon, ListItemText } from "@mui/material"
import RoomIcon from '@mui/icons-material/Room';
import DateRangeIcon from "@mui/icons-material/DateRange";
import PaymentIcon from '@mui/icons-material/Payment';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import TitleEvento from "./TitleEvento";


function CardInfoEvento({eventData}) {
    return (
        <>
            <Card>
                <TitleEvento eventData={eventData.title} />
                <CardContent>
                    <List>
                        <ListItem>
                            <ListItemIcon>
                                <RoomIcon />
                            </ListItemIcon>
                            <ListItemText primary="Ubicación" secondary={eventData.location}/>
                        </ListItem>

                        <ListItem>
                            <ListItemIcon>
                                <AccessTimeIcon />
                            </ListItemIcon>
                            <ListItemText primary="Apertura de puertas" secondary={eventData.time} />
                        </ListItem>

                        <ListItem>
                            <ListItemIcon>
                                <LocalAtmIcon />
                            </ListItemIcon>
                            <ListItemText primary="Entradas online desde" secondary={eventData.price} />
                        </ListItem>

                        <ListItem>
                            <ListItemIcon>
                                <PaymentIcon />
                            </ListItemIcon>
                            <ListItemText
                                primary="Formas de Pago"
                                secondary={eventData.paymentMethods}
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




