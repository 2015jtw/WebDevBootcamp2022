import logo from './logo.svg';
import './App.css';

// import components
import ScoreKeeper from './ScoreKeeper';
import LottoBall from './LottoBall';
import Lottery from './Lottery';

function App() {
  return (
    <div className="App">
      {/* <ScoreKeeper /> */}
      <Lottery />
    </div>
  );
}

export default App;
