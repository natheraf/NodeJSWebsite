const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, '../../frontend/build')));
  
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../../frontend/build', 'index.html'));
});

const port = process.env.PORT || 8080;

app.listen(port, () => console.log(`Express Server on port ${port}`));