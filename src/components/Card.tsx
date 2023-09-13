export default function Card() {
  return (
    <>
      <div className="background-image w-auto h-screen justify-center gap-20 flex flex-col relative">
        <div className="relative left-20">
          <img src="./bg-card-front.png" alt="Card Front" />
          {/* Content */}
          <div className="text-white uppercase text-lg absolute bottom-2 w-full h-full justify-between flex flex-col p-3">
            {/* Circle */}
            <div className="flex gap-3 items-center">
              <div className="h-6 w-6 bg-zinc-50 rounded-full relative mt-3" />
              <div className="h-4 w-4 border rounded-full relative mt-3" />
            </div>

            {/* Data Card  */}
            <div className="-tracking-tight space-y-4">
              <p className="text-center">0000 0000 0000 0000</p>
              <div className="flex justify-between text-sm">
                <p>jane appleseed</p>
                <p>00/00</p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative left-40">
          <img src="./bg-card-back.png" alt="Card Back" />
          <div className=" absolute bottom-0 h-full w-full">
            <div className="flex w-full h-full items-center justify-end pr-10 ">
              <p className="text-zinc-50 uppercase">cvv</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
