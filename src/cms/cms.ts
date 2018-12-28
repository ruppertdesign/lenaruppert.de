import CMS from 'netlify-cms'
import PagePreview from './preview-templates/PagePreview'
import SamplePreview from './preview-templates/SamplePreview'
import typography from '../utils/typography'
import './cms.css'

// HACK: didn't find a good way to combine typography, our whole layout
// and netlify cms preview. We're including the fonts via cms.css and
// registering the base typography styles here.
CMS.registerPreviewStyle(typography.toString(), { raw: true })

const defaultPages = [
  '404',
  'agb',
  'datenschutz',
  'impressum',
  'kontakt',
  'referenzen',
  'start',
  'textproben',
  'ueber-mich',
]
defaultPages.forEach(page => CMS.registerPreviewTemplate(page, PagePreview))

CMS.registerPreviewTemplate('samples', SamplePreview)
