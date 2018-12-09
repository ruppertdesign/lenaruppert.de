import css from '@emotion/css'
import styleVars from './styleVars'

export default css`
  body {
    background-color: ${styleVars.colors.backgroundColor};
  }
  ul {
    margin: 0;
    list-style-type: none;
  }
  ul > li {
    text-indent: -5px;
  }
  ul > li:before {
    content: '–';
    text-indent: -5px;
  }
`
