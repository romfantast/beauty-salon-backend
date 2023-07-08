const app = require('./app');
const mongoose = require('mongoose');

const { DB_HOST, PORT = 5500 } = process.env;

mongoose.set('strictQuery', true);
mongoose
    .connect(DB_HOST)
    .then(() => app.listen(PORT))
    .catch((err) => {
        console.log(err);
        process.exit(1);
    });
