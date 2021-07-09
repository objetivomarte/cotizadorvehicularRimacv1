import customer, { ICustomer } from './customer'

export interface ICoverage {
  id: number
  price?: number
  name?: string
  content?: string
  icon?: string
}

export interface IInsurance {
  plate?: string
  year?: number | null
  brand?: string
  gas?: string
  insurancePrice?: number
  salePrice?: number
  coverages?: Array<ICoverage>
  customer?: ICustomer | null
  terms?: boolean
}

export const updateCoverage = (
  insurance: IInsurance, 
  coverage: ICoverage, 
  action: string) => {

  let coverages: Array<ICoverage> | undefined = []
  let salePrice: number = 0.00

  if (action === 'add') {
    coverages = [...insurance.coverages!, coverage]
    salePrice = insurance.salePrice! + coverage.price!
  } else {
    coverages = insurance.coverages?.filter(({ id }) => id !== coverage.id)
    salePrice = insurance.salePrice! - coverage.price!
  }

  return {
    coverages,
    salePrice
  }
}

export const insurancePriceRange = {
  min: 12500,
  max: 16500,
  step: 100
}

const baseSalePrice = 20.00
const currentYear = (new Date()).getFullYear()

const insurance: IInsurance = {
  plate: '',
  year: currentYear,
  brand: '',
  gas: 'No',
  insurancePrice: insurancePriceRange.min,
  salePrice: baseSalePrice,
  coverages: [],
  customer
}

export default insurance