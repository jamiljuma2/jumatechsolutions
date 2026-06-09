import bcrypt from "bcryptjs";
import { env } from "../config/env.js";

export async function seedDatabase() {
  const email = env.ADMIN_EMAIL ?? "admin@jumatech.solutions";

  let passwordHash: string;

  if (env.ADMIN_PASSWORD_HASH) {
    passwordHash = env.ADMIN_PASSWORD_HASH;
  } else if (env.ADMIN_PASSWORD) {
    passwordHash = await bcrypt.hash(env.ADMIN_PASSWORD, 10);
  } else {
    passwordHash = await bcrypt.hash("changeme123", 10);
  }

  return {
    admin: {
      name: "JumaTech Admin",
      email,
      passwordHash
    }
  };
}
