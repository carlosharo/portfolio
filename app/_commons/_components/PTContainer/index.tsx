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
            py: { xs: 2, sm: 8 },
            textAlign: { sm: 'center', md: 'left' },
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
