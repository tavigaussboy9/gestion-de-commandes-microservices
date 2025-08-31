const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use(express.json());

// Connexion à MongoDB
mongoose.connect('mongodb://localhost/paiements', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB...', err));

// Routes
app.post('/paiements', (req, res) => {
  // Logique de traitement de paiement
  res.send('Paiement effectué');
});

const PORT = process.env.PORT || 3003;
app.listen(PORT, () => console.log(`Service Paiements en écoute sur le port ${PORT}...`));
