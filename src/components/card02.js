import './box1.css'
import { Link } from 'react-router-dom';

export default function Card02(){
    return(
        <div className="box1">
            <h2>FOR BUSINESS</h2>
            <p>Register your house for rent</p>
            <div className='buttondiv'>
            <button><Link className='no-shine' to='/business'>CLICK HERE!</Link></button>
            </div>
        </div>
    );
}