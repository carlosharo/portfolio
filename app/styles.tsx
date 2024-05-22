import { solarizedlight } from 'react-syntax-highlighter/dist/esm/styles/prism';

export const codeStyle = {
    ...solarizedlight,
      'pre[class*="language-"]': {
        ...solarizedlight['pre[class*="language-"]'],
        backgroundColor: 'none',
      },
    }