// To run file write npm run devStart
const express = require('express')
const app = express()
const { userSchema } = require('./utils/user_schema')

// const Joi = require('joi')

// const {taskSchema} = require('./utils/task_schema')

app.use(express.json())


const users = [
    {
        id: 1,
        name: 'Ronsky',
        gender: 'male'
    },
    {
        id: 2,
        name: 'Ben',
        gender: 'male'
    },
    {
        id: 3,
        name: 'Miriam',
        gender: 'female'
    },
];



app.get('/api/users', (req, res) => {
    // res.send('Welcome to the tasks API')
    res.send(users)
});

app.get('/api/users/:id', (req, res) => {
    const requestedId = req.params.id;
    const userObj = users.find((userObj) => {
        // we return the user object that matches the requested id
        return userObj.id === parseInt(requestedId)
    });
    return res.send(userObj);
});


app.post('/api/users/', (req, res) => {
    // const { error, value } = userSchema.validate(req.body)
    // if (error) {
    //     // console.log(error)
    //     return res.status(400).send('The name should be at least 3 chars long.')
    // };
    // lets create the new object we will pass to the tasks array
    const newUser = {
        id: users.length + 1,
        name: req.body.name,
        gender: req.body.gender
    };
    //lets push in to the tasks array
    users.push(newUser)
    //lets send the whole tasks array as response
    res.status(201).send(newUser)

});




//accec ent vnciorment variables and get the port from there
const port = process.env.PORT || 3000

// var server = 

module.exports = app.listen(port, () => { console.log(`Server has started on port ${port}...`) })
