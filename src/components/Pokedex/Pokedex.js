import React from 'react'
import './Pokedex.scss'
import PokeCard from '../PokeCard/PokeCard'
import Pagination from '../Pagination/Pagination';

const Pokedex = ({ pokemons, loading, totalPage, page, setPage }) => {

    return (
        <>
            {loading ? <div className='loader'></div> :
                <div className='list'>
                    <div className='container list__container'>
                        {pokemons.sort((a, b) => { return a.id - b.id }).map((pokemon, index) => (
                            <PokeCard
                                key={index}
                                id={pokemon.id}
                                name={pokemon.name}
                                image={pokemon.sprites.other.home.front_default}
                                types={pokemon.types} />
                        ))}
                    </div>
                    <Pagination totalPage={totalPage} page={page} setPage={setPage} />
                </div >
            }
        </>
    )
}

export default Pokedex;