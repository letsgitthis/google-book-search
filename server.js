const express = require("express");
const mongoose = require("mongoose");
const apiRoutes = require("./routes/index");
const path = require("path");
const app = express();

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

// Adds API route
app.use('/api', apiRoutes);

// Send requests to client
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// Connect to MongoDB
mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost/google-book-store',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    }
);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
});
