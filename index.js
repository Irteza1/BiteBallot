const express = require('express');
require('dotenv').config();
const connectToDatabase = require('./config/db');
const authRouter = require('./routes/authRoute');

const app = express();
const cors = require('cors');
app.use(express.json());

app.use(cors())
const port = process.env.PORT || 4200;



connectToDatabase();

// API routes
app.use('/auth', authRouter);


app.get('/', function (req, res) {
  res.status(200).send("Welcome!");
});
// Start the server to ensure both HTTP and WebSocket requests are handled:
server.listen(port, () => {
  console.log(`Server is running on port # ${port}`);
});