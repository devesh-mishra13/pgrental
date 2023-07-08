import './box1.css'

export default function Card01(){
    const onhandleclick=()=>{
        return(
            console.log("for business")
        );
    }
    return(
        <div className="box1">
            <h1 style={{height:"40%"}}>FOR BUSINESS</h1>
            <button onClick={onhandleclick()} style={{height:"60%"}}>CLICK HERE!</button>
        </div>
    );
}