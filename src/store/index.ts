import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import insurance from './insurance'

export const store = configureStore({
  reducer: {
    insurance
  }
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
