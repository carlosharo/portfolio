'use client'
import { theme } from "@/app/theme";
import { GlobalStyles, ThemeProvider } from "@mui/material";
import { FooterLayout, HeaderLayout } from "..";
import { PTContainer } from "@/app/_components/_commons";
import { ReactNode } from "react";
import { PTGridContainer } from "@/app/_components";

interface BodyProps {
    children: ReactNode;
}

export const Body = ({ children }: BodyProps) => {
    return (
        <body>
            <ThemeProvider theme={theme}>
                <GlobalStyles
                    styles={{
                        body: { backgroundColor: "black" },
                    }}
                />
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