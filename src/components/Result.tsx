import React, { FC } from 'react'

type Prop = {
  value: string,
  classType: string,
  isHistory?: boolean
}
const Result: FC<Prop> = ({ value, classType, isHistory }) => {

 let newValue = value;
 let matOp = ""

  if (isHistory) {
    matOp = newValue[value.length - 1];
    if (matOp === '-' || matOp === '+' || matOp === '*' || matOp === '/') {
      newValue = newValue.substring(0, newValue.length - 1);
    } else {
      matOp = "";
    }
  } else {
    matOp = newValue[0]
    if(matOp === '-') {
      newValue = newValue.substring(1, newValue.length)
    } else {
      matOp=''
    }
  }

  return (
    <div className={classType}>
     <span>{newValue}</span> 
     <span>{matOp}</span>
  </div>
  )
}

Result.defaultProps = {
  value: '0',
}
export default Result