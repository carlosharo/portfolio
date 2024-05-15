'use client'
import { useState } from "react";
import { layout } from '../../_commons/_mocks';
import { HeaderMobile } from "./Components/HeaderMobile";
import { HeaderDesktop } from "./Components/HeaderDesktop";
import { PTAppBar, PTContainer } from "@/app/_components";
import { Toolbar } from "@mui/material";

export const HeaderLayout = () => {
    const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <PTAppBar position="static">
            <PTContainer maxWidth='lg'>
                <Toolbar disableGutters>
                    <HeaderDesktop {...{ handleCloseNavMenu, layout }} />
                    <HeaderMobile {...{ handleOpenNavMenu, handleCloseNavMenu, anchorElNav, layout }} />
                </Toolbar>
            </PTContainer>
        </PTAppBar>
    );
}