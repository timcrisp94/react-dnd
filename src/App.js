import {useState} from 'react'
import NavBar from './components/NavBar/NavBar';
import './App.css';

function App() {
  const [navItems, setNavItems] = useState([
    {url: "/class-list", name: "Class List"},
    {url: "/monster-list", name: "Scary Monsters"},
    {url: "/spell-search", name: "Search for Spells"}
  ])

  return (
    <>
      <NavBar navItems={navItems}/>
    </>
  );
}

export default App;
