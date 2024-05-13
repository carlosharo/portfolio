'use client'
import { theme } from "@/app/theme";
import { ThemeProvider } from "@mui/material";
import { FooterLayout, HeaderLayout } from "..";
import { PTContainer, PTGridContainer } from "@/app/_components/_commons";
import { ReactNode } from "react";

interface BodyProps {
    children: ReactNode;
}

export const Body = ({children}: BodyProps) => {
    return (
        <body>
            <ThemeProvider theme={theme}>
                <HeaderLayout />
                <PTContainer>
                    <PTGridContainer>
                        {children}
                    </PTGridContainer>
                </PTContainer>
                <FooterLayout />
            </ThemeProvider>
        </body>
    );
}