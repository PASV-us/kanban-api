const express = require('express');
const routes = require('./routes');
const bodyParser = require('./bodyParser');
const cors = require('cors')

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors())
bodyParser(app);
routes(app);

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`)
})
