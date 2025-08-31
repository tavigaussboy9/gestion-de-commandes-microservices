const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use(express.json());

// Connexion à MongoDB
mongoose.connect('mongodb://localhost/produits', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB...', err));

// Routes
app.post('/produits', (req, res) => {
  // Logique d'ajout de produit
  res.send('Produit ajouté');
});

app.put('/produits/:id', (req, res) => {
  // Logique de mise à jour de produit
  res.send(`Produit ${req.params.id} mis à jour`);
});

app.delete('/produits/:id', (req, res) => {
  // Logique de suppression de produit
  res.send(`Produit ${req.params.id} supprimé`);
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Service Produits en écoute sur le port ${PORT}...`));
