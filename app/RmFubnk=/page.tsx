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

const Fanny = () => {
  return (
    <>
      <div className="container-fonts">
        <h1 className="side-name fanny">Sadness</h1>
        <h1 className="side-trait fanny">Fanny</h1>
      </div>
      <div className="container">
        <div className="content">
          <section className="section-title member julian">
            <h1 className={caveat.className}>
              - <span>Fanny</span> -
            </h1>
          </section>
          <section className="section-content member">
            <p className={raleway.className}>
              No Fan, sadness here is not because you were sad or something, No.
              It's more to like empathy of the same thing I felt this year. We
              were into pets, and I lost her this year. It was so hard, I even
              didn't meet her at her last time. Thank you for not making me feel
              alone facing the lost. It's kinda sound dramatic, but I believe
              you understand it. Sadness is sad but it's kinda part of the life
              we live, it creates and left not only hurts but also good
              memories. But sad is just "sad" when release have problems,
              especially on Friday.
            </p>
            <p className={raleway.className}>
              Thank you too for the efforts till this day, I saw you were
              dedicated a lot when it comes to release, working, or when Dzar
              leaves. I haven't have experiene working with you, but I feel you
              have that dedication and good responsibility, almost the same as
              Lika's will. Keep goin' ya Fan, Thank you for keep making good
              changes and standards along with Dzar and Daniel.
            </p>
            <p className={raleway.className}>
              I'm sorry but didn't mean to remind or something, but we know they
              were once with us, and now there'll they be. Also Fan, if you plan
              to order from Kantin Jajan again let me know alright, might also
              order for lunch.
            </p>
          </section>
          <section className="section-music">
            <Music
              source="/ost/Fanny.mp3"
              title="Faith Hill - There you'll be"
            />
          </section>
        </div>
      </div>
    </>
  );
};

export default Fanny;
