const express = require('express');
const studentRouter = require('./src/employee/routes');
const app = express()
const port = 3000

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Welcome to my pet project!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});

app.use('/api/v1/employee', studentRouter);
