import { Container, Grid } from "@mui/material";
import { PTGridContainer } from "../_components";

export default function ToolsLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <Container sx={{ minHeight: '100vh' }}>
            <PTGridContainer>
                <Grid md={6}>{children}</Grid>
            </PTGridContainer>
        </Container>
    );
}