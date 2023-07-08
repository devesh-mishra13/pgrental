import './box1.css'

export default function Card01(){
    const onhandleclick=()=>{
        return(
            console.log("for business")
        );
    }
    return(
        <div className="box1">
            <h2>FOR RENTAL</h2>
            <p>Checkout the best house for you and your family</p>
            <div className='buttondiv'>
            <button onClick={onhandleclick()}>CLICK HERE!</button>
            </div>
        </div>
    );
}