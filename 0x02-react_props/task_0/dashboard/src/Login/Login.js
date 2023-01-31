function Login() {
    return (
        <div className="App-body">
        <p>Login to access the full dashboard</p>
        <label for="email">Email</label>
        <input type="email" id="email" />
        <label for="password">Password</label>
        <input type="password" id="password" />
        <button value="OK">OK</button>
      </div>
    );
}