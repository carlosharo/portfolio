'use client'

import { Grid } from "@mui/material";
import { PTCardDetails, PTGridContainer } from "../_components";
import { useContext } from "react";
import { PortfolioContext } from "../_context/ContextProvider";

export default function Algorithms() {
    const portfolio = useContext(PortfolioContext);

    return (
        <PTGridContainer sx={{ minHeight: '100vh', }}>
            <Grid item padding={2} xs={2}>
                {/** TODO: Menu section goes here */}
            </Grid>
            <Grid item xs={10}>
                {portfolio.algorithms.map((algorithm, i) => <PTCardDetails key={i} {...algorithm} />)}
            </Grid>
        </PTGridContainer>
    );
}