const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World');
});
// eslint-disable-next-line no-console
console.log(`Магія відбувається в порту${process.env.APP_PORT}`);
app.listen(process.env.APP_PORT);
