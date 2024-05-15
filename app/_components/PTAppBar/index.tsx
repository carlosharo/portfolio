'use client'
import { AppBar, AppBarProps, styled } from "@mui/material";
import { ReactNode } from "react";

interface PTPaperProps extends AppBarProps {
    children: ReactNode;
}

export const PTAppBar = styled(({ children, ...props }: PTPaperProps) => {
    return <AppBar
        {...props}
    >{children}</AppBar>
})(({ theme }) => ({
    backgroundImage: 'none',
    borderBottom: '2px solid transparent',
    borderImage: `linear-gradient(0.25turn, rgba(0, 0, 0, 0), ${theme.palette.secondary.main}, rgba(0, 0, 0, 0))`,
    borderImageSlice: 1,
}));