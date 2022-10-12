//? Dependencies
const express = require('express');

//? files
const {port} = require('./config')

//?Initial configs
const app = express()

app.use(express.json())

app.get('/', (req,res) => {
  res.status(200).json({
    message: 'OK!', 
    users: `localhost: ${port}/api/v1/users`
  })
})






app.listen(9000,() => {
  console.log(`Server started at port ${port}`);
})