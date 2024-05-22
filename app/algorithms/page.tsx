'use client'

import { Grid } from "@mui/material";
import { PTCardDetails, PTGridContainer } from "../_components";
import { useContext } from "react";
import { PortfolioContext } from "../_context/ContextProvider";

export default function Algorithms() {
    const portfolio = useContext(PortfolioContext);
    return (
        <PTGridContainer sx={{ minHeight: '100vh' }}>
            <Grid item padding={2} xs={2}>
                {/** Menu section goes here */}
            </Grid>
            <Grid item xs={10}>
                <PTCardDetails />
            </Grid>
        </PTGridContainer>
    );
}