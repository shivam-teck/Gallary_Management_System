const express = require('express');
const app = express();
require('dotenv').config();

// Middleware
app.use(express.json()); // Parse JSON request bodies

// Import artist routes
const artistRoutes = require('./routes/artistRoutes');

// Register artist routes
app.use('/api/artists', artistRoutes);

// Root Route
app.get('/', (req, res) => {
    res.send('Gallery API is running...');
});

// Start the server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
