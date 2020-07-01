import React from 'react' 
import Character from './Character.js'
import Game from './Game'

const List = props => {
    const mappedData = props.data.map(item => {
        return props.type === 'sw'
        ?
        <Character key={item.url} person={item}/>
        :
        <Game 
            key={item.id} 
            game={item}
            updateGame={props.updateGame}/>
    })

    return (
        <div>
            {mappedData}
        </div>
    )
}

export default List