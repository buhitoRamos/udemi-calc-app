import React from 'react'
import PropTypes from 'prop-types'

const Result = ({ value, classType, isHistory }) => {

 let newValue = value;
 let matOp = ""

  if (isHistory) {
    matOp = newValue[value.length - 1];
    if (matOp === '-' || matOp === '+' || matOp === '*' || matOp === '/') {
      newValue = newValue.substring(0, newValue.length - 1);
    } else {
      matOp = "";
    }
  }

  return (
    <div className={classType}>
     <span>{newValue}</span> 
     <span>{matOp}</span>
  </div>
  )
}

Result.propTypes = {
  value: PropTypes.string.isRequired,
  classType: PropTypes.string.isRequired,
}

Result.defaultProps = {
  value: '0',
}
export default Result