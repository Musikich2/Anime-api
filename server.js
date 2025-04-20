const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();
const port = 4200;

app.use(cors());

app.get('/api/rooms', async (req, res) => {
  try {
    const response = await axios.get('https://api.webhotelier.net/v1/property/rooms', {
      headers: {
        Authorization: 'Bearer YOUR_API_TOKEN' // replace with actual token if required
      }
    });

    // Example transformation
    const rooms = response.data.rooms.map(room => ({
      name: room.name,
      pricePerNight: room.price?.amount, // adjust depending on response structure
      maximumGuests: room.max_occupancy,
      available: room.available,
      images: room.images // ensure this is an array of image objects with `.source`
    }));

    res.json(rooms);

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to fetch rooms' });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
