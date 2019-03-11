// TODO: use process.env.JWT_SECRET instead, for some reason it doesn't work now
exports.JWT_SECRET = 'HEART_SECRET_STRING'; // process.env.JWT_SECRET;
exports.TEST_JWT_SECRET = process.env.TEST_JWT_SECRET;
exports.JWT_EXPIRY = process.env.JWT_EXPIRY || '7d';