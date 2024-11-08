import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Listings from './pages/Listings'

// const API = import.meta.env.VITE_BACKEND_URL;
// const response = await fetch(`${API}/products`);

function App() {

  return (
    <div>
      <Listings />
    </div>
  );
}

export default App
