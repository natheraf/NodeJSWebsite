const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, '../build')));
  
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../build', 'index.html'));
});

const port = process.env.PORT || 4001;

app.listen(port, () => console.log('Express Server on port 8080.'));