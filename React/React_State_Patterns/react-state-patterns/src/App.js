import logo from './logo.svg';
import './App.css';

// import components
import ScoreKeeper from './ScoreKeeper';
import LottoBall from './LottoBall';
import Lottery from './Lottery';
import Coin from './Coin';
import CoinFlipper from './CoinFlipper';
import ColorBox from './ColorBox';
import ColorBoxContainer from './ColorBoxContainer';

function App() {
  return (
    <div className="App">
      {/* <ScoreKeeper /> */}
      {/* <Lottery />

      <Lottery
        title='Mini Daily'
        numBalls={4}
        maxNum={10}
      /> */}

      {/* <CoinFlipper /> */}

      <ColorBoxContainer />

    </div>
  );
}

export default App;
