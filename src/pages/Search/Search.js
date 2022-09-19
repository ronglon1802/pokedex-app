import React from 'react';
import { useState, useEffect } from 'react';
import { GetPokemonData } from '../../api/Api';
import './Search.scss';
import { useParams } from 'react-router-dom';
import PokeCard from '../../components/PokeCard/PokeCard';

const Search = () => {
    const { url } = useParams();
    const [notFound, setNotFound] = useState(false);
    const [pokemons, setPokemons] = useState([]);

    const getPokemons = async () => {
        setNotFound(false);
        const data = await GetPokemonData(url)
        if (data) {
            setPokemons([data])
        }
        else {
            setNotFound(true);
        }
    }

    useEffect(() => {
        getPokemons();
    }, [url]);

    return (
        <>
            {
                notFound ? <div className='not-found'>Pokemon Can't Be Found</div> :
                    <div className='list'>
                        <div className='container list__container'>
                            {pokemons.map((item, index) => (
                                <PokeCard
                                    key={index}
                                    id={item.id}
                                    name={item.name}
                                    image={item.sprites.other.home.front_default}
                                    types={item.types} />
                            ))}
                        </div>
                    </div>

            }
        </>
    )
}

export default Search