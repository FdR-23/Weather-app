import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    list: [],
    details: {}
}

export const cardsSlice = createSlice({
    name: 'cards',
    initialState,
    reducers: {
        addCard: (state, action) => {
            const cityCharged = state.list.find(city => city.name === action.payload.name);
            cityCharged ?
                alert('The city is already loaded')
                :
                state.list = [...state.list, action.payload];
        },
        deleteCard: (state, action) => {
            state.list = state.list.filter(e => e.id !== action.payload)
        },
        detailsCard: (state, action) => {
            state.details = state.list.filter(e => e.id === action.payload)
        }


    },
})


export const { addCard, deleteCard, detailsCard } = cardsSlice.actions

export default cardsSlice.reducer