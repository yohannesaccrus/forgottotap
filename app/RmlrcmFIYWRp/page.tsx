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

const Hadi = () => {
  return (
    <>
      <div className="container-fonts">
        <h1 className="side-name hadi">Hadi</h1>
        <h1 className="side-trait hadi">Freedom</h1>
      </div>
      <div className="container">
        <div className="content">
          <section className="section-title member julian">
            <h1 className={caveat.className}>
              - Fikra <span>Hadi</span> -
            </h1>
          </section>
          <section className="section-content member">
            <p className={raleway.className}>
              Hi Hadi, without your help what will the team would be? there's no
              good event, less fun, and ordinary days we face. Thanks to you
              great events whether its weekly, monthly, or quarterly all handed
              well, even others can learn from your guide as well. Not only for
              the events you also maintain your job well, thank you for the
              helps in recon and also websites, I noticed you even work in the
              weekend too with Lika.
            </p>
            <p className={raleway.className}>
              Freedom is more like I saw you have going so many places, you
              might have stories in each one of it, and that's when I saw it.
              It's good to explore and know something new. Even I remember you
              goin' to Jogja with Farhan, I never seen such a happy face in
              Farhan before those moment, haha. I realize you also like Digimon,
              Conan, and also Pokemon, we have same interests as I also collect
              Conan comics through my childhood, and also knows all pokemon name
              (only until before Black and White). Sorry too I didn't realize
              Akai was member of the Black Organization, though he was a good
              character, but CMIIW.
            </p>
            <p className={raleway.className}>
              If there's other event and you might need help, don't hesitate to
              ask me, I'll try to help as well. Honestly, I might get bit
              confused when pick you one below, but you really have good role in
              the team I felt, and maybe this one fits you well.
            </p>
            <p className={raleway.className}></p>
          </section>
          <section className="section-music">
            <Music source="/ost/Hadi.mp3" title="Ericdoa - Greater Than One" />
          </section>
        </div>
      </div>
    </>
  );
};

export default Hadi;
