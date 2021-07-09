import React from 'react'
import ErrorMessage from './ErrorMessage'

type IProps = {
  name?: string
  value?: any
  checked?: boolean
  disabled?: boolean
  error?: any
  onChange?: (event: any) => void
  children: React.ReactNode
}

const Radio = React.forwardRef<HTMLInputElement, IProps>(({
  name,
  value,
  checked,
  disabled,
  error,
  onChange,
  children
}, ref) => (
  <main
    className={`form-input_radio ${error ? 'has-error' : ''}`}
  >
    <input
      ref={ref}
      name={name}
      type="radio"
      disabled={disabled}
      value={value}
      checked={checked}
      onChange={onChange}
    />
    <section>
      <div className="radio" />
      <label>{children}</label>
    </section>
    {error && <ErrorMessage message={error.message} />}
  </main>
))

export default Radio
