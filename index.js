const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(express.static('public'));

const apikey = 'shoti-3673ed33bc8186f@b37aba4c425fa@36@e6f30c0863dae181779bad3ee08@6ae95834eb@c8d1ccdf1d21a@b5@b4dc41afe7d@b8063f202@19c1c3fbf7bf1cbb@b1cac4b2d71fabc6c1b760ac0769490baaf4e6@c50';
const baseUrl = 'https://shoti.kenliejugarap.com/addShoti.php';

app.post('/addShoti', async (req, res) => {
    const { videoLink } = req.body;

    if (!videoLink) {
        return res.status(400).json({ message: 'Video link is required' });
    }

    const apiUrl = `${baseUrl}?apikey=${apikey}&videoLink=${encodeURIComponent(videoLink)}`;

    try {
      
        const { default: fetch } = await import('node-fetch');
        const response = await fetch(apiUrl);
        const data = await response.json();
        res.json({ message: '𝐕𝐈𝐃𝐄𝐎 𝐀𝐃𝐃𝐄𝐃 ', data });
    } catch (error) {
        res.status(500).json({ message: 'An error occurred', error: error.message });
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
