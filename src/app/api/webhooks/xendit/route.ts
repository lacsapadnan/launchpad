import { env } from "@/env";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const token = req.headers.get("x-callback-token");

  if (token !== env.XENDIT_WEBHOOK_VERIFICATION_TOKEN) {
    return new Response("Unauthorized", { status: 401 });
  }

  try {
    const payload = await req.json();
    console.log("Xendit Webhook received:", payload.event);

    // Business Logic for handling events:
    // - recurring.plan.created
    // - recurring.sub.created
    // - recurring.cycle.succeeded (Payment Success)
    // - recurring.cycle.failed (Payment Failed)

    switch (payload.event) {
      case "recurring.cycle.succeeded":
        // Update subscription status in DB
        break;
      case "recurring.cycle.failed":
        // Handle failure (mark as past_due)
        break;
      default:
        console.log("Unhandled event type:", payload.event);
    }

    return NextResponse.json({ received: true });
  } catch (err) {
    console.error("Webhook processing error:", err);
    return new Response("Webhook Error", { status: 400 });
  }
}
