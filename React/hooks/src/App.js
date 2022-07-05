import logo from './logo.svg';
import './App.css';

// import components
import CounterClass from './CounterClass';
import Toggler from './Toggler';
import SimpleForm from './hooks/SimpleForm';
import Clicker from './Clicker';
import StarWarsAPI from './StarWarsAPI';

function App() {
  return (
    <div className="App">
      {/* <CounterClass />
      <Toggler />
      <SimpleForm /> */}
      {/* <Clicker /> */}
      <StarWarsAPI />
    </div>
  );
}

export default App;
