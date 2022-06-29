import logo from './logo.svg';
import './App.css';

// import components
import SeedColors from './SeedColors';
import Palette from './Palette';
import { generatePalette } from './ColorHelpers';
import { Component } from 'react';

class App extends Component {
  render() {
    console.log(generatePalette(SeedColors[4]))

    return (
      <div className="App">
        <Palette
          palette={generatePalette(SeedColors[4])}
          {...SeedColors[4]}
        />
      </div>
    )
  }
}


export default App;
