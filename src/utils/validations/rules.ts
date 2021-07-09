export const required = 'Este campo es requerido'

export const minLength = (min: number) => ({
  value: min,
  message: `Este campo debe tener mínimo ${min} caracteres`
})

export const maxLength = (max: number) => ({
  value: max,
  message: `Este campo debe tener máximo ${max} caracteres`
})

const rules = {
  required,
  minLength,
  maxLength
}

export default rules
