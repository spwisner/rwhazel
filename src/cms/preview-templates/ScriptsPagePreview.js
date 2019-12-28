import React from 'react'
import PropTypes from 'prop-types'
import { ScriptsPageTemplate } from '../../templates/scripts-page'

const ScriptsPagePreview = ({ entry, widgetFor }) => (
  <ScriptsPageTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
)

ScriptsPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default ScriptsPagePreview
