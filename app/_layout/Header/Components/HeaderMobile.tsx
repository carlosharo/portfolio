import { Box, IconButton, Menu, MenuItem, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { LayoutProps } from '../../../_data/mock/types';
import { Key } from "react";
import Link from "next/link";


interface HeaderMobileProps {
    handleOpenNavMenu: (event: React.MouseEvent<HTMLElement>) => void;
    handleCloseNavMenu: () => void;
    anchorElNav: HTMLElement | null;
    layout: LayoutProps;
}

export const HeaderMobile = ({ handleOpenNavMenu, handleCloseNavMenu, anchorElNav, layout }: HeaderMobileProps) => {
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

            <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                    display: { xs: 'block', md: 'none' },
                }}
            >
                {layout.pages.map((page) => (
                    <MenuItem key={page as Key} onClick={handleCloseNavMenu}>
                        <Typography textAlign="center">
                            <Link href={`/${page.toLowerCase()}`}>{page}</Link>
                        </Typography>
                    </MenuItem>
                ))}
            </Menu>
        </Box><Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
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
                PORTFOLIO
            </Typography></>
    );
}