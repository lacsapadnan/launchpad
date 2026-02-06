import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

const isProduction = process.env.NODE_ENV === "production";

export const env = createEnv({
  server: {
    DATABASE_URL: z.string().min(1).default("postgres://postgres:postgres@localhost:5432/launchpad"),
    SUPABASE_SERVICE_ROLE_KEY: z.string().min(1).default("placeholder"),
    XENDIT_SECRET_KEY: z.string().min(1).default("placeholder"),
    XENDIT_WEBHOOK_VERIFICATION_TOKEN: z.string().min(1).default("placeholder"),
    RESEND_API_KEY: z.string().min(1).default("placeholder"),
    NODE_ENV: z.enum(["development", "test", "production"]).default("development"),
  },
  client: {
    NEXT_PUBLIC_SUPABASE_URL: z.string().min(1).default("http://localhost:54321"), // Default Supabase local URL
    NEXT_PUBLIC_SUPABASE_ANON_KEY: z.string().min(1).default("placeholder"),
    NEXT_PUBLIC_APP_URL: z.string().min(1).default("http://localhost:3000"),
  },
  runtimeEnv: {
    DATABASE_URL: process.env.DATABASE_URL,
    SUPABASE_SERVICE_ROLE_KEY: process.env.SUPABASE_SERVICE_ROLE_KEY,
    XENDIT_SECRET_KEY: process.env.XENDIT_SECRET_KEY,
    XENDIT_WEBHOOK_VERIFICATION_TOKEN: process.env.XENDIT_WEBHOOK_VERIFICATION_TOKEN,
    RESEND_API_KEY: process.env.RESEND_API_KEY,
    NODE_ENV: process.env.NODE_ENV,
    NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL,
    NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
  },
  emptyStringAsUndefined: true,
});
