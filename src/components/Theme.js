import { injectGlobal } from 'styled-components';

export default {
    colorPrimary: '#084701',
    colorSecondary: '#021300',
}

export const inject = injectGlobal`
    body, html, div, section, aside, span, p, a, article, details, menu,
    nav, ol, ul, li, object {
        margin: 0;
        padding: 0;
        font-size: 22px;
        font-family: 'Gloria Hallelujah', 'cursive';
    }
`