import React from 'react'
import Pokedex from '../../components/Pokedex/Pokedex'
import { GetPokemons, GetPokemonData } from '../../api/Api';
import { useState, useEffect } from "react";
import './Home.scss';
import { BsFillCaretDownFill } from 'react-icons/bs';
import { GetTypes } from '../../api/Api';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const [pokemons, setPokemons] = useState([]);
    const [page, setPage] = useState(0);
    const [totalPage, setTotalPage] = useState();
    const [loading, setLoading] = useState(true);
    const [pokemonTypes, setPokemonTypes] = useState([]);
    const [displayTypes, setDisplayTypes] = useState(false);
    const navigate = useNavigate();

    const getAllPokemons = async () => {
        const res = await GetPokemons(20 * page, 21);

        const promises = res.results.map(async pokemon => {
            return await GetPokemonData(pokemon.name);
        });
        const results = await Promise.all(promises);
        setPokemons(results)
        setTotalPage(Math.ceil(res.count / 21));
        setLoading(false);
    }
    const GetAllTypes = async () => {
        const res = await GetTypes();
        setPokemonTypes(res.results)
    }

    useEffect(() => {
        GetAllTypes();
        getAllPokemons();
    }, [page]);

    return (
        <>
            <div className='container filter-pokemons'>
                <button onClick={() => setDisplayTypes(!displayTypes)}>
                    Types
                    <BsFillCaretDownFill />
                </button>
                {displayTypes &&
                    <ul onClick={() => setDisplayTypes(false)}>
                        {pokemonTypes.map((item, index) => (
                            <li onClick={() => navigate(`/${item.name}`)} className={`poke__type ${item.name}`} key={index}>{item.name}</li>
                        ))}
                    </ul>
                }
            </div>
            <Pokedex pokemons={pokemons} page={page} setPage={setPage} loading={loading} totalPage={totalPage} />
        </>
    )
}

export default Home