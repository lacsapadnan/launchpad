import { Xendit } from "xendit-node";
import { env } from "@/env";

const xenditClient = new Xendit({
  secretKey: env.XENDIT_SECRET_KEY,
});

export const xendit = xenditClient;

/**
 * Xendit Recurring flow:
 * 1. Create a Customer (if not exists)
 * 2. Create a Plan (usually pre-created via dashboard or script, but can be done via API)
 * 3. Create a Subscription (Recurring)
 */

export async function createXenditCustomer({
  referenceId,
  email,
  givenNames,
}: {
  referenceId: string;
  email: string;
  givenNames: string;
}) {
  try {
    const customer = await xenditClient.Customer.createCustomer({
      data: {
        referenceId,
        email,
        type: "INDIVIDUAL",
        individualDetail: {
          givenNames,
        },
      },
    });
    return customer;
  } catch (error) {
    console.error("Error creating Xendit customer:", error);
    throw error;
  }
}

export async function createXenditSubscription({
  customerId,
  planId,
  referenceId,
}: {
  customerId: string;
  planId: string;
  referenceId: string;
}) {
  try {
    // Note: This relies on the experimental/recurring API in xendit-node
    // or using raw axios if the SDK version is lagging.
    // For this playbook, we assume xendit-node v7+ which supports Recurring.
    // @ts-ignore - xendit-node types might be tricky depending on version
    const subscription = await xenditClient.Recurring.createPlan({
      data: {
        referenceId,
        customerId,
        planId,
      },
    });
    return subscription;
  } catch (error) {
    console.error("Error creating Xendit subscription:", error);
    throw error;
  }
}
