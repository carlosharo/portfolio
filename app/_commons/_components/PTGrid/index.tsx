import { Grid, SxProps, Theme } from "@mui/material"
import { ReactNode } from "react"

interface PTBoxProps {
    children: ReactNode;
    styled?: boolean;
}

export const PTGrid = ({ children, styled = false }: PTBoxProps) => {
    const withStyle = {
        background: 'linear-gradient(to right bottom, #0e0c43, black)',
        borderRadius: '25px',
        paddingLeft: '20px',
        paddingRight: '20px',
    }
    return <Grid
        container
        rowGap={{ xs: 4 }}
        py={{ xs: 2, md: 4, lg: 6 }}
        direction={{ xs: 'column', md: 'row' }}
        alignItems='center'
        justifyContent='center'
        sx = { styled ? withStyle : {} }
    >
        {children}
    </Grid>
}