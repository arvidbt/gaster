import NextAuth from "next-auth";
import { cache } from "react";
import { authConfig } from "./config";

export const {
  handlers,
  auth: uncachedAuth,
  signOut,
  signIn,
} = NextAuth(authConfig);

export const auth = cache(uncachedAuth);
