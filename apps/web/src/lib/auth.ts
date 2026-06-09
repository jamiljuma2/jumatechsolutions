import { cookies } from "next/headers";

export async function getSessionToken() {
  const cookieStore = await cookies();
  return cookieStore.get(process.env.COOKIE_NAME ?? "jt_session")?.value ?? null;
}

export async function isAuthenticated() {
  return Boolean(await getSessionToken());
}
