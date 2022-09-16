import React, { useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { SearchPokemon } from '../../api/Api'
import Header from '../../components/Header/Header'
import './PokemonDetail.scss'

const PokemonDetail = () => {
    const [hp, setHp] = useState(1);
    const [attack, setAttack] = useState(1);
    const [defence, setDefence] = useState(1);
    const [spattack, setSpAttack] = useState(1);
    const [spdefence, setSpDefence] = useState(1);
    const [speed, setSpeed] = useState(1);
    const [totalStats, setTotalStats] = useState(0);
    const [loading, setLoading] = useState(true);

    const [pokemon, setPokemon] = useState({
        id: '',
        name: '',
        image: '',
        height: '',
        weight: '',
        abilities: [],
        types: [],
        forms: [],
        stats: []
    });


    const { id } = useParams();
    const GetPokemon = async () => {
        setLoading(true);
        const res = await SearchPokemon(id)
        setPokemon({ ...pokemon, id: res.id, name: res.name, height: res.height, weight: res.weight, abilities: res.abilities, types: res.types, forms: res.forms, stats: res.stats, image: res.sprites.other.dream_world.front_default });
        setLoading(false);
    }

    useEffect(() => {
        GetPokemon();
        const intervalHp = setInterval(() => {
            setHp(prev => {
                const newvalue = prev + 10;
                if (newvalue >= 30) {
                    clearInterval(intervalHp)
                }
                return newvalue
            })
        }, 100)
        const intervalAtk = setInterval(() => {
            setAttack(prev => {
                const newvalue = prev + 10;
                if (newvalue >= 100) {
                    clearInterval(intervalAtk)
                }
                return newvalue
            })
        }, 100)
        const intervalDf = setInterval(() => {
            setDefence(prev => {
                const newvalue = prev + 10;
                if (newvalue >= 50) {
                    clearInterval(intervalDf)
                }
                return newvalue
            })
        }, 100)
        const intervalSpAtk = setInterval(() => {
            setSpAttack(prev => {
                const newvalue = prev + 10;
                if (newvalue >= 50) {
                    clearInterval(intervalSpAtk)
                }
                return newvalue
            })
        }, 100)
        const intervalSpDf = setInterval(() => {
            setSpDefence(prev => {
                const newvalue = prev + 10;
                if (newvalue >= 50) {
                    clearInterval(intervalSpDf)
                }
                return newvalue
            })
        }, 100)
        const intervalSp = setInterval(() => {
            setSpeed(prev => {
                const newvalue = prev + 10;
                if (newvalue >= 50) {
                    clearInterval(intervalSp)
                }
                return newvalue
            })
        }, 100)
    }, []);
    return (
        <>
            {loading ? <div className='loader'></div> :

                <div className='pokemon-detail'>
                    <div className='detail-heading'>
                        <h1>{pokemon.name}</h1>
                    </div>
                    <div className='container container__detail'>
                        <div className='bioDiv'>
                            <table>
                                <tr>
                                    <td>ID</td>
                                    <td>#{pokemon.id}</td>
                                </tr>
                                <tr>
                                    <td>Height</td>
                                    <td>{pokemon.height}m</td>
                                </tr>
                                <tr>
                                    <td>Weight</td>
                                    <td>{pokemon.weight}Kg</td>
                                </tr>
                                <tr>
                                    <td>Abilities</td>
                                    <td>
                                        <div className='detail__abilities'>
                                            {pokemon.abilities.map((item, index) => (
                                                <div style={{ textTransform: 'capitalize' }} key={index}>{item.ability.name}</div>
                                            ))}
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Types</td>
                                    <td>
                                        <div className="poke__types">
                                            {pokemon.types.map((item, index) => (
                                                <div key={index} className={`poke__type ${item.type.name}`}>
                                                    <div className="poke__type-icon">
                                                        <img src={`/poke-type-icon/${item.type.name}.svg`} alt='icon-poke-type' />
                                                    </div>
                                                    <span className="poke__type-name">{item.type.name}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Forms</td>
                                    <td style={{ textTransform: 'capitalize' }} className='detail__forms'>
                                        {pokemon.forms.map((item, index) => (
                                            <div key={index}>{item.name}</div>
                                        ))}
                                    </td>
                                </tr>
                            </table>
                        </div>
                        <div className='image__detail'>
                            <img src={pokemon.image} alt='detail-img' />
                        </div>
                        <div className='statDiv'>
                            <table>
                                <tr>
                                    <td></td>
                                    <td>
                                        <button style={{ backgroundColor: 'rgb(43, 194, 83)', color: '#fff' }}>Base</button>
                                    </td>
                                    <td>
                                        <button>Min</button>
                                    </td>
                                    <td>
                                        <button>Max</button>
                                    </td>
                                </tr>

                                {pokemon.stats.map((item, index) => (
                                    <tr key={index} >
                                        <td>
                                            {item.stat.name.indexOf('special') === -1 ? item.stat.name : item.stat.name.replace('ecial-', ' ')}
                                        </td>
                                        <td colSpan="3">
                                            <div className='progressbar'>
                                                <span style={{ width: `${attack}%` }}>{item.base_stat}</span>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                                {/*  <tr>
                                <td>Attack</td>
                                <td colSpan="3">
                                    <div className='progressbar'>
                                        <span style={{ width: `${attack}%` }}>100</span>
                                    </div>
                                </td>
                            </tr> */}
                                <tr>
                                    <td>Total</td>
                                    <td colSpan="3">
                                        {totalStats}
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                    <div className='detail-evolution'>
                        Evolution Chain
                    </div>
                </div>
            }
        </>
    )
}

export default PokemonDetail