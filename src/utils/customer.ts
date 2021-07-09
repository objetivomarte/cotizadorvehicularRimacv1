export interface ICustomer {
  documentType?: string
  document?: string | number
  name?: string
  firstName?: string
  email?: string
  phone?: number | null
}

export const customerFormat = (data: any) => {
  const [firstName] = data.name.split(' ')
  return {
    documentType: data.documentType,
    document: data.document,
    name: data.name,
    firstName,
    email: data.email,
    phone: data.phone
  }
}

const customer: ICustomer= {
  documentType: 'DNI',
  document: '',
  name: '',
  firstName: '',
  email: '',
  phone: null
}

export default customer