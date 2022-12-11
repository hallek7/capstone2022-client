import { Link } from "react-router-dom";
import "./adv.css";
//import Ads from "../ads/Ads";

function Adv({adv}) {
  const PF = "http://localhost:5000/images/";
return (
<div className="adv">  
{adv.photo && <img className="postImg" src={PF+adv.photo} alt="noShow" />}

<div className="postInfo">
    <div className="postCats">
      {adv.categories.map(c=>(
        <span className="postCat"> {c.name}</span>
      ))}

      </div>
          <Link to={`/adv/${adv._id}`} className="link">
        <span className="postTitle">{adv.title}</span>
          </Link>
        <hr />
        <span className="postDate">{new Date(adv.createdAt).toDateString()}</span>
      </div>
      <p className="postDesc">{adv.desc}</p>

</div>
);
}

export default Adv;
