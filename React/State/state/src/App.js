import logo from './logo.svg';
import './App.css';
import Demo from './Demo';
import Random from './Random';
import Button from './Button';
import BrokenButton from './BrokenButton';
import ClickState from './clickState';

function App() {
  return (
    <div className="App">
      <Demo
        animal="Bobcat"
        fruit="Pineapple"
      />

      <Random
        maxNum={7}
      />

      <Button />

      <BrokenButton />

      <ClickState />
    </div>
  );
}

export default App;
