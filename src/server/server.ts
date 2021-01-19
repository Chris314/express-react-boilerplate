import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import helmet from 'helmet';
import dotenv from 'dotenv';
import Logger from 'jet-logger';
import path from 'path';
import StatusCodes from 'http-status-codes';

import express, { NextFunction, Request, Response } from 'express';
const app = express();
const logger = new Logger();
const { BAD_REQUEST } = StatusCodes;

//import routes
// const apiRouter = require('./routes'); [...]

//dotenv
dotenv.config();

//connect db

//Middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());

if(process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

if(process.env.NODE_ENV === 'production') {
    app.use(helmet());
}

//Api
// app.use('/api',apiRouter);
// const apiRouter = require('./routes'); [...]

// Print API errors
// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    logger.err(err, true);
    return res.status(BAD_REQUEST).json({
        error: err.message,
    });
});


const port = Number(process.env.PORT || 3000);
app.listen(port, () => {
    logger.info('Host :' + process.env.HOST)
    logger.info('Express server started on port: ' + port);
});

const staticDir = path.join(__dirname, 'public');
app.use(express.static(staticDir));

app.get('*', (req: Request, res: Response) => {
    res.sendFile('index.html', {root: staticDir});
});