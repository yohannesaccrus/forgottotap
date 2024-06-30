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
            <p className={raleway.className}>"Ottoke ?"</p>
            <p className={raleway.className}>
              So this is kind of like the word which always come from you if you
              feel like confused or need to do something but you don't know what
              to do, I just guessing, please no offense. The first I hear I
              thought it was Japanese, but turns out to be Korean. Its okay to
              be confused sometimes, because I most of the times too, if my
              words is kind of "what the..", you'll hear it lot of times coming
              from my desk behind you.
            </p>
            <p className={raleway.className}>
              Since the SPM era with our Bro, you reflect this feelings of
              hardwork, and until this time you lead CC. Currently it seems CC
              is the most essential product in our teams, and you carefully take
              care of it along with Angel and Lika in website. Honestly, I lost
              track the most with CC, need to catch it up, but I hope everything
              is good in CC onwards ya Mil.
            </p>
            <p className={raleway.className}>
              I also amazed knowing you can speak in chinese, I also have
              compulsory chinese hour during my college, but slowly losing it,
              it was fun class I remember with the Laoshi coming from the
              chinese itself, she even give us one by one our chinese name. You
              have good skill Emil, hope it develop well ya.
            </p>
          </section>
          <section className="section-music">
            <Music
              source="/ost/Emil.mp3"
              title="Soowoo ft. Dori - What Should I Do"
              startAt={69}
            />
          </section>
        </div>
      </div>
    </>
  );
};

export default Emilda;
