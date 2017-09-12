import { injectGlobal } from 'styled-components';

export default {
    colorPrimary: '#084701',
    colorSecondary: '#021300',
    floatLeft: ({width}) => (`
        float: left;
        width: ${width}%;
    `),
    floatRight: ({width}) => (`
        float: right;
        width: ${width}%;
    `),
}

export const inject = injectGlobal`
    body, html, div, section, aside, span, p, a, article, details, menu,
    nav, ol, ul, li, object, input, dl, dt, dd {
        margin: 0;
        padding: 0;
        font-size: 22px;
        font-family: 'Gloria Hallelujah', 'cursive';
    }
    input:focus{
        outline: none;
    }
    button:focus{
        outline: none;
    }
`