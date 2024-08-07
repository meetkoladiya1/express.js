const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Welcome to Express');
    res.status(200);
    res.end();
})

app.get('/login', (req, res) => {
    res.json({msg:'Welcome to Login Page'});
    res.end();
})

app.post('/login', (req, res) => {
    res.json({msg:'Login Page Post Method'});
    res.end();
})

app.listen(8000, () => {
    console.log('Server Start at http://localhost8000');
});