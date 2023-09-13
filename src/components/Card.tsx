export default function Card() {
  return (
    <>
      <div className="background-image w-auto h-screen justify-center gap-20 flex flex-col relative">
        <div className="relative left-20">
          <img src="./bg-card-front.png" alt="Card Front" />
        </div>
        <div className="relative left-40">
          <img src="./bg-card-back.png" alt="Card Back" />
        </div>
      </div>
    </>
  );
}
