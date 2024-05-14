'use client'
import { theme } from "@/app/theme";
import { Stack, StackProps, styled } from "@mui/material";
import { ReactNode } from "react";

interface PTContainerProps extends StackProps {
    children: ReactNode;
}

export const PTStack = styled(({ children, ...props }: PTContainerProps) => {
    return <Stack
        direction='row'
        justifyContent='center'
        spacing={{ xs: 1, md: 4 }}
        padding={theme.spacing(1)}
        {...props}
    >
        {children}
    </Stack>;
})(({ theme }) => ({
    backgroundColor: theme.palette.background.paper
}));