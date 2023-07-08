const express = require('express');
const fs = require('fs/promises');
const cors = require('cors');

const app = express();

const logger = async (req, res, next) => {
    await fs.appendFile(
        './log.txt',
        `${req.method} - ${req.url} - ${new Date()}\n`
    );
    next();
};
app.use(cors());
app.use(logger);
app.use(express.json());

app.get('/test', (req, res) => {
    res.status(200).json({ message: 'Success' });
});

app.use((err, req, res, next) => {
    console.log('');
    res.status(err.status || 500).json({
        error: err.message || 'Server error',
    });
});

app.listen(5500, () => {
    console.log('Server started');
});
