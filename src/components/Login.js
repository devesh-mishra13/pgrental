import './Login.css'
import { Link } from 'react-router-dom';

export default function Login(){
    return(
        <div class="login-container">
            <div class="form-container">
                <h2>Login</h2>
                <form>
                    <input type="text" placeholder="Username" />
                    <input type="password" placeholder="Password" />
                    <button className='but1' type="submit">Login</button>
                </form>
                <p class="signup-link">Don't have an account? <Link to={'/signup'}>Signup</Link></p>
            </div>
        </div>

    );
}