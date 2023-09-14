import { AppBar, Box, Button, Drawer, IconButton, Toolbar, Typography } from "@mui/material"
import { useState } from "react"
import NavListDrawer from "./NavListDrawer"
import MenuIcon from '@mui/icons-material/Menu';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';

const navLinks = [
    {
        title: "home",
        path: "#",
        icon: <InboxIcon />
    },
    {
        title: "login",
        path: "#login",
        icon: <DraftsIcon />
    },
    {
        title: "register",
        path: "#register",
        icon: <InboxIcon />
    },
]

function Navbar() {
    const [open, setOpen] = useState(false)
    return (
        <>
            <AppBar position="static" sx={{mb:3}}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        size="large"
                        onClick={() => setOpen(true)}
                        sx={{display:{xs: "flex", sm:"none"}}}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h4" fontWeight="bold" sx={{ flexGrow: 1 }}>CDM</Typography>
                    {/* flexGrow: 1 hace que ocupe el maximo espacio disponible*/}
                    <Box sx={{display:{xs: "none", sm: "block" }}}>
                        {
                            navLinks.map(item => (
                                <Button
                                    color="inherit"
                                    key={item.title}
                                    component="a"
                                    href={item.path}
                                >{item.title}</Button>
                            ))
                        }
                    </Box>

                </Toolbar>

            </AppBar>

            <Drawer
                open={open}
                anchor="left"
                onClose={() => setOpen(false)}
                sx={{display:{xs: "flex", sm:"none"}}}
            >
                <NavListDrawer navLinks={navLinks} />
            </Drawer>

        </>
    )
}

export default Navbar