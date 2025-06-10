import { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      isOnboarded: boolean;
      provider: string;
    } & DefaultSession["user"];
  }
  
  interface User {
    id: string;
    isOnboarded: boolean;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string;
    isOnboarded: boolean;
    provider: string;
  }
}
