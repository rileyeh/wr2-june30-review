let games = [
    {
        id: 17,
        name: 'Splendor', 
        rating: 5
    }, 
    {
        id: 24,
        name: 'Villagers', 
        rating: 4
    },
    {
        id: 32, 
        name: 'Codenames', 
        rating: 3
    },
    {
        id: 33, 
        name: 'Fluxx', 
        rating: 5
    }
]

module.exports = {
    readGames: (req,res) => {
       res.status(200).send(games)
    },
    updateGame: (req,res) => {
        const {id} = req.params
        const {name, rating} = req.body
        const index = games.findIndex(e => +e.id === +id)
        const newGame = {
            id: +id,
            name,
            rating
        }
        games.splice(index, 1, newGame)
        res.status(200).send(games)
    }
}