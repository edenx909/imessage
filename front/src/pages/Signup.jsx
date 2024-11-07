const Signup = () => {
  return (
    <div>
      SignUp Imsg
      <form>
        <div>
          <label>
            <span>Full Name</span>
          </label>
          <input type="text" placeholder="Full Name" />
        </div>
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
        <div>
          <label>
            <span>Confirm Password</span>
          </label>
          <input type="password" placeholder="Confirm Password" />
        </div>
        <a href="#">Already have an Account?</a>
        <div>
          <button>Sign Up</button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
