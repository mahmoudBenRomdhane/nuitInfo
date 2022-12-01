import express from 'express';
import path from 'path';
const morgan = require('morgan');
const bodyParser = require('body-parser');
const compress = require('compression');
const methodOverride = require('method-override');
const cors = require('cors');
const helmet = require('helmet');
const routes = require('../routes');



const app = express();
app.use('/images',express.static(path.join('images')))
app.use(bodyParser.urlencoded({extended:false}))
app.use(morgan("dev"));
app.use(bodyParser.json({ limit: '5mb' }));

app.use(compress());
app.use(methodOverride());
app.use(helmet());
app.use(cors());

app.use('/api/v1', routes);


module.exports = app;