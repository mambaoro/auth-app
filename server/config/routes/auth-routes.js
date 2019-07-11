/* eslint-disable prettier/prettier */
const router = require('express').Router();
const passport = require('passport');

// auth with google
router.get(
  '/google',
  passport.authenticate('google', {
    scope: ['profile', 'https://www.googleapis.com/auth/plus.login'],
  }),
);

// redirect callback route for google
router.get(
  '/google/redirect',
  passport.authenticate('google', {
    failureRedirect: '/',
    successRedirect: '/',
  }),
);

// auth with github
router.get('/github', passport.authenticate('github', { scope: ['profile'] }));

// redirect callback route for github
router.get(
  '/github/redirect',
  passport.authenticate('github', {
    failureRedirect: '/',
    successRedirect: '/',
  }),
);

// logout
router.get('/logout', (req, res) => {
  req.logout();
  req.session.destroy();
  res.clearCookie('authapp');
  res.redirect('/');
});

module.exports = router;
