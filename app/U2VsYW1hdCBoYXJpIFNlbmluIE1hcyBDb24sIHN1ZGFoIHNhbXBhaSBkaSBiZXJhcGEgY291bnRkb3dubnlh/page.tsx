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

const Condro = () => {
  return (
    <>
      <div className="container-fonts">
        <h1 className="side-name condro">Knowledge</h1>
        <h1 className="side-trait condro">Condro</h1>
      </div>
      <div className="container">
        <div className="content">
          <section className="section-title member julian">
            <h1 className={caveat.className}>
              - <span>Condro</span> -
            </h1>
          </section>
          <section className="section-content member">
            <p className={raleway.className}>
              If I were asked who is the most inspiring member on the team, my
              answer would be Mas Con. Most of the things you did always bring
              new knowledge to us, and oftenly it ended up with "how come ?".
              Through all the good and legacy bloated code you patiently tell us
              what is right and what is wrong, while at the same time put your
              efforts on it to make it much more better.
            </p>
            <p className={raleway.className}>
              You also the one I knew calm but also can enjoy other stories,
              have fun, and also got good jokes as well especially with Adi.
              Thank you Mas Con for being kind both in code-side and life-side,
              I've seen you were kind of all out and enjoying that much during
              the last week team bonding, seeing the tie like goin' everywhere
              on you haha. I hope onwards platform team also growing but also
              (this is my wish), please clearer requirements from our fellow
              regionals, we were both knew its not that easy to understand their
              needs sometimes. Thank you too for the helps you provided when I
              ran into error or other issues.
            </p>
            <p className={raleway.className}>
              All and all Mas Con, it was a good time to have you as a partner
              in AS x CS, together with Adi I believe we can finish Marcus's,
              Tianpeng's, Olivia's, and Utsav's requests. Hmm, let's put Utsav
              aside first since he sometimes forgot the cutoff. I'm also sorry
              if you find dent on the inner box, it seems it's the last one
              which goin' to Hogwarts, and also once you told you listen to
              Peggy Gou Mas Con, this one seems similar
            </p>
          </section>
          <section className="section-music">
            <Music source="/ost/Condro.mp3" title="Vicetone - Collide">
              <p className={raleway.className}>
                And also Mas Con, along with Adi, I'm invite you to the{" "}
                <strong>AS x CS Night's Out</strong>, as I want to appreciate
                both of your efforts through AS, CS and also Platforms in the
                end of this Q2, I will update the selection of the place here
                later on including the one below us, and also can decide the
                time with Adi, it's only the name consist of "Night", but it
                doesn't have to be at night.
              </p>
            </Music>
          </section>
        </div>
      </div>
    </>
  );
};

export default Condro;
