const express = require("express")
// console.log(typeof express) // function
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World. You are on the homepage.')
})
  
app.listen(3000, () => {
    console.log("Server is running on port 3000.")
})