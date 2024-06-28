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
        <h1 className="side-name paul">Down to Earth</h1>
        <h1 className="side-trait paul">Paul</h1>
      </div>
      <div className="container">
        <div className="content">
          <section className="section-title member julian">
            <h1 className={caveat.className}>
              - <span>Paul</span> -
            </h1>
          </section>
          <section className="section-content member">
            <h3 className={raleway.className} style={{ textAlign: "center" }}>
              We're Friends, no Worries
            </h3>
          </section>
          <section className="section-music">
            <Music source="/ost/Bangun.mp3" title="Tyla - Water" />
          </section>
        </div>
      </div>
    </>
  );
};

export default Hadi;
