import React from 'react'
import { money } from '../../utils/helpers'

type IProps = {
  name?: string
  defaultValue?: any
  min?: number
  max?: number
  step?: number
  symbol?: string
  disabled?: boolean
  onChange?: (value: number) => void
}

const NumberInput = React.forwardRef<HTMLInputElement, IProps>(({
  defaultValue = 0,
  name,
  min,
  max,
  step = 1,
  symbol = '',
  disabled,
  onChange
}, ref) => {
  const format = (value: any) => {
    const number = money(value)
    return symbol ? `${symbol} ${number}` : number
  }
  
  const increaseIsDisabled = () => !!(max && defaultValue >= max)
  const decreaseIsDisabled = () => !!(min && defaultValue <= min)
  const handleClick = (type: string) => {
    if (! onChange || disabled) return
    if (type === 'increase') {
      if (increaseIsDisabled()) return
      onChange(defaultValue + step)
    } else {
      if (decreaseIsDisabled()) return
      onChange(defaultValue - step)
    }
  }

  return (
    <main className="form-input_number">
      <section>
        <button
          type="button"
          className="controller"
          disabled={decreaseIsDisabled()}
          onClick={() => handleClick('decrease')}
        >-</button>
        <input
          readOnly
          className="form-input"
          disabled={disabled}
          name={name}
          type="text"
          value={format(defaultValue)}
          ref={ref}
        />
        <button
          type="button"
          className="controller"
          disabled={increaseIsDisabled()}
          onClick={() => handleClick('increase')}
        >+</button>
      </section>
    </main>
  )
})

export default NumberInput
