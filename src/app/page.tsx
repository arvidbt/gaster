import { Banner } from "@/components/banner";
import { FeatureBlocks } from "@/components/feature-blocks";
import { MainNav } from "@/components/main-nav";
import { PricingHeader } from "@/components/pricing-header";
import { VideoHeader } from "@/components/video-header";
import { HydrateClient } from "@/trpc/server";

export default async function Home() {
  return (
    <HydrateClient>
      <Banner />
      <main className="flex min-h-screen flex-col items-center gap-8 p-8">
        <MainNav />
        <div className="grid gap-20">
          <VideoHeader />
          <FeatureBlocks />
          <PricingHeader />
        </div>
      </main>
    </HydrateClient>
  );
}
