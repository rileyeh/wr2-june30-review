import React, { Component } from 'react' 

class Game extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: this.props.game.name, 
            rating: this.props.game.rating,
            edit: false
        }
    }

    toggle = () => {
        let {edit} = this.state
        this.setState({
            edit: !edit
        })
    }

    handleChange = e => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        const {id} = this.props.game
        const {name, rating} = this.state
        this.props.updateGame(id, name, rating)
        this.toggle()
    }

    render() {
        console.log(this.props)
        return (
            <div>
                <h2>{this.props.game.name}</h2>
                <p>{this.props.game.rating}</p>
                {
                    this.state.edit
                    ?
                    <div>
                    <form onSubmit={this.handleSubmit}>
                        <input 
                            onChange={this.handleChange}
                            name='name'
                            value={this.state.name}
                            type='text'
                            placeholder='name of the game'/>

                        <input 
                            onChange={this.handleChange}
                            name='rating'
                            value={this.state.rating}
                            type='text'
                            placeholder='set a rating for this game'/>

                        <button>submit</button>
                    </form>
                    <button onClick={this.toggle}>cancel</button>
                    </div>
                    :
                    <button onClick={this.toggle}>edit</button>
                }
            </div>
        )
    }
}

export default Game