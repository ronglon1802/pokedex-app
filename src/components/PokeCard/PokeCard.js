import React from "react";
import './PokeCard.scss'
import cardBg from '../../assets/card-bg.png'
import { Link } from 'react-router-dom';


function PokeCard({ id, name, image, types }) {

  const style = `poke__card ${types[0].type.name}`

  return (
    <>
      <Link to={`/pokemon-detail/${id}`} className={style}>
        <div className="poke__card-info">
          <h4 className="poke__id">#{id}</h4>
          <h2 className="poke__name">{name}</h2>
          <div className="poke__types">
            {types.map((type, index) => (
              <div key={index} className={`poke__type ${type.type.name}`}>
                <div className="poke__type-icon">
                  <img src={`/poke-type-icon/${type.type.name}.svg`} alt='icon-poke-type' />
                </div>
                <span className="poke__type-name">{type.type.name}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="poke__image">
          <img className="poke__image-bg" src={cardBg} alt="ava-poke" />
          <img className="poke__image-ava" src={image} alt="bg-poke" />
        </div>
      </Link>
    </>
  );
}

export default PokeCard;