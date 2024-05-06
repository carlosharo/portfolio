import { Grid } from "@mui/material"
import { ReactNode } from "react"

interface PTBoxProps {
    children: ReactNode;
}

export const PTGrid = ({ children }: PTBoxProps) => {
    return <Grid
        container
        columns={{ xs: 4, sm: 8, md: 12 }}
        rowGap={{xs: 4}}
        direction={{ xs: 'column-reverse', md: 'row' }}
        alignItems={{xs: 'center', md: 'flex-start'}}
    >
        {children}
    </Grid>
}