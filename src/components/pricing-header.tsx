import { PricingColumn } from "./pricing-column";

export function PricingHeader() {
  return (
    <div className="container max-w-4xl">
      <div className="h-[200px] rounded-2xl bg-pink-500 px-8">
        <div className="flex h-full w-full flex-col items-center justify-center">
          <h1 className="text-2xl font-bold text-white">
            With pricing that&apos;s fair.
          </h1>
          <h2 className="w-2/3 text-center text-lg font-semibold text-white/80">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum
            dolor sit amet, consectetur adipiscing elit.
          </h2>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-2 py-4">
        <PricingColumn
          tier="Free"
          cost={{ free: true, monthly: 0 }}
          pitch="When a simple text message is enough"
          features={["Unlimited guestbooks", "QR codes"]}
        />
        <PricingColumn
          tier="Plus"
          cost={{ free: false, monthly: 3.99 }}
          pitch="A photo says more than a thousand words"
          features={["Themeable guestbooks", "Add an image to posts"]}
          highlighted={true}
        />
        <PricingColumn
          tier="Business"
          cost={{ free: false, monthly: 12.99 }}
          pitch="For those who runs a business"
          features={[
            "Customizable guestbooks",
            "Verified posts",
            "More images per post",
          ]}
        />
      </div>
    </div>
  );
}
