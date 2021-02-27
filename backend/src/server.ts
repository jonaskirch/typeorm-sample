import express from 'express';

const app = express();

app.get('/', (req, resp) => resp.json({ message: 'oi' }));

app.listen(3333, () => {
  console.log('server running on port 3333');
});
