'use client'
import { PTCardContent, PTImage } from "..";
import { Box, Grid, IconButton, Link, Stack, Typography } from "@mui/material";
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { AlgorithmsProps } from "@/app/_commons/_types";
import { useState } from "react";
import { PTCodeFormat } from "../PTCodeFormat";

export const PTCardDetails: React.FC<AlgorithmsProps> = ({ ...algorithm }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const { title, subtitle, href, description, example, media } = algorithm;

    const handleExpandClick = () => {
        setIsExpanded(!isExpanded);
    }

    return (
        <Box bgcolor='background.paper' sx={{ padding: { md: '0 20px' }, margin: '10px 0', minHeight: '50px' }} >
            <Stack direction='row' justifyContent='space-between' alignItems='center'>
                <Link href={href} underline='none' color='secondary'>
                    <Typography variant='subtitle1'>{title}</Typography>
                </Link>
                <IconButton onClick={handleExpandClick}>
                    {isExpanded ? <ExpandLess /> : <ExpandMore />}
                </IconButton>
            </Stack>
            {isExpanded && (
                <PTCardContent sx={{ padding: '0' }}>
                    <Box bgcolor="background.default" sx={{ minWidth: '100%', padding: '10px' }} >
                        <Typography variant='subtitle2' sx={{ whiteSpace: 'preserve-breaks' }}>{subtitle}</Typography>
                    </Box>
                    <Box bgcolor="primary.dark" sx={{ minWidth: '100%', padding: '10px' }} >
                        <Typography variant='subtitle2' sx={{ whiteSpace: 'preserve-breaks' }}>{description}</Typography>
                    </Box>
                    <Box bgcolor="background.default" sx={{ minWidth: '100%', padding: '10px', marginTop: '10px' }} >
                        <Typography variant='subtitle2'>{example.title}</Typography>
                    </Box>
                    <Box bgcolor="primary.dark" sx={{ minWidth: '100%', padding: '10px' }} >
                        <Typography variant='body2' sx={{ whiteSpace: 'preserve-breaks' }}>{example.description}</Typography>
                    </Box>
                    <Grid container bgcolor='background.default' justifyContent='center'>
                        <Grid item xs={12} md={6} sx={{ whiteSpace: 'pre-wrap' }}>
                            <PTCodeFormat code={example.code.toString()} />
                        </Grid>
                        <Grid item xs={12} md={6} bgcolor='background.paper'>
                            <PTImage src={media.href} alt={media.alt} />
                        </Grid>
                    </Grid>
                </PTCardContent>
            )}
        </Box>
    )
}