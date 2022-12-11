import "./profileset.css"
import Sidenav from "../../components/sidenav/Sidenav";
import { useContext,useState } from "react";
import { Context } from "../../userverif/Context";
import { Link } from "react-router-dom";
import axios from "axios";


function ProfileSetting() {
const [username, setUsername] = useState("");
const [email, setEmail] = useState("");
const [file, setFile] = useState("");
const [password, setPassword] = useState("");
const [success, setSuccess] = useState(false);
const {user, dispatch} = useContext(Context);
const PF = "http://localhost:5000/images/";
//-------handle submit
const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({type:"UPDATE_STAR"});
    const updatedUser = {
        userId: user._id,
        username,email, password
    };

// if there is user pic , create data
if (file) {
    const data =new FormData();
    const filename = Date.now() + file.name;
    data.append("name", filename);
    data.append("file", file);
    updatedUser.profilePic = filename;
    try {
        await axios.post("/upload", data);
    } catch (err) {}
    }
    try {
       const res = await axios.put("/users/" + user._id, updatedUser);
        setSuccess(true);
        dispatch({type:"UPDATE_SUCCESS", payload:res.data});
    } catch (err) {
        dispatch({type:"UPDATE_FAILURE"});
        //console.log("update not successful");
    }
};

return (
<div className="settings">
<div className="profileWrapper">
<div className="profileTitle">
<span className="prpfileTitleUpdate">Update Your Account</span>
<span className="profileTitleDelete">Delete Account</span>
</div>
<form className="profileForm"  onSubmit={handleSubmit}>
<label>Profile Picture</label>
<div className="settingsPP">

    <img src={file? URL.createObjectURL(file): PF + user.profilePic} alt="profile" />
    <label htmlFor="fileInput">
    <i title="upload image" className="settingsPPIcon far fa-user-circle"></i>
    </label>
    <input id="fileInput" type="file" style={{ display: "none" }}
    className="settingsPPInput" onChange={(e)=>setFile(e.target.files[0])}/>
</div>

<label>Username</label>
<input type="text" placeholder={user.username}
onChange={e=>setUsername(e.target.value)}/>

<label>Email</label>
<input type="email" placeholder={user.email}
onChange={e=>setEmail(e.target.value)}/>

<label>Password</label>
<input type="password" onChange={e=>setPassword(e.target.value)}/>

<button className="profileSubmitButton" type="submit">Update </button>
 {success && <span  style={{color:"green",textAlign:"center", marginTop:"20px"}}> 
   Profile has been updated </span>}
</form>
</div>
<Sidenav/>
</div>
)
}

export default ProfileSetting;