const path = require('path');
const express = require('express');
const app = express();
const port = 3000;
app.use(express.static('public'));
// add views directory path
app.set('views', path.join(__dirname, 'views'));
// add views template engine
app.set('view engine', 'ejs');

app.get('/user/:username', (req, res)=> {
    // get parameter data from address row
    let user = req.params.username;
    // use this data in template
    res.render('index.ejs', {username : user});
});

app.listen(port, ()=>{
    console.log('Server started on http://localhost:3000');
});