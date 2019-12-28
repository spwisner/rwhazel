import React from 'react'
import PropTypes from 'prop-types'
import { InterviewsPageTemplate } from '../../templates/interviews-page'

const InterviewsPagePreview = ({ entry, widgetFor }) => (
  <InterviewsPageTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
)

InterviewsPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default InterviewsPagePreview
