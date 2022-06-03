import logo from './logo.svg';
import './App.css';

// import components
import { Route, Routes, Switch, NavLink } from 'react-router-dom';
import Dog from './Dog';
import Contact from './Contact';
import About from './About';


function App() {
  return (
    <div className="App">
      <nav className='App-nav'>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/dog">Dog</NavLink>
        {/* <a href='/dog'>Dog</a>
        <a href='/contact'>Contact</a>
        <a href='/about'>About</a> */}
      </nav>

      <h1>React Router Intro</h1>
      <Routes>
        <Route path="/dog" element={<Dog />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
