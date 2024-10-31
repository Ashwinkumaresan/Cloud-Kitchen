import "./../style/Kitchen_sign_in.css"

export const Kitchen_login = () => {
  return (
    <>
    <div className="login-container container">
      <div className="login-box">
        <h2 className="login-title fs-1 font-monospace fw-semibold ">Kitchen Login</h2>
        <form className="login-form">
          <label className="login-label" for="username">Username:</label>
          <input className="login-input" type="text" id="username" name="username"
          placeholder="Enter your username"/>
          <br/>
          <label className="login-label" for="password">Password:</label>
          <input className="login-input" type="password" id="password" name="password"
          placeholder="Enter your password"/>
          <button>Login</button>
        </form>
      </div>
    </div>
    </>
    
  )
}
