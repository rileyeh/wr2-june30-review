import React from 'react' 

const Character = props => {
    return (
        <div>
            <h2>{props.person.name}</h2>
            <h3>{props.person.birth_year}</h3>
            <p>{props.person.hair_color}</p>
            <p>{props.person.eye_color}</p>
        </div>
    )
}

export default Character