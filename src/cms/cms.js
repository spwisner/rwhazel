import CMS from 'netlify-cms-app'
import uploadcare from 'netlify-cms-media-library-uploadcare'
import cloudinary from 'netlify-cms-media-library-cloudinary'

import InterviewsPagePreview from './preview-templates/InterviewsPagePreview'
import ScriptsPagePreview from './preview-templates/ScriptsPagePreview'
import ResumePagePreview from './preview-templates/ResumePagePreview'
import BlogPostPreview from './preview-templates/BlogPostPreview'
import ProductPagePreview from './preview-templates/ProductPagePreview'
import IndexPagePreview from './preview-templates/IndexPagePreview'

CMS.registerMediaLibrary(uploadcare)
CMS.registerMediaLibrary(cloudinary)

CMS.registerPreviewTemplate('index', IndexPagePreview)
CMS.registerPreviewTemplate('scripts', ScriptsPagePreview)
CMS.registerPreviewTemplate('resume', ResumePagePreview)
CMS.registerPreviewTemplate('interviews', InterviewsPagePreview)
CMS.registerPreviewTemplate('products', ProductPagePreview)
CMS.registerPreviewTemplate('blog', BlogPostPreview)
