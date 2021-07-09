export const ce = (value: string) => {
  value = value.replace(/[\W_]+/g, '')
  return value.substring(0, 12).toUpperCase()
}

export const dni = (value: string) => {
  value = value.replace(/\D/g, '')
  return value.substring(0, 8)
}

export const phone = (value: string) => {
  value = value.replace(/\D/g, '')
  value = value.replace(value.charAt(0), '9')
  return value.substring(0, 9)
}

export const plate = (value: string) => {
  const arrayValue = value.split('').map((item, index) => {
    let data = item.replace(/[\W_]+/g,'')
    return (index === 2) ? data += '-' : data
  })
  
  return arrayValue.join('').substring(0, 7).toUpperCase()
}

export const document = (type: string) => {
  return type === 'DNI' ? dni : ce
}

export const mask = {
  ce,
  dni,
  phone,
  plate,
  document
}

export default mask
