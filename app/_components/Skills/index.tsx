import { Grid, Typography } from "@mui/material";
import { portfolio } from "../../_commons/_mocks";
import { PTCardContainer, PTGridContainer, PTSkill } from "../_commons";

export const Skills = () => {
    return (
        <PTCardContainer styled>
            <PTGridContainer>
                <Grid xs={12}>
                    <Typography variant='h4'>Main Skills</Typography>
                </Grid>
                    {portfolio.mainSkills.map((skill, i) => <PTSkill key={i} {...skill}/> )}
            </PTGridContainer>
        </PTCardContainer>
    );
}