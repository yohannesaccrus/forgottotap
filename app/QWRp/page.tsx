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

const Adi = () => {
  return (
    <>
      <div className="container-fonts">
        <h1 className="side-name adi">Adi</h1>
        <h1 className="side-trait adi">Loyalty</h1>
      </div>
      <div className="container">
        <div className="content">
          <section className="section-title member julian">
            <h1 className={caveat.className}>
              - <span>Adi</span> -
            </h1>
          </section>
          <section className="section-content member">
            <p className={raleway.className}>
              Adi, for all the helps, my miss-presence during the SU and other
              meets, and also your backup effort when I'm unavailable, I want to
              truly say thanks to you. Acquiring become better and better mainly
              because of your efforts too, even currently you handle it the most
              because me and Mas Con were out, you were great Di.
            </p>
            <p className={raleway.className}>
              Together with Mas Con I want us to have a good moment together
              after all the waves caused mostly by Josh and Utsav. We're
              together in this but please maintain distance when we're off,
              cause its like your presence is anywhere around me, like the
              moment in the hospital, even you accompany me as a Qur'an. But its
              okay, your spirit and the others who helped me recover and also
              keep this team alive as well, especially with Calvary and Andre,
              exchanging jokes.
            </p>
            <p className={raleway.className}>
              Have you ever wonder if your name got a bit "u" on it ?, and also
              this one below might bring memories, just try not to compare the
              vocalist with our highest lead, please enjoy and also remember
              to...
            </p>
            <p className={raleway.className} style={{ textAlign: "center" }}>
              Just Keep Being Adi
            </p>
          </section>
          <section className="section-music">
            <Music
              source="/ost/Adi.mp3"
              title="J-Rocks ft. Prisa - Kau Curi Lagi"
            />
          </section>
        </div>
      </div>
    </>
  );
};

export default Adi;
