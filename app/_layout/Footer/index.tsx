import { Container } from '@mui/material';
import { logos } from '../../_commons/_mocks';
import { PTCard, PTGridContainer } from '@/app/_components/_commons';

export const FooterLayout = () => {
    return (
        <Container
            sx={{
                display: 'flex',
                flexWrap: 'wrap',
                flexDirection: 'row',
                justifyContent: 'center',
                gap: { xs: 8 },
                py: { xs: 2, sm: 4 },
                textAlign: { sm: 'center', md: 'left' },
                maxWidth: { sm: '100%' },
                backgroundColor: '#000',
                color: '#fff',
            }}
        >
            <PTGridContainer>
                {logos.map((logo, i) => <PTCard key={i}>{logo}</PTCard>)}
            </PTGridContainer>
        </Container>);
}