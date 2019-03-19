const passport = require('passport');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const config = require('../../config');

module.exports = (app) => {
  const createAuthToken = function authToken(user) {
    return jwt.sign({ user }, config.JWT_SECRET, {
      subject: user.username,
      expiresIn: config.JWT_EXPIRY,
      algorithm: 'HS256',
    });
  };

  const localAuth = passport.authenticate('local', { session: false });
  app.use(bodyParser.json());
  // The user provides a email and password to login
  app.post('/login', localAuth, (req, res) => {
    const authToken = createAuthToken(req.user[0]);
    res.json({ authToken });
  });

  const jwtAuth = passport.authenticate('jwt', { session: false });

  // The user exchanges a valid JWT for a new one with a later expiration
  app.post('/refresh', jwtAuth, (req, res) => {
    const authToken = createAuthToken(req.user);
    res.json({ authToken });
  });
};
