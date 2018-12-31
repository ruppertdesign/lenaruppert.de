import css from '@emotion/css'
import { rhythm } from '../utils/typography'
import styleVars from './styleVars'

export default css`
  ul.references {
    margin: ${rhythm(1)} 0;
    padding: 0;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  ul.references li {
    list-style-type: none;
    margin-bottom: ${rhythm(2)};
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 15rem;
    height: 15rem;
    // box-shadow: 1px 7px 6px rgba(50,50,50,0.1);
    box-shadow: 1px 6px 5px ${styleVars.colors.grayLightest};
  }
`
