import { Link } from 'react-router-dom';
import './Signup.css'

export default function Signup(){
    return(
        <div class="signup-container">
        <div class="form-container">
          <h2>Sign Up</h2>
          <form>
            <input type="text" placeholder="Username" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <input type="password" placeholder="Confirm Password" />
            <button className='but1' type="submit">Sign Up</button>
          </form>
          <p class="login-link">Already have an account? <Link to={'/login'}>Login</Link></p>
        </div>
      </div>
      
    );
}