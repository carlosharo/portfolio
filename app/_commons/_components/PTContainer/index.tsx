'use client'
import { Container } from "@mui/material";
import React, { ReactNode } from "react";

interface PTcontainerProps {
    children: ReactNode
}

export const PTContainer = ({ children } : PTcontainerProps) => {
    return <Container
        sx={{
            gap: { xs: 8 },
            py: { xs: 2, md: 8, lg: 12 },
            textAlign: { xs: 'left' },
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            backgroundColor: '#000',
            minHeight: '80vh',
        }}
    >
        {children}
    </Container>;
}
