import { Button } from "./ui/button";

export function MainNav() {
  return (
    <header className="container max-w-4xl">
      <div className="flex w-full items-center justify-between">
        <span className="text-2xl font-black">Gäster</span>
        <div className="space-x-4">
          <Button className="bg-none text-base hover:bg-none" variant={"ghost"}>
            Login
          </Button>
          <Button
            className="rounded-2xl border-2 border-black bg-none px-6 text-base hover:bg-yellow-400"
            variant={"outline"}
          >
            Sign Up
          </Button>
        </div>
      </div>
    </header>
  );
}
