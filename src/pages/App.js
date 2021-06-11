import logo from '../styles/logo.svg'
import '../styles/App.css'
import Header from '../components/header'
import AppTemplate from '../components/templates/app'

function App() {
  return (
    <AppTemplate>
        <Header>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </Header>
    </AppTemplate>
  );
}

export default App;
