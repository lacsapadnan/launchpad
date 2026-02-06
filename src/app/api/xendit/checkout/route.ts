import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { createXenditCustomer } from "@/lib/payments/xendit";
import { env } from "@/env";

export async function POST(req: Request) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    return new Response("Unauthorized", { status: 401 });
  }

  try {
    const { planId, teamId, teamName } = await req.json();

    // 1. Create Xendit Customer
    const customer = await createXenditCustomer({
      referenceId: user.id,
      email: user.email!,
      givenNames: teamName || user.email!.split("@")[0],
    });

    // 2. Logic to create a recurring plan link or direct subscription
    // depends on the chosen Xendit flow (Invoices, Recurring, or Payment Links)
    // For this boilerplate, we'll assume we redirect to a payment link
    // or return the subscription detail.
    
    // Placeholder for actual payment link generation logic
    const checkoutUrl = `${env.NEXT_PUBLIC_APP_URL}/dashboard/${teamId}/billing/success`;

    return NextResponse.json({ url: checkoutUrl });
  } catch (error) {
    console.error("Checkout error:", error);
    return new Response("Internal Server Error", { status: 500 });
  }
}
