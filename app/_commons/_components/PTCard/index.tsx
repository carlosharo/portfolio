import { Card, CardContent, SxProps, Theme } from "@mui/material";
import { ReactNode } from "react";

interface PTCardProps {
    children: ReactNode;
    styled?: boolean;
    secondary?: boolean;
    sx?: SxProps<Theme> | undefined;
}

export const PTCard = ({ children, sx, styled = false, secondary = false }: PTCardProps) => {
    const whitStyle = {
        background: 'linear-gradient(to right bottom, #0e0c43, black)',
        borderRadius: '25px',
        paddingLeft: '20px',
        paddingRight: '20px',
    }

    const secondaryTheme = {
        background: 'indigo',
    }

    return (
        <Card
            sx={{
                minWidth: { xs: 300, md: '100%' },
                minHeight: { xs: 110 },
                alignContent: 'center',
                bgcolor: 'transparent',
                color: '#fff',
                ...{ ...(styled && whitStyle), ...(secondary && secondaryTheme), ...sx, },
            }}
        >
            {children}
        </Card>
    );
}

export const PTCardContent = ({ children, sx }: PTCardProps) => {
    return (
        <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', ...sx }}>
            {children}
        </CardContent>
    );
}