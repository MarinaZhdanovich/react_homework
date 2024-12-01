import React from "react";
import { useSelector, useDispatch } from 'react-redux';


const Toggle = () => {
  const theme = useSelector(state => state);
  const dispatch = useDispatch();

  const toggleTheme = () => {
    dispatch({ type: 'TOGGLE_THEME' });
  };

  return (
    <div style={{ backgroundColor: theme === 'light' ? 'white' : 'black', color: theme === 'light' ? 'black' : 'white' }}>
      <h1>Переключение темы сайта {theme}.</h1>
      <button onClick={toggleTheme}>Нажми чтобы переключить на {theme === 'light' ? 'темную' : 'светлую'} тему </button>
    </div>
  )
}

export default Toggle;
