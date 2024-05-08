'use client'
import { AppBar, Container, Toolbar } from "@mui/material";
import { useState } from "react";
import layout from '../../_data/mock/layout.json';
import { HeaderMobile } from "./Components/HeaderMobile";
import { HeaderDesktop } from "./Components/HeaderDesktop";

export const HeaderLayout = () => {
    const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <HeaderDesktop {...{ handleCloseNavMenu, layout }} />
                    <HeaderMobile {...{ handleOpenNavMenu, handleCloseNavMenu, anchorElNav, layout }} />
                </Toolbar>
            </Container>
        </AppBar>
    );
}