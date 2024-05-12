import { Card, CardContent, SxProps, Theme } from "@mui/material";
import { ReactNode } from "react";

interface PTCardProps {
    children: ReactNode;
    styled?: boolean;
    secondary?: boolean;
    sx?: SxProps<Theme> | undefined;
}

export const PTCardContainer = ({ children, sx, styled = false, }: PTCardProps) => {

    const whitStyle = {
        background: 'linear-gradient(to right bottom, #0e0c43, black)',
        borderRadius: '25px',
    }

    return (
        <Card
            sx={{
                minWidth: { xs: '100%' },
                bgcolor: 'transparent',
                color: '#fff',
                ...{ ...(styled && whitStyle), ...sx, },
            }}
        >
            {children}
        </Card>
    );
}

export const PTCard = ({ children, sx }: PTCardProps) => {

    return (
        <Card
            sx={{
                minHeight: 120,
                alignContent: 'center',
                justifyContent: 'center',
                bgcolor: 'transparent',
                background: 'indigo',
                color: '#fff',
                ...sx
            }}
        >
            {children}
        </Card>
    );
}

export const PTCardContent = ({ children, sx }: PTCardProps) => {
    return (
        <CardContent
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                ...sx
            }}
        >
            {children}
        </CardContent>
    );
}