const bcrypt = require('bcryptjs');

const pw = process.argv[2] || process.env.ADMIN_PASSWORD;
if (!pw) {
  console.error('Usage: node hash-admin-password.cjs <password>');
  process.exit(2);
}

console.log(bcrypt.hashSync(pw, 10));
