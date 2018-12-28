import css from '@emotion/css'
import { rhythm } from '../utils/typography'

export default css`
  ul.references {
    margin: ${rhythm(1)} 0;
    padding: 0;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
  ul.references li {
    list-style-type: none;
    margin: ${rhythm(1)};
    padding: 0;
  }
`
