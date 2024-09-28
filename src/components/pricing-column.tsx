import { cn } from "@/lib/utils";
import { type pricingSchema } from "@/lib/validations/pricing";
import { type z } from "zod";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";

type PricingColumnProps = z.infer<typeof pricingSchema>;

export function PricingColumn({
  cost,
  features,
  pitch,
  tier,
  highlighted,
}: PricingColumnProps) {
  return (
    <div
      className={cn(
        "h-[400px] rounded-2xl border-2 border-blue-100",
        highlighted && "border-black bg-blue-300/20",
      )}
    >
      <div className="flex flex-col items-center justify-center gap-4 py-4">
        <h1 className="text-3xl font-bold">{tier}</h1>
        <h3 className="w-2/3 text-center">{pitch}</h3>
        <h2 className="text-2xl font-semibold">
          {cost.free ? "Free" : `$${cost.monthly} / month`}
        </h2>

        <Button
          variant={"outline"}
          className="rounded-2xl border-2 border-black bg-yellow-400 hover:bg-yellow-500"
        >
          {tier === "Business" ? "Contact sales" : "Get started"}
        </Button>
      </div>
      <Separator />
      <div className="flex flex-col items-center justify-center gap-4 py-4">
        {features.map((feature, i) => (
          <p className="font-medium text-slate-800" key={i}>
            {feature}
          </p>
        ))}
      </div>
    </div>
  );
}
