import { Container } from '@mui/material';
import { logos } from '../_mocks/footer';
import { ImageBase } from './ImageBase';

export const FooterLayout = () => {
    return (
        <Container
            sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                gap: { xs: 8 },
                py: { xs: 2, sm: 4 },
                textAlign: { sm: 'center', md: 'left' },
                maxWidth: { sm: '100%' },
            }}
        >
            {logos.map((logo, i) => <ImageBase key={i} {...logo} />)}
        </Container>);
}