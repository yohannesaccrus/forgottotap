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
        <h1 className="side-name emil">Emilda</h1>
        <h1 className="side-trait emil">Hardwork</h1>
      </div>
      <div className="container">
        <div className="content">
          <section className="section-title member julian">
            <h1 className={caveat.className}>
              - <span>Emil</span> -
            </h1>
          </section>
          <section className="section-content member">
            <p className={raleway.className}>
              Emil, since the SPM era with our Bro, you reflect this feelings of
              hardwork, and until this time you lead CC. Currently it seems CC
              is the most essential product in our teams, and you carefully take
              care of it along with Angel and Lika. Honestly, I lost track the
              most with CC, need to catch it up, but I hope everything is good
              in CC.
            </p>
            <p className={raleway.className}>
              During our talks, I oftenly hears you were saying "ottoke", it
              seems you use it when you didn't know on what to do next or in
              short confuse. I thought it was Japanese, but turns out to be
              Korean. When I'm working I suddenly hear this song, because mostly
              my playlist was Korean R&B, this song below also has the ottoke.
            </p>
          </section>
          <section className="section-music">
            <Music
              source="/ost/Emil.mp3"
              title="Soowoo ft. Dori - What Should I Do"
            />
          </section>
        </div>
      </div>
    </>
  );
};

export default Emilda;
