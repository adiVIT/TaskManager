const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const taskRoutes = require('./src/routes/taskRoutes');
var path= require('path');
const methodOverride = require('method-override');

const app = express();
const port = 3000;

app.use(bodyParser.json());

// Set EJS as the view engine
app.use(express.static(path.join(__dirname,'public')));

app.set('view engine', 'ejs'); 
mongoose.connect('mongodb://localhost:27017/taskmanager');

// Listen for the 'open' event to know when the database connection is established
mongoose.connection.once('open', () => {
  console.log('Connected to MongoDB database');
});
app.use(methodOverride('_method'));
app.use('/tasks', taskRoutes);



app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
