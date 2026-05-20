import express from 'express'
const app = express();
const port = 3000;

app.use(express.static('example-file'));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/home', (req, res) => {
  res.send('displaying you the home page');
});

app.get('/profile/:slug', (req, res) => {
  res.send('This is your profile section');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});