import { Grid } from "@mui/material";
import { PTGridContainer } from "../_components/_commons";

export default function ToolsLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <PTGridContainer>
            <Grid md={6}>{children}</Grid>
        </PTGridContainer>
    );
}