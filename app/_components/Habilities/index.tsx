import { PTCard, PTCardContent } from "..";
import { Stack, Typography, useTheme, alpha, Container } from "@mui/material";
import { HabilityProps } from "@/app/_commons/_types";
interface HabilitiesProps {
    habilities: HabilityProps[];
}

export const Habilities = ({ habilities }: HabilitiesProps) => {
    const theme = useTheme();
    if (habilities?.length === 0) return null;
    return (
        <Container sx={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '10px',
            my: 5
          }}>{
        habilities?.map((hability: HabilityProps, i: number) => (
            <PTCard key={i} sx={{
                width: { xs: '100%', md: '400px' },
                    background: 'unset', 
                    minHeight: { xs: '100%', md: '160px' },
                    '&:hover': {
                        background: alpha(theme.palette.secondary.dark, 0.25),
                        border: `1px solid ${alpha(theme.palette.secondary.light, 0.25)}`,
                    },
                }}>
                <PTCardContent >
                    <Typography variant='subtitle1' textAlign='center'>{hability.description}</Typography>
                    <Stack direction='row' justifyContent='center' spacing={1}>
                        {hability.values.map((value, i) => {
                            return (
                                <PTCard key={i} sx={{ 
                                    background: alpha(theme.palette.secondary.dark, 0.5),
                                    border: `1px solid ${theme.palette.secondary.light}`,
                                    padding: '5px',
                                    minHeight: {xs: '100%'}
                                }}>
                                    <Typography variant='subtitle2'>{value}</Typography>
                                </PTCard>
                            );
                        })}
                    </Stack>
                </PTCardContent>
            </PTCard>
        ))}
        </Container>
    );
};

export default Habilities;