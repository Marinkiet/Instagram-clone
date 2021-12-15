import './App.css';
import Post from './Post';
function App() {

  //const [state, setstate] = useState([]);

  return (
    <div className="App">
      {/*Header*/}
      <div className="app_header">
      <img className="app_headerImage" src="logo.jpg"
      alt="logo"></img></div>
    
      {/*post*/}
      <Post
      username="MarinkieJ"
      caption=" Wisper Memoji"
      imageurl="post (1).png"
      profilepic="pp (1).jpg"/>
      <Post
      imageurl="post (2).png"
      caption=" Coder all day Memoji"
      username="MarinkieM"/>
      <Post
      imageurl="post (3).png"
      caption=" Hello Memoji"
      username="MarinkieK"
      profilepic="pp (3).png"/>
      
      <Post
      imageurl="post (4).png"
      caption=" Hi Memoji"
      username="Lethabo_b"/>
      <Post
      imageurl="post (5).png"
      caption=" Call Me Memoji"
      username="MarinkieR"
      profilepic="pp (5).png"/>
      
      <Post
      imageurl="post (6).png"
      caption=" Sick Memoji"
      username="MarinkieS"
      profilepic="pp (6).png"/>
      {/*post*/}
      {/*post*/}
    </div>
  );
}

export default App;

//timestamp 50:30