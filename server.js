const express = require('express');
const app = express();
const db = require('./db'); // ✅ MongoDB connection
const create = require('./route/Create'); // ✅ Routes
const deleteb = require('./route/delete'); 
const update=require('./route/Update');
const Read=require('./route/Read');

app.use(express.json()); // ✅ Parses JSON requests
app.use('/api', create); // ✅ Routes prefixed with /api
app.use('/api',deleteb);
app.use('/api',update);
app.use('/api',Read);



app.get('/', (req, res) => {
    res.send('that is working ');
});

app.listen(4000, () => {
    console.log('app is running on port 4000');

});
