import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface BalanceState {
  balance: number
}

const initialState: BalanceState = {
  balance: 25574.5526262,
}

const balanceSlice = createSlice({
  name: 'balance',
  initialState,
  reducers: {
    setBalance: (state, action: PayloadAction<number>) => {
      state.balance = action.payload
    },

    addToBalance: (state, action: PayloadAction<number>) => {
      state.balance += action.payload
    },
  },
})

export const { setBalance, addToBalance } = balanceSlice.actions

export default balanceSlice
