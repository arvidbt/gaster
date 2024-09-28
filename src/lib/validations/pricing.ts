import { z } from "zod";

export const pricingSchema = z.object({
  tier: z.string(),
  pitch: z.string(),
  cost: z.object({
    free: z.boolean(),
    monthly: z.number(),
  }),
  supportFeatures: z.array(z.string()).optional(),
  features: z.array(z.string()),
  highlighted: z.boolean().optional(),
});
