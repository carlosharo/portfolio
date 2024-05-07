import { Grid } from "@mui/material"
import { ReactNode } from "react"

interface PTBoxProps {
    children: ReactNode;
}

export const PTGrid = ({ children }: PTBoxProps) => {
    return <Grid
        container
        columns={{ xs: 6, md: 12 }}
        rowGap={{ xs: 4 }}
        py={{ xs: 2, md: 4, lg: 6 }}
        direction={{ xs: 'column', md: 'row' }}
        alignItems={{ xs: 'center' }}
    >
        <Grid md={2} />
        {children}
        <Grid md={2} />
    </Grid>
}