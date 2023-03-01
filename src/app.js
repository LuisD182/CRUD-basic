const express = require('express')
const app = express();
const PORT = 9333;
const myDataBase = require('./utilis/database')
const initModels = require('./models/initModels')
const toDoRouter = require('./routes/to_do.routes')
const cors = require('cors')
initModels();


app.use(cors());
app.use(express.json());
app.use(toDoRouter)



myDataBase.authenticate()
    .then(() => {
        console.log('myDataBase has succesfully been authenticaded');
    })
    .catch((error) => {
        console.log(error);
    })

myDataBase.sync()
    .then(() => {
        console.log('myDataBase has been sncroniced');
    })
    .catch((error) => {
        console.log(error);
    })

app.get('/', (req, res) => {
    res.status(200).json({ mesagge: 'Welcome to the server!' })
})

app.listen(PORT, () => {
    console.log('Running at port 9333');
})