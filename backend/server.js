const express = require('express');
const app = express();
const path = require('path');

// ✅ Add CORS
const cors = require('cors');
app.use(cors({
  origin: 'http://localhost:3000' // your React frontend URL
  // OR use '*' to allow all origins (not recommended for production)
}));

const PORT = process.env.PORT || 3000;
app.use(express.static('public'));

const connectDB = require('./config/db');
connectDB();

//template engine
app.set("views", path.join(__dirname, "/views"));
app.set("view engine", "ejs");

//Routes
app.use('/api/files', require('./routes/files'));
app.use('/files', require('./routes/show'));
app.use('/files/download', require('./routes/download'));

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
