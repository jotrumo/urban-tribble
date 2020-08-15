const express = require('express');
const PORT = process.env.PORT || 3000;
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const router = express.Router();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, '../client/dist')));

router.post('/newUser', (req, res) => {
  console.log(req.body)
});

app.use('/', router);

app.listen(PORT, () => {
  console.log(`Server is running on PORT: ${PORT}`);
});