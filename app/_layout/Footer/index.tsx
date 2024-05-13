'use client'
import { theme } from '@/app/theme';
import { logos } from '../../_commons/_mocks';
import { PTPaper } from '../../_components/PTPaper';
import { PTContainer, PTStack } from '@/app/_components';

export const FooterLayout = () => {
    return (
        <PTContainer>
            <PTStack sx={{borderTop: `1px solid ${theme.palette.primary.main}`}}>
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
        </PTContainer>);
}