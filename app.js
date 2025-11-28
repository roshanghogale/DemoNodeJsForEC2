const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Set view engine and views directory
app.set('view engine', 'html');
app.set('views', path.join(__dirname, 'views'));

// Middleware to serve static files
app.use(express.static('public'));

// Routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'home.html'));
});

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'about.html'));
});

app.get('/guide', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'guide.html'));
});

app.get('/autoscaling', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'step5.html'));
});

// Health check endpoint for Target Group
app.get('/health', (req, res) => {
    res.status(200).json({
        status: 'healthy',
        timestamp: new Date().toISOString(),
        uptime: process.uptime(),
        app: 'Roshan\'s Node.js EC2 Demo'
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});