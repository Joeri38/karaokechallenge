import React, {Component} from 'react'
import '../assets/css/LanguagePage.css';
import Lyrics from './Lyrics.js';

class LanguagePage extends Component {

  render() {

    // read songlist.json
    async function pickSong(language) {
      const response = await fetch('/songlist.json');
      return await response.json().then(songlist => {
        let song = songlist[language];
        document.getElementById('song-title').innerText = song.title + " - " + song.artist;
        document.getElementById('youtube-video').src = `https://youtube.com/embed/${song.youtube_id}`;
        //document.getElementById('new-title').props.title = {'title': song.title, 'artist': song.artist, 'language': language};
        // add side-effect with hook to change props
      });
    }

    const language = this.props.match.params.language;
    pickSong(language);

    return (
      <div className="language">

        <h2 id="song-title"></h2>
        <h3>({language}) </h3>

        <Lyrics language={language}/>

        <iframe className="video" width="800" height="500" id="youtube-video" src="">
        </iframe>

      </div>
    );
  }

}

export default LanguagePage;
