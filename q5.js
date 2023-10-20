const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000; 

app.use(bodyParser.json());

app.post('/', (req, res) => {
    const receivedData = req.body; 
    res.json(receivedData); 
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
