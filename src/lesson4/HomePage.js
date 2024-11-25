import React from 'react';
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div>
      <h1>Главная страница</h1>
      <Link to='/about'>About Page</Link>
    </div>
  );
}

export default HomePage;