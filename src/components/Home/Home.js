import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

function Home() {
  const navigate = useNavigate();

  return (
    <div className="main">
      <button onClick={() => navigate('category')}>Let's Eat</button>
    </div>
  );
}

export default Home;
