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
                bgcolor: 'transparent',
                color: theme.palette.text.primary,
                background: `linear-gradient(to right bottom, ${theme.palette.primary.dark}, ${theme.palette.background.default})`,
                borderRadius: '25px',
                borderBottom: '1px solid transparent',
                borderImage: `linear-gradient(0.25turn, rgba(0, 0, 0, 0), ${theme.palette.primary.light}, ${theme.palette.background.default})`,
                borderImageSlice: 1,
                '& background':{ }
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
                minHeight: 120,
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
    backgroundColor: theme.palette.secondary.main
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