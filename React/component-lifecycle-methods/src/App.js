import logo from './logo.svg';
import './App.css';

// import components
import Timer from './Timer';
import ZenQuote from './ZenQuote';
import GithubUserInfo from './GithubUserInfo';

function App() {
  return (
    <div className="App">
      {/* <Timer /> */}
      {/* <ZenQuote /> */}
      <GithubUserInfo
        username='ozantekin'
      />
    </div>
  );
}

export default App;
