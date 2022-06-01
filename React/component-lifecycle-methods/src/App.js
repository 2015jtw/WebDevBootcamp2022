import logo from './logo.svg';
import './App.css';

// import components
import Timer from './Timer';
import ZenQuote from './ZenQuote';
import GithubUserInfo from './GithubUserInfo';
import Deck from './Deck';
import JokeList from './JokeList';

function App() {
  return (
    <div className="App">
      {/* <Timer /> */}
      {/* <ZenQuote /> */}
      {/* <GithubUserInfo
        username='ozantekin'
      /> */}

      {/* this Deck Component was a cool card dealer project */}
      {/* <Deck /> */}
      <JokeList />

    </div>
  );
}

export default App;
