var http = require('http');
var express = require('express');
var bodyParser = require('body-parser');
var urlServer = 'http://localhost:5000';

var app = express();

var teams = [
  {
    id: 1,
    logo: 'http://www.logo-designer.co/wp-content/uploads/2017/01/2017-interbrand-logo-design-juventus-football.png',
    name: 'Juventus',
    country: 'Italie',
    stadium: 'Juventus Stadium',
    coach: 'Allegri',
    founded: 1897,
    cup: 5
  },
  {
    id: 2,
    name: 'PSG',
    logo: 'https://upload.wikimedia.org/wikipedia/fr/thumb/8/86/Paris_Saint-Germain_Logo.svg/768px-Paris_Saint-Germain_Logo.svg.png',
    country: 'France',
    stadium: 'Parc des Princes',
    coach: 'Emery',
    founded: 1970,
    cup: 2
  },
  {
    id: 3,
    logo: 'https://upload.wikimedia.org/wikipedia/fr/a/aa/Blason_RC_Strasbourg_1976.png',
    name: 'RC Strasbourg',
    country: 'France',
    stadium: 'La Meinau',
    coach: 'Laurent',
    founded: 1902,
    cup: 1
  },
  {
    id: 4,
    logo: 'http://www.logo20.com/logo-real-madrid/logo-real-madrid-2.png',
    name: 'Real Madrid',
    country: 'Espagne',
    stadium: 'Santiago Bernabeu',
    coach: 'Zidane',
    founded: 1912,
    cup: 6
  },
  {
    id: 5,
    logo: 'http://images.footmercato.net/club/400x400/13089.png',
    name: 'Gomido',
    country: 'Togo',
    stadium: 'Gomido Arena',
    coach: '',
    founded: 1974,
    cup: 2
  },
  {
    id: 6,
    logo: 'https://upload.wikimedia.org/wikipedia/id/thumb/4/4d/AS_Roma_Logo_2013.svg/463px-AS_Roma_Logo_2013.svg.png',
    name: 'AS Roma',
    country: 'Italie',
    stadium: 'Olimpico',
    coach: 'Di Francesco',
    founded: 1899,
    cup: 1
    },
];

var players = [
  {
    id: 1,
    pic: '',
    lastname: 'Ronaldo',
    firstname: 'Cristiano',
    current_team: teams[3].name,
    country: 'Portugal',
    position: 'Attaquant'
  },
  {
    id: 2,
    pic: '',
    lastname: 'Messi',
    firstname: 'Lionel',
    current_team: 'FC Barcelone',
    country: 'Argentine',
    position: 'Attaquant'
  },
  {
    id: 3,
    pic: '',
    lastname: 'Buffon',
    firstname: 'Gianluigi',
    current_team: teams[0].name,
    country: 'Italie',
    position: 'Gardien'
  }
];


// Middlewares
app.use(bodyParser.json());
app.use(express.static('public'));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "PUT, DELETE");
  next();
});

// Routes
app.get('/teams', (req, res) => res.json(teams));
app.get('/players', (req, res) => res.json(players));

app.listen(5000, () => console.log('Serveur écoute le port 5000...'));