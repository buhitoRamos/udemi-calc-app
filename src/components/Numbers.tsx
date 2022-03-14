import React, {FC} from 'react'
import Button, {ButtonClickHandler} from './Button'

const numbers = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0, '.']

const renderButtons = (onClickNumber: ButtonClickHandler) => {
  return (
    numbers.map(number =>
      <Button key={number}
        text={number.toString()}
        clickHandler={onClickNumber}
      />
    )
  )
}
type Prop = {
  onClickNumber: ButtonClickHandler
}
const Numbers: FC<Prop> = ({ onClickNumber }) => (
  <section className="numbers">
    {
      renderButtons(onClickNumber)
    }
  </section>
)

export default Numbers