import React, {Component} from 'react'
import './App.css'
import axios from 'axios'
import List from './Components/List.js'
// import Game from './Components/Game.js'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      chars: [],
      games: []
    }
  }

  componentDidMount() {
    this.getChars()
    this.getGames()
  }

  getChars = () => {
    axios.get(`https://swapi.dev/api/people`)
      .then(res => {
        this.setState({
          chars: res.data.results
        })
      })
      .catch(err => {
        console.log(err)
      })
      // .catch(function(err) {
      //   console.log(err)
      // })
  }

  getGames = () => {
    axios.get('/api/games')
      .then(res => {
        this.setState({
          games: res.data
        })
      })
      .catch(err => {
        console.log(err)
      })
  }

  updateGame = (id, name, rating) => {
    axios.put(`/api/games/${id}`, {name, rating})
      .then(res => {
        this.setState({
          games: res.data
        })
      })
      .catch(err => {
        console.log(err)
      })
  }

  render() {
    return (
      <div>
        <List 
          data={this.state.games} 
          type='games'
          updateGame={this.updateGame}/>
          
        <List data={this.state.chars} type='sw'/>
      </div>
    )
  }
}

export default App
