import React from 'react'
import ErrorMessage from './ErrorMessage'

type IProps = {
  name?: string
  defaultChecked?: any
  disabled?: boolean
  error?: any
  onChange?: (event: any) => void
  children?: React.ReactNode | undefined
}

const Switch = React.forwardRef<HTMLInputElement, IProps>(({
  defaultChecked,
  name,
  disabled,
  error,
  onChange,
  children
}, ref) => (
  <main
    className={`form-input_switch ${defaultChecked ? 'is-checked' : ''} ${error ? 'has-error' : ''}`}
  >
    <input
      ref={ref}
      name={name}
      type="checkbox"
      disabled={disabled}
      defaultChecked={defaultChecked}
      onChange={onChange}
    />
    <section>
      <div className="checkbox" />
      {children && <label>{children}</label>}
    </section>
    {error && <ErrorMessage message={error.message} />}
  </main>
))

export default Switch
