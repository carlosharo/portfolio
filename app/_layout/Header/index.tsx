'use client'
import { useContext, useState } from "react";
import { layout } from '../../_commons/_mocks';
import { HeaderMobile } from "./Components/HeaderMobile";
import { HeaderDesktop } from "./Components/HeaderDesktop";
import { PTAppBar } from "@/app/_components";
import { Container, IconButton, Toolbar, useTheme } from "@mui/material";
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import { ColorModeContext } from "@/app/theme";

export const HeaderLayout = () => {
    const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };
    const theme = useTheme();
    const colorMode = useContext(ColorModeContext);

    return (
        <PTAppBar>
            <Container maxWidth='lg'>
                <Toolbar disableGutters>
                    <HeaderDesktop {...{ handleCloseNavMenu, layout }} />
                    <HeaderMobile {...{ handleOpenNavMenu, handleCloseNavMenu, anchorElNav, layout }} />
                    <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
                        {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
                    </IconButton>
                </Toolbar>
            </Container>
        </PTAppBar>
    );
}