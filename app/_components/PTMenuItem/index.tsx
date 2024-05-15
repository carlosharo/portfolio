'use client'
import { theme } from "@/app/theme";
import { MenuItem, MenuItemProps, styled } from "@mui/material";
import { ReactNode } from "react";

interface PTMenuItemProps extends MenuItemProps {
    children: ReactNode;
}

export const PTMenuItem = styled(({ children, ...props }: PTMenuItemProps) => {
    return <MenuItem
    sx={{
        '&:hover':{
            borderBottom: `1px solid ${theme.palette.primary.light}`,
        }
    }}
        {...props}
    >{children}</MenuItem>
})(({ theme }) => ({
    backgroundColor: theme.palette.background.paper
}));