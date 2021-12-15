import './App.css';
import Post from './Post';
function App() {

  const [state, setstate] = useState([]);

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
      
      />
      <Post
      imageurl="post (2).png"
      caption=" Coder all day Memoji"
      username="MarinkieM"/>
      <Post
      imageurl="post (3).png"
      caption=" Hello Memoji"
      username="MarinkieK"/>
      <Post
      imageurl="post (4).png"
      caption=" Hi Memoji"
      username="MarinkieL"/>
      <Post
      imageurl="post (5).png"
      caption=" Call Me Memoji"
      username="MarinkieR"/>
      <Post
      imageurl="post (6).png"
      caption=" Sick Memoji"
      username="MarinkieS"/>
      {/*post*/}
      {/*post*/}
    </div>
  );
}

export default App;

//timestamp 50:30