const express = require('express');
const cors = require('cors');
const app = express();

// Enable CORS for localhost:4200
app.use(cors({
    origin: 'http://localhost:4200',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

app.get('/api/User/list', (req, res) => {
    res.json({ users: [] }); // Example response
});

app.listen(5162, () => {
    console.log('Server is running on http://localhost:5162');
});
