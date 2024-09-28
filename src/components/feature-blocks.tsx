export function FeatureBlocks() {
  return (
    <div className="container max-w-4xl">
      <div className="flex flex-row items-center justify-start gap-8">
        <div className="flex aspect-square w-1/3 items-center rounded-2xl bg-blue-200/80"></div>
        <div>
          <h2 className="text-2xl font-bold">QR codes.</h2>
          <h3>For easy sharing.</h3>
        </div>
      </div>

      <div className="flex flex-row items-center justify-end gap-8">
        <div>
          <h2 className="text-2xl font-bold">Images attached.</h2>
          <h3>Share the moment.</h3>
        </div>
        <div className="aspect-square w-1/3 rounded-2xl bg-blue-200/80"></div>
      </div>

      <div className="flex flex-row items-center justify-start gap-8">
        <div className="aspect-square w-1/3 rounded-2xl bg-blue-200/80"></div>

        <div>
          <h2 className="text-2xl font-bold">Customizable.</h2>
          <h3>Make it your own.</h3>
        </div>
      </div>
    </div>
  );
}
