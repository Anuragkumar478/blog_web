const express = require('express');
const app = express();
const db = require('./db'); // ✅ MongoDB connection
const create = require('./route/Create'); // ✅ Routes

app.use(express.json()); // ✅ Parses JSON requests
app.use('/api', create); // ✅ Routes prefixed with /api

app.get('/', (req, res) => {
    res.send('that is working ');
});

app.listen(4000, () => {
    console.log('app is running on port 4000');
});
