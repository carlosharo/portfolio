import { useContext } from 'react';
import { PTPaper } from '../../_components/PTPaper';
import { PTStack } from '@/app/_components';
import { PortfolioContext } from '@/app/_context/ContextProvider';
import { Box, Typography } from '@mui/material';

export const FooterLayout = () => {
    const portfolio = useContext(PortfolioContext);
    const { layout: { footer: { title, logos } } } = portfolio;
    return <PTStack>
        <Box alignContent={'center'}><Typography>{title}</Typography></Box>
                {logos.map((logo, i) => <PTPaper
                    sx={{
                        height: { xs: 50, md: 75 },
                        width: { xs: 50, md: 75 },
                    }}
                    key={i}
                >
                    {logo}
                </PTPaper>
                )}
            </PTStack>
}