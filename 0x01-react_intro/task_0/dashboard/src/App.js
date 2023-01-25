import logo from './favicon.ico';
import './App.css';
import img from './holberton-logo.jpg'

function App() {
  return (
    <div>
      <div className="App-header">
        <img src={img} />
        <h1>School dashboard</h1>
      </div>
      <div className="App-body">
        <p>Login to access the full dashboard</p>
      </div>
      <div className="App-footer">
        <p>Copyright 2020 - holberton School</p>
      </div>
    </div>
  );
}

export default App;
