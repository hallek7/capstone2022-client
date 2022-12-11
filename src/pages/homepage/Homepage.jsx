import React, { useEffect, useState } from 'react'
import './homepage.css';
import Header from "../../components/header/Header";
import Ads from  "../../components/ads/Ads";
import Sidenav from "../../components/sidenav/Sidenav";
import axios from "axios";
import { useLocation } from 'react-router-dom';

function Homepage() {
  // define post 
  const [ads, setPosts] = useState([]);
 
  const { search } = useLocation();
 
  useEffect(() => {
    const fetchPosts = async()=>{
    const res = await axios.get("/ads" + search);
    setPosts(res.data);

    };
    fetchPosts();
  }, [search]);
  return (
    <> 
    <Header />
    <div className="home">
    <Ads ads={ads}/>
    <Sidenav/>
    </div>
    </>
  );
}

export default Homepage;