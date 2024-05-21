'use client'
import { Card, CardContent, CardContentProps, CardProps, styled, useTheme } from "@mui/material";
import { ReactNode } from "react";

interface PTCardProps {
    children: ReactNode;
}

export const PTCardContainer = ({ children, ...props }: PTCardProps & CardProps) => {
    const theme = useTheme();
    return (
        <Card
            sx={{
                minWidth: { xs: '100%' },
                color: theme.palette.text.primary,
                background: `linear-gradient(to right bottom, ${theme.palette.primary.dark}, ${theme.palette.background.default})`,
                borderRadius: '25px',
                my: { xs: 2, md: 4, lg: 6 },
            }}
            {...props}
        >
            {children}
        </Card>
    );
}

export const PTCard = styled(({ children, ...props }: PTCardProps & CardProps) => {
    const theme = useTheme();
    return (
        <Card
            sx={{
                minHeight: { xs: '100%', md: '100px' },
                alignContent: 'center',
                justifyContent: 'center',
                bgcolor: 'transparent',
                color: theme.palette.text.primary,
            }}
            {...props}
        >
            {children}
        </Card>
    );
})(({ theme }) => ({
    backgroundColor: theme.palette.background.paper
}));

export const PTCardContent = ({ children, ...props }: PTCardProps & CardContentProps) => {
    return (
        <CardContent
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
            {...props}
        >
            {children}
        </CardContent>
    );
}