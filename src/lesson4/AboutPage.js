import React from 'react';
import { Link } from "react-router-dom";

function AboutPage() {
  return (
    <div>
      <h1>О нас</h1>
      <Link to='/'>Home Page</Link>
    </div>
  );
}

export default AboutPage;