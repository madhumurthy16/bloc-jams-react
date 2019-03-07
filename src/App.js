import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import Landing from './components/Landing';
import Library from './components/Library';
import Album from './components/Album';


class App extends Component {
  constructor(){
    super();
    this.previousLink = null;
  }

  handleClick = (e) => {
    if(this.previousLink !== null) {
      this.previousLink.classList.remove('active');
    }
    e.target.classList.add('active');
    this.previousLink = e.target;

  }

  render() {
    return (
      <div className="App">

          <nav className="navbar navbar-expand-md navbar-light fixed-top bg-light">
            <Link className="navbar-brand" to='/'>Swell Sounds</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav ml-auto">
                  <Link className="nav-item nav-link active" to='/' onClick={(e) => this.handleClick(e)}>Landing<span className="sr-only">(current)</span></Link>
                  <Link className="nav-item nav-link" to='/library' onClick={(e) => this.handleClick(e)}>Library</Link>
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
            <div className="container d-flex align-items-center justify-content-center">
              <p>©Swell Sounds 2018-2019</p>
            </div>
          </footer>

      </div>
    );
  }
}

export default App;
