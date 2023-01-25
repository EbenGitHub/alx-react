import logo from './favicon.ico';
import './App.css';
import img from './holberton-logo.jpg'
import { getFullYear, getFooterCopy } from './utils.js'

let fullYear = getFullYear().toString();
let footerCopy = getFooterCopy(true)

function App() {
  return (
    <div>
      <div className="App-header">
        <img src={img} />
        <h1>School dashboard</h1>
      </div>
      <div className="App-body">
        <p>Login to access the full dashboard</p>
        <label for="email"></label>
        <input type="email" id="email" />
        <label for="password"></label>
        <input type="password" id="password" />
        <button value="OK">OK</button>
      </div>
      <div className="App-footer">
        <p>Copyright { fullYear } - { footerCopy }</p>
      </div>
    </div>
  );
}

export default App;
