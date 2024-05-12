import { Container, Stack, Typography } from '@mui/material';
import { logos } from '../../_commons/_mocks';
import { Item } from '../../_components/Item';

export const FooterLayout = () => {
    return (
        <Container
            maxWidth='xl'
            sx={{
                padding: { xs: 0 }
            }}
        >
            <Stack
                direction='row'
                justifyContent='center'
                spacing={{ xs: 1, md: 4 }}
            >
                {logos.map((logo, i) => <Item key={i} >{logo}</Item>)}
            </Stack>
        </Container>);
}