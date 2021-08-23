import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'

const Functions = ({ onContentClear, onDelete, showHistory }) => (
  <section className="functions">
    <Button type='button-long-text' text="Clear" clickHandler={onContentClear} />
    <Button type='button-long-text' text="→" clickHandler={onDelete} />
    <Button type='button-long-text' text="History" clickHandler={showHistory} />
  </section>
)
Functions.propTypes = {
  onContentClear: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired
}

export default Functions