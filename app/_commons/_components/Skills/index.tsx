import { CardHeader } from "@mui/material";
import { PTCard, PTGrid } from "..";
import { portfolio } from '../../_mocks/portfolio';
import { PTSkills } from "../PTSkills";

export const Skills = () => {
    return (
        <PTCard styled>
            <CardHeader
                title='Main Skills'
            >
            </CardHeader>
            <PTGrid>
                {portfolio.mainSkills.map((skill, i) => <PTSkills key={i} {...skill}/>)}
            </PTGrid>

        </PTCard>
    );
}