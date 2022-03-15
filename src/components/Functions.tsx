import React, {FC} from 'react'
import Button, {ButtonClickHandler} from './Button'

type Props= {
  onContentClear: ButtonClickHandler,
  onDelete: ButtonClickHandler,
  showHistory: ButtonClickHandler
}
const Functions: FC<Props> = ({ onContentClear, onDelete, showHistory }) => (
  <section className="functions">
    <Button type='button-long-text' text="Clear" clickHandler={onContentClear} />
    <Button type='button-long-text' text="→" clickHandler={onDelete} />
    <Button type='button-long-text' text="History" clickHandler={showHistory} />
  </section>
)


export default Functions