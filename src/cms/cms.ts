import CMS from 'netlify-cms-app'
import PagePreview from './preview-templates/PagePreview'
import SamplePreview from './preview-templates/SamplePreview'
import typography from '../utils/typography'
import './cms.css'

CMS.init()

// HACK: didn't find a good way to combine typography, our whole layout
// and netlify cms preview. We're including the fonts via cms.css and
// registering the base typography styles here.
CMS.registerPreviewStyle(typography.toString(), { raw: true })

const defaultPages = [
  '404',
  'agb',
  'datenschutz',
  'danke',
  'impressum',
  'kontakt',
  'referenzen',
  'start',
  'textproben',
  'ueber-mich',
]
// @ts-ignore not sure if this is a bug
defaultPages.forEach((page) => CMS.registerPreviewTemplate(page, PagePreview))
// @ts-ignore not sure if this is a bug
CMS.registerPreviewTemplate('samples', SamplePreview)
