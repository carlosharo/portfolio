import { Box, Button, Typography } from "@mui/material";
import { LayoutProps } from '../../../_data/mock/types';
import { Key } from "react";
import Link from "next/link";

interface HeaderDesktopProps {
    handleCloseNavMenu: () => void;
    layout: LayoutProps;
}

export const HeaderDesktop = ({ handleCloseNavMenu, layout }: HeaderDesktopProps) => {
    return (
        <><Typography
            variant="h6"
            noWrap
            sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
            }}
        >
            <Link href='/'>PORTFOLIO</Link>
        </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                {layout.pages.map((page) => (
                    <Button
                        key={page as Key}
                        onClick={handleCloseNavMenu}
                        sx={{ my: 2, color: 'white', display: 'block' }}
                    >
                        <Link href={`/${page.toLowerCase()}`}>{page}</Link>
                    </Button>
                ))}
            </Box></>
    );
}