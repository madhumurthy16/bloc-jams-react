import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import Landing from './components/Landing';
import Library from './components/Library';
import Album from './components/Album';


class App extends Component {
  render() {
    return (
      <div className="App">

          <nav className="navbar navbar-expand-md navbar-light fixed-top bg-light">
            <a className="navbar-brand" href="#">Swell Sounds</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav ml-auto">
                  <Link className="nav-item nav-link active" to='/'>Landing<span class="sr-only">(current)</span></Link>
                  <Link className="nav-item nav-link" to='/library'>Library</Link>
              </div>
            </div>
          </nav>

          <main className="pt-5">
            <Route exact path="/" component={Landing} />
            <Route path="/library" component={Library} />
            
            {/*Route passes the slug to the Album component. 
            It is then accessible through props as this.props.match.params.slug in the Album component*/}
            <Route path="/album/:slug" component={Album} /> 
          </main>
          
          <footer id="footer">
            <div className="container">
              <p>© Swell Sounds 2018-2019</p>
            </div>
          </footer>

      </div>
    );
  }
}

export default App;
