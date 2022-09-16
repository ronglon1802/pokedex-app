import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    pokemons: []
}

export const pokemonsSlice = createSlice({
    name: 'pokemons',
    initialState,
    reducers: {
        savePokemons: (state, action) => {
            state.pokemons = action.payload;
        }
    }
})

export const { savePokemons } = pokemonsSlice.actions;
export default pokemonsSlice.reducer;