import Image from 'next/image';
import { Box, Typography } from '@mui/material';

interface ImageBaseProps {
    src: string;
    alt: string;
    text?: string | null;
}

export const PTImage = (props: ImageBaseProps) => {
    const { src, alt, text } = props;
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'row',
                gap: 4,
            }}
        >
            <Image
                src={src}
                alt={alt}
                width={0}
                height={0}
                style={{ width: '100%', height: '100%', borderRadius: '50%', backgroundColor: 'none' }}
            />
            {text && <Typography variant='h3'>{text}</Typography>}
        </Box>
    )
}