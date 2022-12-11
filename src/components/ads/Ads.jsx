import './ads.css';
import Adv from '../adv/Adv';

function Ads({ads}) {
return (
  <div className="ads">
    {ads.map((p)=>(
      <Adv adv = {p}/>
    ))}
    </div>
)
}



export default Ads
