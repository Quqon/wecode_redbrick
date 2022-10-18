require('dotenv').config();

const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');

const router = require('./src/routes');

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(router)

app.get("/ping", (req, res) => {
  res.json({ message: "pong "});
});

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Listening to request on 127.0.0.1:${port}`);
});