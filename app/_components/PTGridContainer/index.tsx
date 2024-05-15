'use client'
import { Grid, GridProps, styled } from "@mui/material"
import { ReactNode } from "react"

interface PTGridContainerProps extends GridProps{
    children: ReactNode;
}

export const PTGridContainer = styled(({ children, ...props }: PTGridContainerProps) => {
    return <Grid
        container
        rowGap={4}
        py={{ xs: 2, md: 4, lg: 6 }}
        px={{ xs: 2, md: 4, lg: 6 }}
        direction={{ xs: 'column', md: 'row' }}
        justifyContent='center'
        {...props}
    >
        {children}
    </Grid>
})(({ theme }) => ({

}));