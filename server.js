const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const groupRouter = require('./routes/group');  

const app = express();
const port = process.env.PORT || 3000;  

mongoose.connect('mongodb+srv://lkj:778899@cluster0.tmqp1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', { useNewUrlParser: true, useUnifiedTopology: true });


app.use(bodyParser.json());


app.use('/api', groupRouter);


app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
