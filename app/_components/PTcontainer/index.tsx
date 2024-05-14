'use client'
import { Container, ContainerProps, styled } from "@mui/material";
import { ReactNode } from "react";

interface PTContainerProps extends ContainerProps {
    children: ReactNode;
}

export const PTContainer = styled(({ children, ...props }: PTContainerProps) => {
    return <Container
        maxWidth='xl'
        sx={{
            padding: { xs: 0 }
        }}
        {...props}
    >
        {children}
    </Container>
})(({ theme }) => ({
    backgroundColor: theme.palette.background.default
}));