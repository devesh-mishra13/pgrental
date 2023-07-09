import './box1.css'
import { Link } from 'react-router-dom';

export default function Card01(){
    return(
        <div className="box1">
            <h2>FOR RENTAL</h2>
            <p>Checkout the best house for you and your family</p>
            <div className='buttondiv'>
            <button className='but'><Link className='no-shine' to='/rental'>CLICK HERE!</Link></button>
            </div>
        </div>
    );
}