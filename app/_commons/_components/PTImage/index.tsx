import Image from 'next/image';
import { Box, SxProps, Theme, Typography } from '@mui/material';
import { CSSProperties } from 'react';

interface ImageBaseProps {
    src: string;
    alt: string;
    text?: string | null;
    style?: CSSProperties | undefined;
    sx?: SxProps<Theme> | undefined;
}

export const PTImage = ({ src, alt, text, style, sx }: ImageBaseProps) => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'row',
                gap: 4,
                ...sx
            }}
        >
            <Image
                src={src}
                alt={alt}
                width={0}
                height={0}
                style={{ width: '100%', height: '100%', backgroundColor: 'none', ...style }}
            />
            {text && <Typography variant='h3'>{text}</Typography>}
        </Box>
    )
}