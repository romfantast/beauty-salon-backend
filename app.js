const express = require('express');
const logger = require('morgan');
const fs = require('fs/promises');
const cors = require('cors');
require('dotenv').config();
const reservRouter = require('./routes/api/reserv');
const authRouter = require('./routes/api/auth');
const profileRouter = require('./routes/api/profile');
const servicesRouter = require('./routes/api/services');

const { swaggerUi, swaggerDocument } = require('./services/swagger/swagger');

const app = express();

const writeLog = async (req, res, next) => {
    await fs.appendFile(
        './log.txt',
        `${req.method} - ${req.url} - ${new Date()}\n`
    );
    next();
};
const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short';

app.use(logger(formatsLogger));
app.use(cors());
app.use(writeLog);
app.use(express.json());
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use('/api/auth', authRouter);
app.use('/api/reserv', reservRouter);
app.use('/api/profile', profileRouter);
app.use('/api/services', servicesRouter);

app.use((req, res) => {
    res.status(404).json({ message: 'Not found' });
});

app.use((err, req, res, next) => {
    res.status(err.status || 500).json({ message: err.message });
});
module.exports = app;
