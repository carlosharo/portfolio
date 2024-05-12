import { Grid } from "@mui/material";
import { PTCard, PTGridContainer, PTImage } from "..";

export const UnderConstrucction = () => {
    return (
        <PTGridContainer>
            <Grid md={8}>
                <PTCard>
                    <PTImage src='./mac_under_construction.jpeg' alt='avatar' />
                </PTCard>
            </Grid>
        </PTGridContainer>
    );
}