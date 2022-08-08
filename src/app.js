let productRouter = require("./routes/product.routes").router;
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
var app = express();

const db = require("./database");
var corsOptions = {
    origin: "*"
};

app.use(cors(corsOptions));
app.use(express.json());
app.use('/product',productRouter);
db.sequelize.sync()
    .then(() => {
        console.log("Synced db.");
    })
    .catch((err) => {
        console.log("Failed to sync db: " + err.message);
    });

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
