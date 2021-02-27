import express from 'express';

const app = express();

app.get('/',(req,resp) => {
  return resp.json({message: 'oi 2'});
})

app.listen(3333, () => {
  console.log('server running on port 3333');
});
