const express = require('express');
const { getMemes } = require('./memeController');
const { getCaptions } = require('./captionController');

const {
  newMemes,
  changeCaption,
  deleteMeme,
  getMemeList,
} = require('./newMemeController');

const app = express();

const PORT = 5050;

app.use(express.json());

app.get('/api/memes', getMemes);

app.get('/api/captions', getCaptions);

app.get('/api/newMemes', getMemeList);

app.post('/api/newMemes', newMemes);
app.put('/api/newMemes', changeCaption);
app.delete(`/api/newMemes/:id`, deleteMeme);
app.listen(PORT, () => console.log(`Rockin' it out on Port ${PORT}`));
