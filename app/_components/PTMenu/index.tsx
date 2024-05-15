'use client'
import { Menu, MenuProps, styled } from "@mui/material";
import { ReactNode } from "react";

interface PTMenuProps extends MenuProps {
    children: ReactNode;
}

export const PTMenu = styled(({ children, ...props }: PTMenuProps) => {
    return <Menu
        id="menu-appbar"
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
        }}
        keepMounted
        transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
        }}
        sx={{
            display: { xs: 'block', md: 'none', "& .MuiMenu-paper": { backgroundImage: 'unset' } },
        }}
        {...props}
    >{children}</Menu>
})(({ theme }) => ({

}));