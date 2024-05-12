import { Grid } from "@mui/material"
import { ReactNode } from "react"

interface PTBoxProps {
    children: ReactNode;
}

export const PTGridContainer = ({ children }: PTBoxProps) => {
   
    return <Grid
        container
        rowGap={4}
        py={{ xs: 2, md: 4, lg: 6 }}
        px={{ xs: 2, md: 4, lg: 6 }}
        direction={{ xs: 'column', md: 'row' }}
        justifyContent='center'
    >
        {children}
    </Grid>
}