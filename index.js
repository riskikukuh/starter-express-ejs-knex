require('dotenv').config();
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const webRouter = require('./src/routes/web');
const apiRouter = require('./src/routes/api');
const { errorMiddleware } = require('./src/middlewares/webMiddleware');

const app = () => {
    const app = express()
    const port = parseInt(process.env.PORT) || 3000
    const host = process.env.HOST || "127.0.0.1"
    
    // Setup Parser
    app.use(bodyParser.urlencoded({
        extended: true,
    }));

    // Setup View Engine
    app.set('view engine', 'ejs');
    app.set('views', path.join(__dirname, '/src/views'));

    // Setup Middleware
    app.use('/static', express.static(path.join(__dirname, 'public')));
    app.use(apiRouter);
    app.use(webRouter);
    app.use(errorMiddleware);
    
    // Start App
    app.listen(port, host, () => {
        console.log(`# App started, listening at http://${host}:${port}`);
    });
}

app();