'use client'
import "./globals.css";
import { FooterLayout, HeaderLayout } from "./_layout";
import { CustomTheme } from "./theme";
import { Container, useTheme } from "@mui/material";
import { ContextProvider } from "./_context/ContextProvider";

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
          <ContextProvider>
          <HeaderLayout />
          <Container sx={{
            minHeight: '100vh',
          }}>
            {children}
          </Container>
          <FooterLayout />
          </ContextProvider>
        </CustomTheme>
      </body>
    </html>
  );
}
