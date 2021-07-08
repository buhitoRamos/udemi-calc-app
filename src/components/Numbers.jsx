import React from 'react'
import PropsTypes from 'prop-types'
import Button from './Button'

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

const renderButtons = onClickNumbers => {
  return (
    numbers.map(number =>
      <Button key={number.toString()}
        text={number.toString()}
        clickHandler={onClickNumbers}
      />
    )
  )
}

const Numbers = ({ onClickNumbers }) => (
  <section className="numbers">
    {
      renderButtons(onClickNumbers)
    }
  </section>
)
Numbers.PropsTypes = {
  onClickNumbers: PropsTypes.func.isRequired
}
export default Numbers