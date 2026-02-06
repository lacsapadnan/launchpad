export type Plan = {
  id: string;
  name: string;
  description: string;
  price: number;
  interval: "month" | "year";
  features: string[];
  xenditPlanId?: string;
};

export const pricingPlans: Plan[] = [
  {
    id: "basic",
    name: "Basic",
    description: "Perfect for small teams starting out.",
    price: 0,
    interval: "month",
    features: ["Up to 3 projects", "Basic analytics", "Email support"],
  },
  {
    id: "pro",
    name: "Pro",
    description: "Best for growing businesses.",
    price: 299000, // IDR 299,000
    interval: "month",
    features: ["Unlimited projects", "Advanced analytics", "Priority support", "Custom branding"],
    xenditPlanId: "plan_pro_123",
  },
];
