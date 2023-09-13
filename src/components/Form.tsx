import { useState } from "react";
import { useForm } from "react-hook-form";

export default function Form() {
  const { register, handleSubmit } = useForm();
  const [value, setValue] = useState("");

  const createData = (data: any) => {
    setValue(JSON.stringify(data, null, 2));
    console.log(value);
  };

  return (
    <>
      <div className="w-full flex justify-center items-center">
        <form onSubmit={handleSubmit(createData)} className="space-y-5 w-auto">
          <div className="flex flex-col">
            <label className="text-purple-900 uppercase text-sm -tracking-wide">
              cardholder name
            </label>
            <input
              type="text"
              placeholder="e.g. Jane Appleseed"
              className="border bg-zinc-100 shadow-sm"
              {...register("name")}
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
              {...register("card")}
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
                  {...register("month")}
                />
                <input
                  type="text"
                  placeholder="YY"
                  className="border bg-zinc-100 shadow-sm"
                  {...register("year")}
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
                {...register("cvv")}
              />
            </div>
          </div>
          <div className="flex justify-center w-full">
            <button className="text-zinc-50 bg-purple-950 rounded-md w-full h-10 flex justify-center items-center">
              Confirm
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
