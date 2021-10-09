import '../assets/css/Home.css';
import PlayList from './Playlist';


function Home(props) {

  return (

    <div className="Home">
    
      <h2>Home</h2>
      <p>
        Welcome to the karaoke challenge!
      </p>

      <PlayList />

    </div>

  );
}

export default Home;
