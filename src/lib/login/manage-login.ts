import bcrypt from "bcryptjs";

export async function hashPassword(password: string) {
  const hash = await bcrypt.hash(password, 10);
  const base64 = Buffer.from(hash).toString("base64");
  return base64;
}

export async function verifyPassword(password: string, base64Hash: string) {
  const hash = Buffer.from(base64Hash, "base64").toString("utf8");
  return bcrypt.compare(password, hash);
}

(async () => {
  const isPasswordValid = await verifyPassword("123456", "JDJiJDEwJDIvMERGOTNOU2JzcTJHcXhXNi5uaXVweWwvNmowMHpTRTdhWWZQTkhRQTlOUVE2TncwWGVx" )
  console.log({ isPasswordValid }); 

  // Form login
})();
