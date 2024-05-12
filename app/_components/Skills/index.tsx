import { Grid, Stack, Typography } from "@mui/material";
import { portfolio } from "../../_commons/_mocks";
import { PTCardContainer, PTGridContainer, PTSkill } from "../_commons";

export const Skills = () => {
    return (
        <PTCardContainer styled>
            <PTGridContainer>
                <Grid xs={12}>
                    <Typography variant='h4'>Main Skills</Typography>
                </Grid>
                <Stack
                    direction='row'
                    justifyContent='center'
                    spacing={{ xs: 1, md: 4 }}
                >
                    {portfolio.mainSkills.map((skill, i) => <PTSkill key={i} {...skill} />)}
                </Stack>
            </PTGridContainer>
        </PTCardContainer>
    );
}