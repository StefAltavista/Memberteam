const express = require("express");
const app = express();
const authRoutes = require("./routes/authRoute");
const path = require("path");

const db = require("../database/db.js");
const PORT = process.env.PORT || 6001;

const secret =
    process.env.NODE_ENV == "production"
        ? process.env
        : require("../config.json");

app.use(express.json());
app.use(express.static(path.join(__dirname, "..", "public")));
app.use(authRoutes);

setTimeout(async () => {}, 2000);

db.connect(secret);
app.listen(PORT, async () => {
    console.log(`Server listening, port:${PORT}`);
});
