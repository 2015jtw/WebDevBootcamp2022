import logo from './logo.svg';
import './App.css';

// import react-router-dom
import { Route, Switch } from 'react-router-dom';

// import components
import SeedColors from './SeedColors';
import Palette from './Palette';
import { generatePalette } from './ColorHelpers';
import { Component } from 'react';
import PaletteList from './PaletteList';

class App extends Component {

  findPalette(id) {
    return SeedColors.find(function (palette) {
      return palette.id === id;
    })
  }

  render() {
    console.log(generatePalette(SeedColors[4]))

    return (

      <Switch>
        <Route exact path="/" render={() => <PaletteList palettes={SeedColors} />} />
        <Route exact path="/palette/:id" render={routeProps => (
          <Palette
            palette={generatePalette(
              this.findPalette(routeProps.match.params.id)
            )}
          />
        )}
        />
      </Switch>

      // <div className="App">
      //   <Palette
      //     palette={generatePalette(SeedColors[4])}
      //     {...SeedColors[4]}
      //   />
      // </div>


    )
  }
}


export default App;
