import CarouselFade from './Main';
import Mainsidetext from './Mainsidetext';
import Card01 from './card01';
import Card02 from './card02';

export default function Home(){
return(
    <div>
        <div className='Main' style={{display:"flex"}}>
              <div style={{width:"70vw",height:"50vh"}}>
                <CarouselFade/>
              </div>
              <div>
              <Mainsidetext/>
              </div>
          </div>
          <div style={{width:"100vw",height:"30vh",display:"flex",justifyContent:"center",gap:"35px"}}>
            <Card01/>
            <Card02/>
          </div>
    </div>
);
}