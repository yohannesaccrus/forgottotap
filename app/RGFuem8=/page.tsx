import { Raleway, Caveat } from "next/font/google";

import Music from "../../components/music";

const raleway = Raleway({
  subsets: ["cyrillic"],
  display: "swap",
  weight: ["300", "400", "700"],
});

const caveat = Caveat({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "600", "700"],
});

const Emilda = () => {
  return (
    <>
      <div className="container-fonts">
        <h1 className="side-name daniel">Daniel</h1>
        <h1 className="side-trait daniel">Hope</h1>
      </div>
      <div className="container">
        <div className="content">
          <section className="section-title member julian">
            <h1 className={caveat.className}>
              - <span>Daniel</span> -
            </h1>
          </section>
          <section className="section-content member">
            <p className={raleway.className}>
              Long but exciting journey awaits Dan, I'm also happy when hear you
              got the chance of going abroad, it will surely become precious and
              great experience to you. Prepare everything carefully ya Dan, so
              you can goin' there well, and starts there well too. I might have
              more to said, but it seems I need to go now, otherwise Adi cannot
              works.
            </p>{" "}
            <p className={raleway.className}>
              You represent hope, and I also hope everything goes well and fine
              for you. Thank you for the effort and also your shares with me
              about JDM, its like we have the same interest here. also hope the
              ost below might be a backsound to your journey later. These ost
              also represent reunion in its movie, hope again we can reunite one
              day.
            </p>
          </section>
          <section className="section-music">
            <Music
              source="/ost/Daniel.mp3"
              title="Bryan Tyler - Neela's Drift"
            />
          </section>
        </div>
      </div>
    </>
  );
};

export default Emilda;
