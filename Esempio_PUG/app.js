const express = require('express');
const app = express();
const people = require('./people.json')

app.set('view engine', 'pug');

app.use(express.static(__dirname + '/public'));

app.get('/', function ( req, res){
    //res.send('Hello world!')
    res.render('index', {
        title: 'Homepage',
        people : people.profiles
    });
});

app.get('/profile', (req, res) =>{
    const person = people.profiles.find((p) => p.id === req.query.id);
    res.render('profile', {
        title: `About ${person.firstname} ${person.lastname}`,
        person,
    });
});

app.listen(3000, function(){
    console.log('Example app listening on port 3000!')
});

