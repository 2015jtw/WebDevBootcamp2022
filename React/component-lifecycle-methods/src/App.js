import logo from './logo.svg';
import './App.css';

// import components
import Timer from './Timer';
import ZenQuote from './ZenQuote';
import GithubUserInfo from './GithubUserInfo';
import Deck from './Deck';

function App() {
  return (
    <div className="App">
      {/* <Timer /> */}
      {/* <ZenQuote /> */}
      {/* <GithubUserInfo
        username='ozantekin'
      /> */}
      <Deck />
    </div>
  );
}

export default App;
