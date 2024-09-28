"use client";

import { BannerStore } from "@/stores";
import { Button } from "./ui/button";
import { Icons } from "./icons";
import Link from "next/link";

export function Banner() {
  const { setDismissed, getDismissed } = BannerStore();

  const isDismissed = getDismissed();

  if (isDismissed) {
    return null;
  }
  return (
    <div className="flex w-full items-center justify-center rounded-b-2xl bg-blue-200">
      <div className="container flex max-w-4xl items-center justify-between">
        <Link href={"/"} className="font-medium">
          This is a banner test
        </Link>
        <Button variant={"ghost"} onClick={() => setDismissed()}>
          <Icons.X className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
