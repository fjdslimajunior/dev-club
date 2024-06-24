

import express from 'express';


const app = express()
app.use(express.json())

const users = []

app.post('/usuarios', (request, response) => {

    users.push(request.body)

    response.status(201).json(resquest.body)
})

app.get('/usuarios', (request, response) => {
    response.status(200).json(users)
})

app.listen(3000);

//Access
// F9N4QXNvr0ouIgV5