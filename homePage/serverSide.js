const express = require('express');
const axios = require('axios');
const app = express();
const port = 5000;

const apiKey = 'YOUR_API_KEY';
const user = 'TheCatItalyDude';

app.use(express.static('public'));

app.get('/now-playing', async (req, res) => {
    try {
        const response = await axios.get(`https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${user}&api_key=${apiKey}&format=json`);
        const track = response.data.recenttracks.track[0];
        const nowPlaying = track["@attr"] && track["@attr"].nowplaying ? `${track.artist['#text']} - ${track.name}` : 'No music currently playing';
        res.json({ nowPlaying: nowPlaying, url: track.url });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('Internal Server Error');
    }
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
