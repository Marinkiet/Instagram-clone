import './App.css';
import Post from './Post';
import React, { useEffect, useState } from "react";
import { db } from './firebase';

function App() {

  const [posts, setPosts] = useState([]);

  //Use Effect -> Runs code based on conditions

  useEffect(() => {
    //Code runs once when page is refreshed, on changes to a e.g post it doesnt run again
    db.collection('posts').onSnapshot(snapshot => {
    setPosts(snapshot.docs.map(doc => doc.data()));  //everytime new post is added, code runs
    })
  }, []);


  return (
    <div className="App">
      {/*Header*/}
      <div className="app_header">
        <img className="app_headerImage" src="logo.jpg"
        alt="logo"></img>
      </div>
    
      {/*post*/}
      {
        posts.map(({id,post })=> (
          <Post key= {id} username={post.username} caption={post.caption} imageurl={post.imageurl}/>
        ))
      }
    </div>
  );
}

export default App;
