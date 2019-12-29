import CMS from 'netlify-cms-app'
import uploadcare from 'netlify-cms-media-library-uploadcare'
import cloudinary from 'netlify-cms-media-library-cloudinary'

import GenericPagePreview from './preview-templates/GenericPagePreview'
import BlogPostPreview from './preview-templates/BlogPostPreview'
import IndexPagePreview from './preview-templates/IndexPagePreview'

CMS.registerMediaLibrary(uploadcare)
CMS.registerMediaLibrary(cloudinary)

CMS.registerPreviewTemplate('index', IndexPagePreview)
CMS.registerPreviewTemplate('scripts', GenericPagePreview)
CMS.registerPreviewTemplate('resume', GenericPagePreview)
CMS.registerPreviewTemplate('interviews', GenericPagePreview)
CMS.registerPreviewTemplate('blog', BlogPostPreview)
