import {useState} from 'react'

import './App.css';

function App() {
  const [navItems, setNavItems] = useState([
    {url: "/class-list", name: "Class List"},
    {url: "/monster-list", name: "Scary Monsters"},
    {url: "/spell-search", name: "Search for Spells"}
  ])

  return (
    <>
      <h1>
        This is our app!
      </h1>
    </>
  );
}

export default App;
