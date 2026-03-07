import hc_flag from "@/assets/hc-flag-white.svg";
import sparkle_bg_1920x1080 from "@/assets/sparkle_bg_1920x1080.webp";
import sparkle_bg_2560x1440 from "@/assets/sparkle_bg_2560x1440.webp";
import { useEffect, useState } from "react";
const PageHome = () => {
  const [email, setEmail] = useState("");
  const bg_1920x1080 = sparkle_bg_1920x1080;
  const bg_2560x1440 = sparkle_bg_2560x1440;

  const selectBackground = (width: number) =>
    width >= 2200 ? bg_2560x1440 : bg_1920x1080;

  const [heroBackground, setHeroBackground] = useState(() =>
    typeof window === "undefined"
      ? bg_1920x1080
      : selectBackground(window.innerWidth),
  );

  useEffect(() => {
    const updateBackground = () => {
      setHeroBackground(selectBackground(window.innerWidth));
    };

    updateBackground();
    window.addEventListener("resize", updateBackground);

    return () => {
      window.removeEventListener("resize", updateBackground);
    };
  }, []);

  function rsvp_handler(email: string) {
    if (!email.includes("@")) {
      alert("Please enter a valid email address");
      return;
    }
    if (!email.includes(".")) {
      alert("Please enter a valid email address");
      return;
    }
    alert(`RSVP for email ${email}`);
  }
  return (
    <div className="w-full">
      <section
        className="relative flex h-screen w-full justify-center bg-cover bg-center p-3 sm:p-4"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute left-1/2 top-3 -translate-x-1/2 sm:top-4 w-30">
          <img
            src={hc_flag}
            alt="Hack Club flag transparent white"
            width={"120px"}
          />

          {/* <a href="https://hackclub.com/">
            <img
              style={{
                position: "absolute",
                top: 0,
                left: 10,
                border: "none",
                width: "256px",
                zIndex: 999,
              }}
              src="https://assets.hackclub.com/flag-orpheus-top.svg"
              alt="Hack Club"
            />
          </a> */}
        </div>
        <div className="self-start mt-60 sm:mt-48 md:mt-36 lg:mt-50 flex flex-col text-center text-[#ffffff] text-shadow-md bg-amber-300/50 rounded shadow-accent shadow-md p-5">
          <span className="pb-4 opacity-80 sm:pb-5 sm:text-lg md:text-xl">
            RSVP form available
          </span>
          <h1 className="text-2xl font-bold leading-tight sm:text-3xl md:text-4xl lg:text-5xl">
            Learn from a friend and get rewards!
          </h1>
          <div className="mt-4 flex rounded bg-accent/50 p-2 text-black sm:mt-5">
            <input
              placeholder="name@email.com"
              className="flex-1 text-base outline-none placeholder:text-black placeholder:text-base sm:text-lg sm:placeholder:text-lg md:text-xl md:placeholder:text-xl"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              className="border-2 border-black p-2 text-base font-bold hover:cursor-pointer sm:text-lg md:text-xl"
              onClick={() => rsvp_handler(email)}
            >
              RSVP
            </button>
          </div>
        </div>
        <span className="absolute bottom-10 text-xl text-white drop-shadow-xl bg-">
          Scroll down to learn more!
        </span>
      </section>

      <section className="flex min-h-screen w-full flex-col bg-cyan-400 px-4 py-8 sm:px-6 sm:py-10 lg:px-10">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 xl:flex-row xl:items-start">
          <div className="flex w-full flex-col gap-6 items-center lg:items-start">
            <div className="">
              <span className="text-3xl text-white sm:text-4xl font-bold">What is sparkle?</span>
            </div>
            {/* boxes for explainers */}
            <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-1 sm:gap-6">
              <div className="flex min-h-56 w-full flex-col gap-2 rounded bg-amber-300 p-4 sm:min-h-64 sm:p-5">
                <span className="text-2xl font-bold sm:text-3xl">1.</span>
                <span className="text-xl sm:text-2xl">
                  <b>Get a friend</b> and invite them to join you
                </span>
              </div>
              <div className="flex min-h-56 w-full flex-col gap-2 rounded bg-amber-300 p-4 sm:min-h-64 sm:p-5">
                <span className="text-2xl font-bold sm:text-3xl">2.</span>
                <span className="text-xl sm:text-2xl">
                  <b>Learn together.</b> Make your friend teach you a new skill.
                  Or maybe a new language?
                </span>
              </div>
              <div className="flex min-h-56 w-full flex-col gap-2 rounded bg-amber-300 p-4 sm:min-h-64 sm:p-5">
                <span className="text-2xl font-bold sm:text-3xl">3.</span>
                <span className="text-xl sm:text-2xl">
                  <b>Track your progress</b> via [placeholder]
                </span>
              </div>
              <div className="flex min-h-56 w-full flex-col gap-2 rounded bg-amber-300 p-4 sm:min-h-64 sm:p-5">
                <span className="text-2xl font-bold sm:text-3xl">4.</span>
                <span className="text-xl sm:text-2xl">
                  <b>Earn cool prizes!</b> You and your friend earn a reward!
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PageHome;
