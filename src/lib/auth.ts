import NextAuth from "next-auth";
import type { NextAuthOptions } from "next-auth";

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  ...(process.env.AUTH_SECRET ? { secret: process.env.AUTH_SECRET } : {}),
  providers: [
    // Providers will be added here
  ],
  callbacks: {
    async session({ session, token }) {
      if (token && session.user) {
        if (token.sub) {
          (session.user as typeof session.user & { id?: string }).id = token.sub;
        }
      }
      return session;
    },
  },
};

export default NextAuth(authOptions);
