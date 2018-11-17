import * as Typography from 'typography'
import deYoungTheme from 'typography-theme-de-young'
import styleVars from '../styles/styleVars'

deYoungTheme.headerColor = styleVars.colors.headerColor
deYoungTheme.bodyColor = styleVars.colors.bodyColor
deYoungTheme.overrideThemeStyles = () => ({
  a: {
    color: styleVars.colors.linkColor,
  },
})

const typography = new Typography(deYoungTheme)

export default typography

export const rhythm = typography.rhythm
export const scale = typography.scale
