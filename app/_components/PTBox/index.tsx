'use client'
import { Box, BoxProps, styled } from "@mui/material";
import { ReactNode } from "react";

interface PTBoxProps extends BoxProps {
    children: ReactNode;
}

export const PTBox = styled(({ children, ...props }: PTBoxProps) => {
    return <Box
        {...props}
    >
        {children}
    </Box>;
})(({ theme }) => ({
    backgroundColor: theme.palette.background.default
}));