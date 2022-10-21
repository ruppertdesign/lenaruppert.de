import * as Typography from 'typography'
import deYoungTheme from 'typography-theme-de-young'
import styleVars from '../styles/styleVars'

deYoungTheme.headerColor = styleVars.colors.headerColor
deYoungTheme.bodyColor = styleVars.colors.bodyColor

// FIXME fhi enable google fonts
deYoungTheme.googleFonts = []
deYoungTheme.fonts = {
  body: 'Helvetica, Arial, sans-serif',
  header: 'Helvetica, Arial, sans-serif',
}

deYoungTheme.overrideThemeStyles = () => ({
  a: {
    color: 'currentColor',
    boxShadow: '0 1px 0 0 currentColor',
    transition: 'all 0.3s ease-in-out 0s',
  },
  'a:hover, a:active': {
    color: styleVars.colors.accentColor,
  },
})

const typography = new Typography(deYoungTheme)

export default typography

export const rhythm = typography.rhythm
export const scale = typography.scale
