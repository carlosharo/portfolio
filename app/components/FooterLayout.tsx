import { Container } from '@mui/material';
import { logos } from '../_commons/_mocks/footer';
import { ImageBase } from '../_commons/_components/ImageBase';

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
                backgroundColor: '#000',
                color: '#fff',
            }}
        >
            {logos.map((logo, i) => <ImageBase key={i} {...logo} />)}
        </Container>);
}