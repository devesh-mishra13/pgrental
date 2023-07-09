import './box1.css'
import { Link } from 'react-router-dom';

export default function Card02(){
    return(
        <div className="box1">
            <h2>FOR BUSINESS</h2>
            <p>Register your house for rentals</p>
            <div className='buttondiv'>
            <button className='but'><Link className='no-shine' to='/business'>CLICK HERE!</Link></button>
            </div>
        </div>
    );
}