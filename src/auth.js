import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { prisma } from "@/db";
import bcrypt from "bcryptjs";
import { signInSchema } from "@/lib/schemas/signin-schema";
import { ZodError } from "zod";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        try {
          console.log("processing authorization request", credentials);

          let user = null;
          const { email, password } = await signInSchema.parseAsync(credentials);

          console.log("schema was validated", email, password);

          // logic to salt and hash password
          const pwHash = await bcrypt.hash(password, 10);

          // logic to verify if the user exists
          user = await prisma.user.findFirst({ where: { email, password: pwHash } });

          if (!user) {
            // No user found, so this is their first attempt to login
            // Optionally, this is also the place you could do a user registration
            throw new Error("Invalid credentials.");
          }

          // return user object with their profile data
          return user;
        } catch (err) {
          console.error("error authorize", err);
          if (err instanceof ZodError) {
            // Return `null` to indicate that the credentials are invalid
            return null;
          }
        }
      },
    }),
  ],
});
