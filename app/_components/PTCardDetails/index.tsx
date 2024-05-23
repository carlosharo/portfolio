'use client'
import { PTCard, PTCardContent, PTImage } from "..";
import { Box, CardMedia, Grid, IconButton, Link, Stack, Typography } from "@mui/material";
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { AlgorithmsProps } from "@/app/_commons/_types";
import { useState } from "react";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { qtcreatorDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

export const PTCardDetails: React.FC<AlgorithmsProps> = ({ ...algorithm }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const { title, href, description, example, media } = algorithm;

    const handleExpandClick = () => {
        setIsExpanded(!isExpanded);
    }

    return (
        <PTCard style={{ padding: '20px' }}>
            <Stack direction='row' justifyContent='space-between'>
                <Link href={href} underline='none' color='secondary'>
                    <Typography variant='subtitle1'>{title}</Typography>
                </Link>
                <IconButton onClick={handleExpandClick}>
                    {isExpanded ? <ExpandLess /> : <ExpandMore />}
                </IconButton>
            </Stack>
            {isExpanded && (
                <PTCardContent >
                    <Box bgcolor="background.default" sx={{ minWidth: '100%', padding: '10px', marginTop: '10px' }} >
                        <Typography variant='subtitle2' sx={{ whiteSpace: 'preserve-breaks' }}>{description}</Typography>
                    </Box>
                    <Box bgcolor="background.default" sx={{ minWidth: '100%', padding: '10px', marginTop: '10px' }} >
                        <Typography variant='subtitle2'>{example.title}</Typography>
                    </Box>
                    <Box bgcolor="primary.dark" sx={{ minWidth: '100%', padding: '10px' }} >
                        <Typography variant='body2' sx={{ whiteSpace: 'preserve-breaks' }}>{example.description}</Typography>
                    </Box>
                    <Grid container bgcolor='background.default'>
                        <Grid item xs={12} md={6} padding={2}>
                            <Typography variant='caption' sx={{ fontSize: { xs: '9px', sm: '10px', md: '12px' } }}>
                                <SyntaxHighlighter
                                    language="javascript"
                                    showLineNumbers
                                    style={qtcreatorDark}
                                    codeTagProps={{ style: { color: '#bde2ff' } }}
                                >
                                    {`${example.code}`}
                                </SyntaxHighlighter>
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <CardMedia>
                                <PTImage src={media.href} alt={media.alt} />
                            </CardMedia>
                        </Grid>
                    </Grid>
                </PTCardContent>
            )}
        </PTCard>
    )
}