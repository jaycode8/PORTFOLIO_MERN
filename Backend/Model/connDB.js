const mongoose = require('mongoose');
require('dotenv').config();
const dburl = process.env.dbURL;

mongoose.connect(dburl, { useNewUrlParser: true }, (err) => {
    if (err) {
        console.error(err.message);
    } else {
        console.info("Successfully connected to mongo DataBase");
        console.log(dburl)
    };
});
