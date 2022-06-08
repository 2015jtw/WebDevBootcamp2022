import logo from './logo.svg';
import './App.css';

// import components and react routerr
import { Route, Routes } from 'react-router-dom'
import Food from './Food';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="food/:name" element={<Food />} />
      </Routes>

    </div>
  );
}

export default App;
