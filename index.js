const express = require('express');
const cors = require('cors'); 
const app = express();
const port = process.env.PORT || 5000;


// Enable CORS for all routes
app.use(cors());

app.get('/api', (req, res) => {
    res.send({ message: 'Hello from backend!' });
});

app.get('/', (req, res) => { // For health check
    res.status(200).json({ status: 'UP' });
  });


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
