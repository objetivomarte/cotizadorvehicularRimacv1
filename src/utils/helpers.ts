export const api = async (url?: string, options?: any) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_API}/${url}`, options)
    return await response.json()
  } catch (error) {
    return error
  }
}

export const randomId = () => Math.floor(Math.random() * (10 - 1 + 1) + 1)

export const money = (value: number, decimal: number = 0) => {
  const regExp = '\\d(?=(\\d{' + (3) + '})+' + (decimal > 0 ? '\\.' : '$') + ')'
  return (value).toFixed(Math.max(0, ~~decimal)).replace(new RegExp(regExp, 'g'), '$&,')
}

export const years = () => {
  let currentYear = (new Date()).getFullYear()
  const yearsAmount = 30
  return [...new Array(yearsAmount).keys()].map(() => currentYear--)
}