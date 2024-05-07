import { Card, SxProps, Theme } from "@mui/material";
import { ReactNode } from "react";

interface PTCard {
    children: ReactNode;
    sx?: SxProps<Theme> | undefined;
}

export const PTCard = ({ children, sx }: PTCard) => {
    return (
        <Card
            sx={{ bgcolor: '#000', color: '#fff', ...sx }}
        >
            {children}
        </Card>
    );
}