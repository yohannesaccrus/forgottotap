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
              Hi Hadi, I saw you have goin so many places, you might have
              stories in each one of it. I feel freedom in you everytime I saw
              into your stories, It's good to explore and know something new.
              Besides we have same interest like Calvary in Pokemon but not
              Digital one, Calvary seems not into it.
            </p>
            <p className={raleway.className}>
              Thank you for all the effort ya Di, in recon and also website, I
              saw you were working in weekend too with Lika. And also thank you
              to have been coordinated most of our events too, you really did a
              good works. For the part below, Its kinda hard to pick knowing you
              were into lot of songs, but hope this might suit you, it express
              freedom too I think.
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
