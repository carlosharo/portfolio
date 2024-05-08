import { Grid } from "@mui/material"
import { ReactNode } from "react"

interface PTBoxProps {
    children: ReactNode;
}

export const PTGrid = ({ children }: PTBoxProps) => {
    return <Grid
        container
        rowGap={{ xs: 4 }}
        py={{ xs: 2, md: 4, lg: 6 }}
        direction={{ xs: 'column', md: 'row' }}
        alignItems={{ xs: 'center' }}
    >
        {children}
    </Grid>
}