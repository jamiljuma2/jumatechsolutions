import { db } from "../config/database.js";

export async function migrate() {
  return db;
}
