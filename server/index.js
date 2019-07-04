/* eslint consistent-return:0 import/order:0 */

require('dotenv').config();

const express = require('express');
const logger = require('./logger');
const passport = require('passport');
const cookieSession = require('cookie-session');
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
const https = require('https');
const app = express();

app.enable('trust proxy');
app.use(
  cookieSession({
    maxAge: 6.048e8,
    keys: [process.env.SESSION_KEY_1, process.env.SESSION_KEY_2],
  }),
);
app.use(passport.initialize());
app.use(passport.session());
app.use('/auth', authRoutes);

app.get('/getUser', (req, res) => {
  if (!req.user) {
    return res.status(400).send({ errorMessage: 'Not authenticated' });
  }
  res.send(req.user);
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

const server = https.createServer(app);

// Start your app.
server.listen(port, host, async err => {
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
