/* eslint consistent-return:0 import/order:0 */

require('dotenv').config();

const express = require('express');
const cors = require('cors');
const logger = require('./logger');
const passport = require('passport');
// const cookieSession = require('cookie-session');
const session = require('express-session');
const MySQLStore = require('express-mysql-session')(session);
const authRoutes = require('./config/routes/auth-routes');
require('./config/passport-setup');

const argv = require('./argv');
const port = require('./port');
const setup = require('./middlewares/frontendMiddleware');
const isDev = process.env.NODE_ENV !== 'production';
const ngrok =
  (isDev && process.env.ENABLE_TUNNEL) || argv.tunnel
    ? require('ngrok')
    : false;
const { resolve } = require('path');
const app = express();

app.set('trust proxy', 1);
app.use(cors());

const options = {
  host: process.env.DATABASE_HOST,
  port: 3306,
  user: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE,
  expiration: 6.048e8,
};

const sessionStore = new MySQLStore(options);
app.use(
  session({
    key: 'authapp',
    secret: process.env.SESSION_KEY_1,
    store: sessionStore,
    saveUninitialized: false,
    resave: false,
  }),
);
app.use(passport.initialize());
app.use(passport.session());
app.use('/auth', authRoutes);

app.get('/getUser', (req, res) => {
  if (!req.user) {
    res.send({ isAuthenticated: false });
  } else {
    res.send({ user: req.user, isAuthenticated: true });
  }
});

// In production we need to pass these values in instead of relying on webpack
setup(app, {
  outputPath: resolve(process.cwd(), 'build'),
  publicPath: '/',
});

// get the intended host and port number, use localhost and port 3000 if not provided
const customHost = argv.host || process.env.HOST;
const host = customHost || null; // Let http.Server use its default IPv6/4 host
const prettyHost = customHost || 'localhost';

// use the gzipped bundle
app.get('*.js', (req, res, next) => {
  req.url = req.url + '.gz'; // eslint-disable-line
  res.set('Content-Encoding', 'gzip');
  next();
});

// Start your app.
app.listen(port, host, async err => {
  if (err) {
    return logger.error(err.message);
  }

  // Connect to ngrok in dev mode
  if (ngrok) {
    let url;
    try {
      url = await ngrok.connect(port);
    } catch (e) {
      return logger.error(e);
    }
    logger.appStarted(port, prettyHost, url);
  } else {
    logger.appStarted(port, prettyHost);
  }
});
