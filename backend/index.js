const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
dotenv.config();

const app = express();
const port = 3000;

mongoose.connect(process.env.MONGO_URI)
.then((result) => {
    console.log('Connected to the database');
}).catch((err) => {
    console.log('Error connecting to the database');
});


// routers
const UserRouter = require('./routers/userRouter');

// middlewares
app.use(express.json());
app.use(
    cors({
        origin: '*',
    })
)
app.use('/user',UserRouter);





app.get('/',(req,res)=>{
    res.send('Hello from the backendlngklenklgekl!');
})
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})

