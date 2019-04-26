import React, { Component } from 'react';
import './App.css';

//Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faJedi } from '@fortawesome/free-solid-svg-icons'

import Card from './components/Card';

//Font Awesome
library.add(faJedi)

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: []
    };
  }

  componentDidMount() {
    this.getCharacters('https://swapi.co/api/people/');
  }

  getCharacters = URL => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        console.log(data)
        this.setState({ starwarsChars: data.results });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  render() {

    const chars = this.state.starwarsChars
    let char = chars.map(char => char)
    char = char.map(character => 
    <Card 
    id={character.url}
    birthYear={character.birth_year} 
    gender={character.gender} 
    hairColor={character.hair_color} 
    height={character.height} 
    name={character.name} 
    eye_color={character.eye_color} 
    key={character.created}
     />)

    return (
      <div className="App">
        <h1 className="Header">React <FontAwesomeIcon id="jedi" icon="jedi" color="white" spin/> Wars</h1>
        
        {char}
      </div>
    );
  }
}

export default App;
