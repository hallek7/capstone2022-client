import React from 'react'
import "./eachpost.css"
import { Link, useLocation } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Context } from "../../userverif/Context";


function Eachpost() {
const location = useLocation()
const path = location.pathname.split("/")[2];
const [adv, setPost] = useState({})
const PF = "http://localhost:5000/images/";
const {user} = useContext(Context);
const [title, setTitle] = useState("");
const [desc, setDesc] = useState("");
const [update, setUpdate] = useState(false);


useEffect(() => {
const getPost = async()=> {
const res = await axios.get("/ads/" + path);
setPost(res.data);
setTitle(res.data.title);
setDesc(res.data.desc);
};
getPost();
}, [path]);

//-----------handle delete ------------//
const handleDelete =  async()=>{
try{
await axios.delete(`/ads/${adv._id}`, {
data:{username:user.username}
}); 
//console.log("post has been deleted");
window.location.replace("/");
}
catch(err){
console.log("you can't delete post")
}
};
//--------- handle update ------------------//
const handleUpdate = async () => {
try {
await axios.put(`/ads/${adv._id}`, {
username: user.username,
title, desc,
});
setUpdate(false)
} catch (err) {}
};


return (
<div className="eachpost"> 
<div className="eachPostWrapper">
{adv.photo && (
<img className="eachPostImg"
src={PF + adv.photo} alt ="eachImg"/>
)}
{ update? (<input type="text" value={title} className="eachPostTitleInput"
autoFocus  onChange={(e) => setTitle(e.target.value)}/> ):

( <h1 className="eachPostTitle"> {title}
{adv.username === user?.username &&(
<div className="eachPostEdit">
<i className="eachPostIcon far fa-edit"  onClick={() => setUpdate(true)}></i>
<i className="eacgPostIcon far fa-trash-alt" onClick={handleDelete}></i>
</div>

)}
</h1>
)}

<div className="eachPostInfo">
<span>Author: 
<Link to={`/?user=${adv.username}`} className="link"> {adv.username}  
<b className="eachPostAuthor"> </b>
</Link> </span>

<span className="postDate">{new Date(adv.createdAt).toDateString()}</span>
</div>
{update? (<textarea className="eachPostDescInput" value={desc}
onChange={(e)=> setDesc(e.target.value)}/>):(

<p className="eachPostDesc">{desc}<br/></p>
)}

{update && (
    <button className="singlePostButton" onClick={handleUpdate}>
    Update Post
    </button>
    )}
</div>
</div>
);
}

export default Eachpost