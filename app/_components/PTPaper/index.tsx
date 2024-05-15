'use client'
import { Paper, PaperProps, styled } from "@mui/material";
import { ReactNode } from "react";

interface PTPaperProps extends PaperProps {
    children: ReactNode;
}

export const PTPaper = styled(({ children, ...props }: PTPaperProps) => {
    return <Paper
        {...props}
    >{children}</Paper>
})(({ theme }) => ({
    padding: theme.spacing(1),
    textAlign: 'center',
    alignContent: 'center',
}));