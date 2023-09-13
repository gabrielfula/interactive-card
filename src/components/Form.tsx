export default function Form() {
  return (
    <>
      <div className="w-full flex justify-center items-center">
        <div className="space-y-5 w-auto">
          <div className="flex flex-col">
            <label className="text-purple-900 uppercase text-sm -tracking-wide">
              cardholder name
            </label>
            <input
              type="text"
              placeholder="e.g. Jane Appleseed"
              className="border bg-zinc-100 shadow-sm"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-purple-900 uppercase text-sm -tracking-wide">
              card number
            </label>
            <input
              type="text"
              placeholder="e.g. 1234 5678 9123 0000"
              className="border bg-zinc-100 shadow-sm"
            />
          </div>
          <div className="flex gap-5">
            <div className="flex flex-col">
              <label className="text-purple-900 uppercase text-sm -tracking-wide">
                exp date(mm / yy)
              </label>
              <div className="space-x-5">
                <input
                  type="text"
                  placeholder="MM"
                  className="border bg-zinc-100 shadow-sm"
                />
                <input
                  type="text"
                  placeholder="YY"
                  className="border bg-zinc-100 shadow-sm"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <label className="text-purple-900 uppercase text-sm -tracking-wide">
                cvv
              </label>
              <input
                type="text"
                placeholder="e.g. 123"
                className="border bg-zinc-100 shadow-sm"
              />
            </div>
          </div>
          <div className="flex justify-center w-full">
            <button className="text-zinc-50 bg-purple-950 rounded-md w-full h-10 flex justify-center items-center">
              Confirm
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
