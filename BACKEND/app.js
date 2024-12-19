const adminRoutes = require('./routes/adminRoutes');
console.log("Admin routes loaded successfully");
const express = require('express');
const bodyParser = require('body-parser');
const db = require('./config/db'); // Database connection
const userRoutes = require('./routes/userRoutes'); // User routes
const path = require('./Frontend/index.html'); // To resolve path issues for static files

const app = express();

// Middleware
app.use(bodyParser.json());

// Serve static files from the frontend folder
app.use(express.static(path.join(__dirname, '../frontend'))); // Assuming 'frontend' is at the same level as 'backend'

// Routes
app.use('/api/users', userRoutes);

// Test Route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend', 'index.html')); // Serve the index.html from the frontend folder
});

// Sync database and start the server
const PORT = 3000;

db.sync()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server running on http://localhost:${PORT}`);
        });
    })
    .catch((err) => {
        console.error('Error syncing database:', err);
    });
