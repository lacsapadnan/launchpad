# LaunchPad SaaS 🇮🇩

**Indonesia-first B2B SaaS boilerplate** with Xendit billing, multi-tenancy, and VPS-friendly deployment.

> Build real SaaS products without fighting Stripe-only assumptions, cloud lock-in, or missing billing logic.

---

## What is LaunchPad SaaS?

LaunchPad SaaS is a **production-ready starter kit** for Indonesian B2B founders who want to ship fast with:

* Team-based multi-tenancy
* Real recurring billing via Xendit
* Secure-by-default architecture (RLS + middleware)
* Docker + aaPanel deployment

This is not a demo repo. This is the *engine* of a real SaaS.

---

## Who Is This For?

**Perfect for:**

* Indonesian solo founders
* Small dev agencies building internal SaaS
* Indie hackers targeting SMEs

**Not for:**

* Stripe-only or global-first SaaS
* No-code builders
* Mobile-first startups

---

## Why Not Other SaaS Starters?

| Problem       | Typical Boilerplate | LaunchPad SaaS |
| ------------- | ------------------- | -------------- |
| Payments      | Stripe-only         | Xendit-native  |
| Tenancy       | Optional / DIY      | Built-in       |
| Billing Logic | UI only             | Webhook-driven |
| Deployment    | Vercel / AWS        | VPS + aaPanel  |
| Security      | App-level           | DB-level (RLS) |

---

## Core Features

* 🔐 Authentication (Email, Google, Magic Link)
* 🏢 Multi-tenancy (Teams, Members, RBAC)
* 💳 Billing Engine (Xendit Recurring)
* ⏱ Trial + Grace Period logic
* 🧱 Secure RLS templates
* 🐳 Dockerized deployment
* ⚡ Next.js 16 App Router structure

---

## Tech Stack

* Next.js 16 (App Router)
* TypeScript (Strict)
* Supabase (Auth + Postgres)
* Drizzle ORM
* Xendit Node.js SDK
* Tailwind CSS + shadcn/ui
* Docker + aaPanel

---

## Quick Start

```bash
pnpm install
docker compose up
```

Create `.env` from `.env.example`, then open:

```
http://localhost:3000
```

---

## Deployment (aaPanel)

1. Create Node.js project in aaPanel
2. Upload repo or pull from Git
3. Set environment variables
4. Run Docker Compose
5. Configure Nginx reverse proxy

---

## Project Philosophy

* Teams are the customer
* Billing gates access
* Security lives in the database
* Middleware is a guardrail, not a lock

---

## License & Support

* Commercial / Private use allowed
* Redistribution depends on license tier
* Support scope defined per package

---

## Final Note

> If billing, tenancy, and deployment work — everything else is optional.

Build the engine first.
