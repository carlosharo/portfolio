import { Grid } from "@mui/material";
import { PTGrid } from "../_commons/_components";

export default function ToolsLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <PTGrid>
            <Grid md={6}>{children}</Grid>
        </PTGrid>
    );
}