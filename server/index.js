const express = require('express')
const app = express()
const ctrl = require('./controller.js')

app.use(express.json())

app.get('/api/games', ctrl.readGames)
app.put('/api/games/:id', ctrl.updateGame)

app.listen(3005, () => console.log(`running on port 3005`))