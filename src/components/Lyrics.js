import '../assets/css/Lyrics.css';

function Lyrics(props) {

  const language = props.language;
  const originalLyricsPath = `/lyrics/original/${language}.txt`;
  const translatedLyricsPath = `/lyrics/translated/${language}.txt`;

  function fillLyrics(path, id) {
    console.log('Fetching the lyrics!');
    catchText(path)
      .then(text => {
        document.getElementById(id).innerText = text;
        if (language === 'arabic' && id === 'original-lyrics'){
            document.getElementById(id).style = "text-align:right;";
        }
      })
  }

  async function catchText(path) {
    const response = await fetch(path);
    return await response.text();
  }

  fillLyrics(originalLyricsPath, 'original-lyrics');
  fillLyrics(translatedLyricsPath, 'translated-lyrics');

  return (

    <div className="lyrics">
      <div className="grid-container">

        <div className="left-lyrics">
          <p id="original-lyrics"></p>
        </div>

        <div className="right-lyrics">
          <p id="translated-lyrics"></p>
        </div>

      </div>
    </div>

  );
}

export default Lyrics;
