import React from 'react'

const Signup = () => {
    return (
        <div>
          <h1>Sign up</h1>
          <form>
            <div>
              <input type="text" name="username" placeholder="Username" />
            </div>
            <div>
              <input type="password" name="password" placeholder="Password" />
            </div>
            <div>
              <input type="password" name="password" placeholder="Confirm password" />
            </div>
            <input type="submit" value="Submit" />
          </form>
        </div>
      )
}

export default Signup
