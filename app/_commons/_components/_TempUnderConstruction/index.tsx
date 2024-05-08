import { Grid } from "@mui/material";
import { PTCard, PTGrid, PTImage } from "..";

export const UnderConstrucction = () => {
    return (
        <PTGrid>
            <Grid md={8}>
                <PTCard>
                    <PTImage src='./mac_under_construction.jpeg' alt='avatar' />
                </PTCard>
            </Grid>
        </PTGrid>
    );
}