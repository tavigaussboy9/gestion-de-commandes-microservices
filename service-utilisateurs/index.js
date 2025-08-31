const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use(express.json());

// Connexion à MongoDB
mongoose.connect('mongodb://localhost/utilisateurs', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB...', err));

// Routes
app.post('/inscription', (req, res) => {
  // Logique d'inscription
  res.send('Utilisateur inscrit');
});

app.post('/connexion', (req, res) => {
  // Logique de connexion
  res.send('Utilisateur connecté');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Service Utilisateurs en écoute sur le port ${PORT}...`));
