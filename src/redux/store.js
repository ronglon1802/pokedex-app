import { configureStore } from "@reduxjs/toolkit";
import pokemonsReducer from './PokemonsSlice';

export default configureStore({
    reducer: {
        pokemons: pokemonsReducer,
    }
})