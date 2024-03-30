const express = require('express');
const request = require('request');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/temperature', (req, res) => {
  // Replace <channel_id> and <api_key> with your ThingSpeak channel ID and API key
  //channel_id= 2490993;//api_key=;
  const url = `https://api.thingspeak.com/channels/2490993/feeds.json?api_key=PGZK51W7HTXEVQ8J&results=2`;

  request(url, (error, response, body) => {
    if (!error && response.statusCode === 200) {
      const data = JSON.parse(body);
      const temperature = data.feeds[0].field1;
      res.send(`Current Temperature: ${temperature} °C`);
    } else {
      res.status(500).send('Error fetching temperature data');
    }
  });
});

app.use(express.static('public'));

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
