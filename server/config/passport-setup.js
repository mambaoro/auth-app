/* eslint-disable prettier/prettier */
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const GithubStrategy = require('passport-github2').Strategy;
const User = require('./models/User');

passport.serializeUser((user, done) => {
  done(null, user.dataValues.id);
});

passport.deserializeUser(async (id, done) => {
  const userDb = await User.findOne({ where: { id } });
  const user = {
    id: userDb.id,
    username: userDb.username,
    profileImageUrl: userDb.profileImageUrl,
  };
  done(null, user);
});

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: process.env.GOOGLE_CALLBACK_URL,
    },
    async (accesToken, refreshToken, profile, done) => {
      try {
        await User.sync();
        const newUser = await User.findOrCreate({
          where: {
            googleId: profile.id,
            username: profile.displayName,
            profileImageUrl: profile.photos[0].value,
          },
        });
        done(null, newUser[0]);
      } catch (e) {
        done(e);
      }
    },
  ),
);

passport.use(
  new GithubStrategy(
    {
      clientID: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      callbackURL: process.env.GITHUB_CALLBACK_URL,
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        await User.sync();
        const newUser = await User.findOrCreate({
          where: {
            githubId: profile.id,
            username: profile.username,
            profileImageUrl: profile.photos[0].value,
          },
        });
        done(null, newUser[0]);
      } catch (e) {
        done(e);
      }
    },
  ),
);
