import { useState } from "react";
import { TextField, Button } from '@mui/material';

const TemperatureConverter = () => {
  const [celsius, setCelsius] = useState('');
  const [fahrenheit, setFahrenheit] = useState('');

  const convertToFahrenheit = () => {
    if (celsius !== '') {
      const converted = (parseFloat(celsius) * 9) / 5 + 32;
      setFahrenheit(converted.toFixed(1));
    }
  };

  const convertToCelsius = () => {
    if (fahrenheit !== '') {
      const converted = ((parseFloat(fahrenheit) - 32) * 5) / 9;
      setCelsius(converted.toFixed(1));
    }
  };

  const clearFields = () => {
    setCelsius('');
    setFahrenheit('');
  };

  return (
    <div style={{ marginTop: '100px', paddingLeft: '100px' }}>
      <TextField
        id="outlined-basic"
        label="Температура C"
        variant="outlined"
        value={celsius}
        onChange={(e) => setCelsius(e.target.value)}
        type="number" />
      <Button variant="contained" onClick={convertToFahrenheit}>Конвертируем в температуру Фаренгейта</Button>
      <TextField
        id="outlined-basic"
        label="Температура F"
        variant="outlined"
        value={fahrenheit}
        onChange={(e) => setFahrenheit(e.target.value)}
        type="number" />
      <Button variant="contained" onClick={convertToCelsius}>Конвертируем в температуру Цельсия</Button>
      <Button variant="outlined" onClick={clearFields}>Очистить поля</Button>
    </div>
  );
};

export default TemperatureConverter;