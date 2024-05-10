import { Card, CardContent, SxProps, Theme } from "@mui/material";
import { ReactNode } from "react";

interface PTCardProps {
    children: ReactNode;
    sx?: SxProps<Theme> | undefined;
}

export const PTCard = ({ children, sx }: PTCardProps) => {
    return (
        <Card
            sx={{ 
                minWidth: { xs: 300, md: '100%' }, 
                bgcolor: 'transparent', 
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
        <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', ...sx}}>
        {children}
    </CardContent>
    );
}