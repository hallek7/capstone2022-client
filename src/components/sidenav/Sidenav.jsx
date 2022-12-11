import React from 'react';
import './sidenav.css';
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


function Sidenav() {
const [cats, setCats] = useState([]);
useEffect(()=>{
  const getCats = async ()=> {
    const res = await axios.get("/types");// get catagories   // and update
    setCats(res.data);
  };
  getCats();
}, []);
return (
<div className="sidenav">
<div className="sidebarItem">
<span className="sidebarTitle">ABOUT ME</span>
<img src='https://etc.usf.edu/techease/wp-content/uploads/2017/12/daylily-flower-and-buds-sharp.jpg' alt="ima"/> 
<p>Laboris sunt aute cupidatat velit magna velit ullamco dolore mollit </p>

</div>
<div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          {cats.map((c) => (
            <Link to={`/?cat=${c.name}`} className="link">
            <li className="sidebarListItem">{c.name}</li>
            </Link>
          ))}
        </ul>
      </div>
  </div>
);
}

export default Sidenav;