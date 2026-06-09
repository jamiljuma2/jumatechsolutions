#!/usr/bin/env node
import bcrypt from "bcryptjs";

async function main() {
  const arg = process.argv[2] || process.env.ADMIN_PASSWORD;
  if (!arg) {
    console.error("Usage: node hash-admin-password.js <password>\nOr set ADMIN_PASSWORD in environment.");
    process.exit(2);
  }

  const hash = await bcrypt.hash(arg, 10);
  console.log(hash);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
