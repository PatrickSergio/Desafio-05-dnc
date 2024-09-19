const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;


app.use(cors());
app.use(express.json());

const booksRouter = require('./routes/books');
app.use('/api', booksRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
