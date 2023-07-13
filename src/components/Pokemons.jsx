import React, { useEffect, useState } from 'react';
import BackgroundPoke from './BackgroundPoke';
import '../styles/menu.css'
import axios from 'axios';
import Input from './Input';
import InfoPokemon from './InfoPokemon';


const Pokemons = () => {
  const [pokemons, setPokemons] = useState([]);
  const [changePokemon, setChangePokemon] = useState(1);
  const [inputValue, setInputValue] = useState();

  const background_Poke = () => {
    const back = document.querySelector('.pokemon_img');

    switch (pokemons.types?.[0].type.name) {
      case 'grass':
        back.classList.add('grass');
        back.classList.remove('poison')
        back.classList.remove('electric')
        back.classList.remove('normal')
        back.classList.remove('dragon')
        break;
      case 'fire':
        back.classList.add('fire')
        back.classList.remove('grass')
        back.classList.remove('fairy');
        back.classList.remove('fighting');
        back.classList.remove('rock')
        back.classList.remove('electric')
        back.classList.remove('water')
        break;
      case 'water':
        back.classList.add('water');
        back.classList.remove('fire')
        back.classList.remove('normal')
        back.classList.remove('fighting')
        back.classList.remove('grass')
        back.classList.remove('rock')
        back.classList.remove('poison')
        break;
      case 'bug':
        back.classList.add('bug');
        back.classList.remove('water')
        back.classList.remove('grass')
        back.classList.remove('normal')
        break;
      case 'fairy':
        back.classList.add('fairy');
        back.classList.remove('bug')
        back.classList.remove('poison')
        back.classList.remove('rock')
        break;
      case 'normal':
        back.classList.add('normal');
        back.classList.remove('bug')
        back.classList.remove('fire')
        back.classList.remove('ghost')
        back.classList.remove('grass')
        back.classList.remove('dragon')
        back.classList.remove('ice')
        back.classList.remove('fighting')
        back.classList.remove('water')
        back.classList.remove('rock')
        back.classList.remove('electric')
        break;
      case 'poison':
        back.classList.add('poison');
        back.classList.remove('normal')
        back.classList.remove('electric')
        back.classList.remove('grass')
        back.classList.remove('water')
        break;
      case 'electric':
        back.classList.add('electric');
        back.classList.remove('poison')
        back.classList.remove('bug')
        back.classList.remove('water')
        back.classList.remove('ice')
        break;
      case 'dragon':
        back.classList.add('dragon');
        back.classList.remove('normal')
        back.classList.remove('electric')
        back.classList.remove('grass')
        back.classList.remove('fire')
        break;
      case 'ghost':
        back.classList.add('ghost');
        back.classList.remove('normal')
        back.classList.remove('electric')
        back.classList.remove('grass')
        back.classList.remove('dragon')
        back.classList.remove('water')
        break;
      case 'ice':
        back.classList.add('ice');
        back.classList.remove('normal')
        back.classList.remove('ghost')
        back.classList.remove('grass')
        back.classList.remove('dragon')
        break;
      case 'fighting':
        back.classList.add('fighting');
        back.classList.remove('normal')
        back.classList.remove('ghost')
        back.classList.remove('grass')
        back.classList.remove('dragon')
        back.classList.remove('ice')
        back.classList.remove('water')
        break;
      case 'rock':
        back.classList.add('rock');
        back.classList.remove('normal')
        back.classList.remove('ghost')
        back.classList.remove('grass')
        back.classList.remove('dragon')
        back.classList.remove('ice')
        back.classList.remove('fighting')
        back.classList.remove('water')
        break;
      case 'dark':
        back.classList.add('dark');
        back.classList.remove('normal')
        back.classList.remove('ghost')
        back.classList.remove('grass')
        back.classList.remove('dragon')
        back.classList.remove('ice')
        back.classList.remove('fighting')
        back.classList.remove('rock')
        break;
      default:
        break;
    }
  };

  background_Poke();

  const changePoke = () => {
    setChangePokemon(changePokemon + 1);
  }

  const reversePoke = () => {
    setChangePokemon(changePokemon - 1)
    if (changePokemon === 1) {
      setChangePokemon(1);
    }
  }

  const up_Pokemon = () => {
    setChangePokemon(Math.floor(Math.random() * (1000 - 20) + 20))
  };

  const search_pokemons = () => {
    axios(`https://pokeapi.co/api/v2/pokemon/${inputValue}`)
      .then(res => setPokemons(res.data))
  };

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${changePokemon}/`)
      .then(res => setPokemons(res.data))
  }, [changePokemon]);

  const btn_action = document.querySelectorAll('.change_btn');

  btn_action.forEach((btn) => {

    btn.addEventListener("click", () => {
      btn.classList.add('press_btn');
      setTimeout(() => {
        btn.classList.remove('press_btn')
      }, "100")
    });
  });

  return (
    <main className='App'>
      {
        <BackgroundPoke />
      }
      <section className='pokedex_container'>
        <div className="change_poke">
          <div className="search_poke">
            <input
              className='input_name'
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <label htmlFor="Buscar_Pokemon">Buscar Pokemon...</label>
            <button className='btn_search' onClick={() => search_pokemons()}><i className="fa-solid fa-magnifying-glass"></i></button>
          </div>
          <div className="contls">
            <button className='change_btn' onClick={() => up_Pokemon()}><i className="fa-solid fa-arrow-up"></i></button>
            <button className='change_btn' onClick={() => reversePoke()}><i className="fa-solid fa-arrow-left"></i></button>
            <button className='change_btn' onClick={() => up_Pokemon()}><i className="fa-solid fa-arrow-down"></i></button>
            <button className='change_btn' onClick={() => changePoke()}><i className="fa-solid fa-arrow-right"></i></button>
          </div>
        </div>
        <div className="pokemon_container">
          <div className="pokemon_img">
            <h2>{pokemons.name}</h2>
            <img src={pokemons.sprites?.other.home.front_default} className='poke_img' />
          </div>
          <div className="pokemon_details">
            <div className="info_poke_select">
              <span>Mas informacion: </span>
              <div className="estadisticas_info">
                <h1>HP: </h1>
                <div className="barra">
                  <div className="porcentaje" style={{ width: `${pokemons.stats?.[0].base_stat}%` }}>
                    {pokemons.stats?.[0].base_stat}%
                  </div>
                </div>
              </div>
              <div className="estadisticas_info">
                <h1>ATTACK: </h1>
                <div className="barra">
                  <div className="porcentaje" style={{ width: `${pokemons.stats?.[1].base_stat}%` }}>
                    {pokemons.stats?.[1].base_stat}%
                  </div>
                </div>
              </div>
              <div className="estadisticas_info">
                <h1>DEFENSE: </h1>
                <div className="barra">
                  <div className="porcentaje" style={{ width: `${pokemons.stats?.[2].base_stat}%` }}>
                    {pokemons.stats?.[2].base_stat}%
                  </div>
                </div>
              </div>
              <div className="estadisticas_info">
                <h1>SPECIAL ATTACK: </h1>
                <div className="barra">
                  <div className="porcentaje" style={{ width: `${pokemons.stats?.[3].base_stat}%` }}>
                    {pokemons.stats?.[3].base_stat}%
                  </div>
                </div>
              </div>
              <div className="estadisticas_info">
                <h1>SPECIAL DEFENSE: </h1>
                <div className="barra">
                  <div className="porcentaje" style={{ width: `${pokemons.stats?.[4].base_stat}%` }}>
                    {pokemons.stats?.[4].base_stat}%
                  </div>
                </div>
              </div>
              <div className="estadisticas_info">
                <h1>SPEED: </h1>
                <div className="barra">
                  <div className="porcentaje" style={{ width: `${pokemons.stats?.[1].base_stat}%` }}>
                    {pokemons.stats?.[1].base_stat}%
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="change_page">
          <InfoPokemon pokemons={pokemons} />
        </div>
      </section>
    </main>
  );
};

export default Pokemons;