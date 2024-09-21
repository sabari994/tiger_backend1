const express = require('express');
const {connectdb} = require('./database/db');
const userRouter  = require('./router/router');
const cors = require('cors');
require('dotenv').config();
const fs = require('fs');
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.urlencoded({extended:true}))
app.use(express.json());

const path = require('path')
connectdb();

app.use('/text',express.text());
app.use('/api',userRouter);
app.use(express.static(path.join(__dirname,'my files')))

app.get('/new',(req,res) =>{
  res.sendFile(path.join(__dirname,'my files','white-jaguar.jpg'))

})

app.set('title','im not good boy');
app.get('/get',(req,res) => {
  res.send(app.get('title'))
})

app.locals.domain = 'sabari.vizza@gmail.com'
app.locals.age = '28'
app.locals.company = 'Vizza pvt Ltd'

// app.get('/test', (req, res) => {
//   console.log("app.local", app.locals);
//   res.send('Check your console for app.locals output.');
// });
// app.get('/dashboard', (req, res) => {
//   res.send(`
//       <h1>Welcome to your dashboard!</h1>
//       <p><a href="/new">Click me..!</a></p>
//     `);
// });
 
  
app.listen(PORT,() =>{
    console.log("Server is running successfully on", PORT);
})

