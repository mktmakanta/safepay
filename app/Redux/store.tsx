import { configureStore } from '@reduxjs/toolkit'
import balanceSlice from './BalanceProvider/balanceSlice'

const store = configureStore({
  reducer: {
    balance: balanceSlice.reducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
