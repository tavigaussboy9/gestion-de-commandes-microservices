const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use(express.json());

// Connexion à MongoDB
mongoose.connect('mongodb://localhost/commandes', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB...', err));

// Routes
app.post('/commandes', (req, res) => {
  // Logique de création de commande
  res.send('Commande créée');
});

app.put('/commandes/:id', (req, res) => {
  // Logique de mise à jour de commande
  res.send(`Commande ${req.params.id} mise à jour`);
});

app.delete('/commandes/:id', (req, res) => {
  // Logique d'annulation de commande
  res.send(`Commande ${req.params.id} annulée`);
});

const PORT = process.env.PORT || 3002;
app.listen(PORT, () => console.log(`Service Commandes en écoute sur le port ${PORT}...`));
