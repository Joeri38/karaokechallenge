import React, {Component} from 'react'
import '../assets/css/Playlist.css';
import { Link } from 'react-router-dom';

class PlayList extends Component {

  render() {

    const languageArray = ['French', 'Flemish', 'Dutch', 'Spanish', 'Portuguese', 'Arabic'];

    const originalLanguage = {
      French: 'Français',
      Flemish: 'Vlaemsch',
      Dutch: 'Nederlands',
      Spanish: 'Español',
      Portuguese: 'Português',
      Arabic: 'عربي'
    };

    return (
      <div className='playlist'>
        <h2>Playlist</h2>
        <ul className='unordered-list'>

          {/* We map an array, but we actually want this for an object. For
            loop doesn't work */}
          {languageArray.map(language => (
            <Link to={`/playlist/${language.toLowerCase()}`}>
              <li className='language'> {originalLanguage[language]} ({language}) </li>
            </Link>
          ))}
        </ul>
      </div>
    );
  }

}

export default PlayList;
