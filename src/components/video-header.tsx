import { Button } from "./ui/button";

export function VideoHeader() {
  return (
    <div className="container relative h-[600px] max-w-4xl rounded-2xl bg-blue-400">
      <video
        autoPlay
        loop
        className="absolute left-0 top-0 h-full w-full rounded-2xl object-cover"
      >
        <source src="/landing-page-video.mp4" type="video/mp4" />
      </video>
      <div className="container absolute left-0 top-0 flex h-full flex-col items-center justify-center gap-4">
        <h1 className="text-4xl font-black text-yellow-400">
          Make guestbooks easier.
        </h1>
        <h2 className="w-2/3 text-center text-lg font-semibold text-white">
          The all-in-one platform for all your guestbooks. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Vestibulum gravida neque ac dapibus
          tempor. Aenean sollicitudin non felis ac sollicitudin.
        </h2>
        <div className="grid grid-cols-2 gap-4">
          <Button
            variant={"outline"}
            className="rounded-2xl border-2 border-black bg-yellow-400 hover:bg-yellow-500"
          >
            Create account
          </Button>
          <Button
            variant={"outline"}
            className="rounded-2xl border-2 border-black hover:bg-blue-200/80"
          >
            Login
          </Button>
        </div>
      </div>
    </div>
  );
}
