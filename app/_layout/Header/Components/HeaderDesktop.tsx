import { Box, Button, Typography } from "@mui/material";
import { Key } from "react";
import Link from "next/link";

interface HeaderDesktopProps {
    handleCloseNavMenu: () => void;
    layout: string[];
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
                {layout.map((page) => (
                    <Button
                        key={page as Key}
                        onClick={handleCloseNavMenu}
                        sx={{ 
                            my: 2, 
                            display: 'block',
                            '&:hover':{
                                borderBottom: `1px solid red`,
                                backgroundColor: 'unset',
                                borderRadius: 0,
                            }
                        }}
                    >
                        <Link href={`/${page.toLowerCase()}`}>{page}</Link>
                    </Button>
                ))}
            </Box></>
    );
}