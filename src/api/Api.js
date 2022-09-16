import axios from "axios";

export const SearchPokemon = async (pokeName) => {
    try {
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
        return res.data;
    } catch (error) {

    }
};

export const GetPokemons = async (offset = 0, limit = 20) => {
    try {
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
        return res.data;
    } catch (error) {

    }
}

export const GetPokemonData = async (url) => {
    try {
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${url}`)
        return res.data;
    } catch (error) {

    }
}

export const GetTypes = async () => {
    try {
        const res = await axios.get(`https://pokeapi.co/api/v2/type`)
        return res.data;
    } catch (error) {

    }
}
export const GetPokemonsOfType = async (type) => {
    try {
        const res = await axios.get(`https://pokeapi.co/api/v2/type/${type}`)
        return res.data.pokemon;
    } catch (error) {

    }
}
