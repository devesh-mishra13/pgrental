import './box1.css'

export default function Card02(){
    const onhandleclick=()=>{
        return(
            console.log("for business")
        );
    }
    return(
        <div className="box1">
            <h2>FOR BUSINESS</h2>
            <p>Register your house for rent</p>
            <div className='buttondiv'>
            <button onClick={onhandleclick()}>CLICK HERE!</button>
            </div>
        </div>
    );
}