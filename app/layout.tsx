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
          <Container maxWidth='lg' sx={{ padding: { xs: '15px', md: '30px' } }}>
            {children}
          </Container>
          <FooterLayout />
        </CustomTheme>
      </body>
    </html>
  );
}
