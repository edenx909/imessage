function Login() {
  return (
    <div>
      Login
      <form>
        <div>
          <label>
            <span>Username</span>
          </label>
          <input type="text" placeholder="Username" />
        </div>
        <div>
          <label>
            <span>Password</span>
          </label>
          <input type="password" placeholder="Password" />
        </div>
        <a href="#">Create an Account</a>
        <div>
          <button>Login</button>
        </div>
      </form>
    </div>
  );
}

export default Login;
