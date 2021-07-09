import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../index'
import initialInsurance, { IInsurance } from '../../utils/insurance'

const initialState: IInsurance = initialInsurance

export const slice = createSlice({
  name: 'insurance',
  initialState,
  reducers: {
    updateInsurance: (state, action: PayloadAction<IInsurance>) => ({
      ...state,
      ...action.payload
    })
  }
})

const { actions, reducer } = slice
export const { updateInsurance } = actions
export const insuranceSelector = (state: RootState) => state.insurance
export const coveragesIdSelector = (state: RootState) => {
  return state.insurance.coverages?.map(({ id }) => id)
} 

export default reducer
