import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Page from './components/Page/Page';
import './styles.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="category" element={<Navbar />}>
        <Route index element={<Page />} />
        <Route path=":catId" element={<Page />} />
      </Route>
      <Route path="*" element={<h2>404 OH OH!!</h2>} />
    </Routes>
  );
}

export default App;
