import React from 'react'
import ErrorMessage from './ErrorMessage'
type IProps = {
  items: Array<any>
  label?: string
  name?: string
  defaultValue?: any
  disabled?: boolean
  error?: any
  onChange?: (event: any) => void
}

const Select = React.forwardRef<HTMLSelectElement, IProps>(({
  items,
  label,
  defaultValue,
  name,
  disabled,
  error,
  onChange
}, ref) => (
  <main
    className={`form-input_select ${label ? 'has-label' : ''} ${defaultValue ? 'has-focus' : ''} ${error ? 'has-error' : ''}`}
  >
    <section>
      <select
        className="form-input"
        onChange={onChange}
        disabled={disabled}
        name={name}
        defaultValue={defaultValue}
        ref={ref}
      >
        {label && <option hidden></option>}
        {items.map((option: any) => (
          <option key={option} value={option}>{option}</option>
        ))}
      </select>
      <label>{label}</label>
    </section>
    {error && <ErrorMessage message={error.message} />}
  </main>
))

export default Select
