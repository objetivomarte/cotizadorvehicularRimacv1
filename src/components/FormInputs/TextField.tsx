import React from 'react'
import ErrorMessage from './ErrorMessage'

type IProps = {
  label?: string
  name?: string
  type?: string
  defaultValue?: any
  disabled?: boolean
  readOnly?: boolean
  error?: any
  onChange?: (event: any) => void
  mask?: (value: string) => string
}

const TextField = React.forwardRef<HTMLInputElement, IProps>(({
  label,
  defaultValue,
  name,
  type = 'text',
  disabled,
  readOnly,
  error,
  mask,
  onChange
}, ref) => {
  const [focus, setFocus] = React.useState<boolean>(false)
  const hasFocus = !!(defaultValue || focus)
  const handleChange = (event: any) => {
    if (mask) event.target.value = mask(event.target.value)
    if (onChange) onChange(event)
  }

  return (
    <main
      className={`form-input_field ${hasFocus ? 'has-focus' : ''} ${error ? 'has-error' : ''}`}
    >
      <section>
        <input
          readOnly={readOnly}
          onBlur={() => !readOnly ? setFocus(false) : undefined}
          onFocus={() => !readOnly ? setFocus(true) : undefined}
          className="form-input"
          onChange={handleChange}
          disabled={disabled}
          name={name}
          type={type}
          defaultValue={defaultValue}
          ref={ref}
        />
        <label>{label}</label>
      </section>
      {error && <ErrorMessage message={error.message} />}
    </main>
  )
})

export default TextField
