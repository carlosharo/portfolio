'use client'
import { Container, useTheme } from "@mui/material";
import React, { ReactNode } from "react";

interface PTcontainerProps {
    children: ReactNode;
}

export const PTContainer = ({ children }: PTcontainerProps) => {
    const theme = useTheme();
    return <Container
        sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            backgroundColor: theme.palette.background.default,
            minHeight: '100vh',
        }}
    >
        {children}
    </Container>;
}
