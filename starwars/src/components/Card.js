import React from 'react';

class Card extends React.Component {
    render() {
        console.log()
        let id = this.props.id
        let char = this.props.name
        let eyeColor = this.props.eye_color 
        let bithYear = this.props.birthYear
        let gender   = this.props.gender
        let hairColor = this.props.hairColor 
        let height = this.props.height
        return (
            <div className="card" id={id}>
           <h2 className="name">{char}</h2>
           <ul>
               <li>
               Eye Color: {eyeColor}
               </li>
               <li>
               Birth Year: {bithYear}
               </li>
               <li>
               Gender: {gender}
               </li>
               <li>
               Hair Color: {hairColor}
               </li>
               <li>
               Height: {height}
               </li>
            </ul>
            </div>
        )
    }
}

export default Card;