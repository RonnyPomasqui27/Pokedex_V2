import React, { useState } from 'react';
import '../styles/menu.css';


const Input = () => {

  const [inputValue, setInputValue] = useState();

  return (
    <div className="search_poke">
      <input
        className='input_name'
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <label htmlFor="Buscar_Pokemon">Buscar Pokemon...</label>
    </div>
  );
};

export default Input;