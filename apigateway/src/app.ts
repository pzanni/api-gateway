const express = require('express')
const cors = require('cors');
const app = express()
const port = 9000;
const itemRoutes = require('./routes/item-routes');
const userRoutes = require('./routes/user-routes');
const categoryRoutes = require('./routes/category-routes');
const reviewRoutes = require('./routes/review-routes');
const cookieParser = require('cookie-parser');
const path = require('path');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/items', itemRoutes);
app.use('/users', userRoutes);
app.use('/categories', categoryRoutes);
app.use('/reviews', reviewRoutes);

app.get('/', (req: any, res: any) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Api gateway listening at http://localhost:${port}`)
})

module.exports = app;