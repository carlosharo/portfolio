'use client'
import "./globals.css";
import { FooterLayout, HeaderLayout } from "./_layout";
import { CustomTheme } from "./theme";
import { Container, useTheme } from "@mui/material";
import { PTGridContainer } from "./_components";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const theme = useTheme();
  return (
    <html lang="en">
       <body>
            <CustomTheme>
                <HeaderLayout />
                <Container>
                    <PTGridContainer>
                        {children}
                    </PTGridContainer>
                </Container>
                <FooterLayout />
            </CustomTheme>
        </body>
    </html>
  );
}
