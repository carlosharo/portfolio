'use client'
import "./globals.css";
import { FooterLayout, HeaderLayout } from "./_layout";
import { CustomTheme } from "./theme";
import { useTheme } from "@mui/material";
import { ContextProvider } from "./_context/ContextProvider";
import { SpeedInsights } from "@vercel/speed-insights/next";

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
            {children}
            <SpeedInsights />
          <FooterLayout />
          </ContextProvider>
        </CustomTheme>
      </body>
    </html>
  );
}
