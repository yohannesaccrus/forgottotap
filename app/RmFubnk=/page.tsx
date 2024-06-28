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
              No, sadness here is not because you were sad or something, No.
              It's more to like empathy of the same thing I felt this year. We
              were into pets also, and I do feel those sadness when you lost
              him/her, I lost her this year. Thank you for not making me feel
              alone facing this lost. It's kinda sound dramatic, but I believe
              you understand it.
            </p>
            <p className={raleway.className}>
              Thank you too for the efforts till this day, I saw you were
              dedicated a lot when it comes to release, working, or when Dzar
              leaves. There's much to say, but I think I might say it later Fan,
              thank you also for inviting me to try grup jajan Sopo Del, tell me
              if you plan on goin for it again.
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

export default Emilda;
