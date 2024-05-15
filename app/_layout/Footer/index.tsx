import { logos } from '../../_commons/_mocks';
import { PTPaper } from '../../_components/PTPaper';
import { PTBox, PTContainer, PTStack } from '@/app/_components';

export const FooterLayout = () => {
    return <PTBox sx={{ bgcolor: 'background.paper'}}>
        <PTContainer>
            <PTStack >
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
        </PTContainer>
    </PTBox>
}