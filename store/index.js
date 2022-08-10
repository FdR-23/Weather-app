import { configureStore } from '@reduxjs/toolkit'
import cards from './slices/cardsSlices'

export const store = configureStore({
  reducer: {
    cards
  },
})