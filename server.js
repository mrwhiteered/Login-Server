const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Parse request body as JSON
app.use(bodyParser.json());

// Parse request body as URL encoded data
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files in the public directory

app.use(express.static('public'));

// Render login page
app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

// Authenticate user
app.post('/login', function(req, res) {
  const email = req.body.email;
  const password = req.body.password;

  // Authenticate the user, for example by querying a database
  if (email === 'user@example.com' && password === 'password') {
    res.sendFile(__dirname + '/public/home.html');
  } else {
    res.status(401).send('Incorrect email or password.');
  }
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, function() {
  console.log('Server listening on port ' + PORT);
});
