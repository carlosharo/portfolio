import { Box, Button, Typography, useTheme } from "@mui/material";
import { Key, useContext } from "react";
import Link from "next/link";
import { PortfolioContext } from "@/app/_context/ContextProvider";

interface HeaderDesktopProps {
    handleCloseNavMenu: () => void;
}

export const HeaderDesktop = ({ handleCloseNavMenu }: HeaderDesktopProps) => {
    const theme = useTheme();
    const portfolio = useContext(PortfolioContext);
    const { layout: { menu: { title, options } } } = portfolio;
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
                textDecoration: 'none',
            }}
        >
            <Link href='/'>{title}</Link>
        </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                {options.map((page) => (
                    <Button
                        color="secondary"
                        key={page as Key}
                        onClick={handleCloseNavMenu}
                        sx={{
                            my: 2,
                            display: 'block',
                            '&:hover': {
                                borderBottom: `1px solid ${theme.palette.primary.light}`,
                                backgroundColor: 'unset',
                                borderRadius: 0,
                                color: `${theme.palette.primary.light}`
                            }
                        }}
                    >
                        <Link href={`/${page.toLowerCase()}`}>{page}</Link>
                    </Button>
                ))}
            </Box>
        </>
    );
}