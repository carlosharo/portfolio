import { logos } from '../../_commons/_mocks';
import { PTPaper } from '../../_components/PTPaper';
import { PTContainer, PTStack } from '@/app/_components';

export const FooterLayout = () => {
    return (
        <PTContainer>
            <PTStack>
                {logos.map((logo, i) => <PTPaper key={i} >{logo}</PTPaper>)}
            </PTStack>
        </PTContainer>);
}