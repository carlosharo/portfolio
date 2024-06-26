import { Box, IconButton, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { Key, useContext } from "react";
import Link from "next/link";
import { PTMenu, PTMenuItem } from "@/app/_components";
import { PortfolioContext } from "@/app/_context/ContextProvider";

interface HeaderMobileProps {
    handleOpenNavMenu: (event: React.MouseEvent<HTMLElement>) => void;
    handleCloseNavMenu: () => void;
    anchorElNav: HTMLElement | null;
}

export const HeaderMobile = ({ handleOpenNavMenu, handleCloseNavMenu, anchorElNav }: HeaderMobileProps) => {
    const portfolio = useContext(PortfolioContext);
    const { layout: { menu: { title, options } } } = portfolio;
    return (
        <><Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
            >
                <MenuIcon />
            </IconButton>

            <PTMenu
                anchorEl={anchorElNav}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
            >
                    {options.map((page) => (
                        <PTMenuItem key={page as Key} onClick={handleCloseNavMenu}>
                            <Typography textAlign="center">
                                <Link href={`/${page.toLowerCase()}`}>{page}</Link>
                            </Typography>
                        </PTMenuItem>
                    ))}
            </PTMenu>
        </Box><Typography
            variant="h5"
            noWrap
            sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
            }}
        >
                <Link href='/'>{title}</Link>
            </Typography></>
    );
}