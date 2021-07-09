import React from 'react'
import ErrorMessage from './ErrorMessage'

type IProps = {
  name?: string
  defaultChecked?: any
  disabled?: boolean
  error?: any
  onChange?: (event: any) => void
  children: React.ReactNode
}

const Checkbox = React.forwardRef<HTMLInputElement, IProps>(({
  defaultChecked,
  name,
  disabled,
  error,
  onChange,
  children
}, ref) => (
  <main
    className={`form-input_checkbox ${error ? 'has-error' : ''}`}
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
      <label>{children}</label>
    </section>
    {error && <ErrorMessage message={error.message} />}
  </main>
))

export default Checkbox
