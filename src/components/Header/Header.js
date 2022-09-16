import React from 'react'
import { useState } from 'react'
import './Header.scss'
import Logo from '../../assets/Pokémon_GO_logo.svg.png';
import { AiOutlineSearch } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();
    const [valueSearch, setValueSearch] = useState();

    const handleKeyDownSearch = (e) => {
        if (e.keyCode === 13) {
            navigate(`search/${valueSearch}`)
        }
    }
    const handleChangeValueInput = (e) => {
        setValueSearch(e.target.value);
        if (e.target.value === '') {
            navigate('/')
        }
    }
    return (
        <header className='header'>
            <div className='container header__container'>
                <a href='/' className='header__logo'>
                    <img src={Logo} alt='logo' />
                </a>

                <div className='header__search'>
                    <AiOutlineSearch className='search-icon-icon' onClick={() => navigate(`search/${valueSearch}`)} />
                    <input onChange={handleChangeValueInput} onKeyDown={handleKeyDownSearch} type='text' placeholder='Name or ID ?' />
                </div>
            </div>
        </header>
    )
}

export default Header