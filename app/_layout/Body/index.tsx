'use client'
import { theme } from "@/app/theme";
import { CssBaseline, GlobalStyles, ThemeProvider } from "@mui/material";
import { FooterLayout, HeaderLayout } from "..";
import { PTContainer, PTGridContainer } from "@/app/_components/_commons";
import { ReactNode } from "react";
import { PTBox } from "@/app/_components";

interface BodyProps {
    children: ReactNode;
}

export const Body = ({ children }: BodyProps) => {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles
                styles={{
                    body: { backgroundColor: "black" },
                }}
            />
            <PTBox>
                <HeaderLayout />
                <PTContainer>
                    <PTGridContainer>
                        {children}
                    </PTGridContainer>
                </PTContainer>
                <FooterLayout />
            </PTBox>
        </ThemeProvider>
    );
}