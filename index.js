import express from 'express';

const app = express();
const PORT = 3000; // You can change this port

// Define a route
app.get('/', (req, res) => {
  res.sendFile("templates/index.html",{root:__dirname});
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
