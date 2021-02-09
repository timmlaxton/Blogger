const express = require('express');
const connectDB = require('./config/db');

const app = express();

connectDB();

app.get('/', (req, res) => res.json({ msg: 'Welcome to my blog' }));

app.use('api/users', require('./routes/users'));
app.use('api/auth', require('./routes/auth'));
app.use('api/blogs', require('./routes/blogs'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
