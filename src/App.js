import './assets/css/App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Home from './components/Home';
import LanguagePage from './components/LanguagePage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (

    <div className="App">
      <header className="App-header">

        <Router>
          <Navbar />
          <div className='main'>
            <Switch>
              <Route path='/' exact component={Home}/>
              <Route path='/about' component={About}/>
              <Route path='/playlist/:language' render={(props) => <LanguagePage {...props}></LanguagePage>}/>
            </Switch>
          </div>
        </Router>

      </header>
    </div>

  );
}

export default App;
