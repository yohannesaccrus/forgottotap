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

const Calvary = () => {
  return (
    <>
      <div className="container-fonts">
        <h1 className="side-name calvary">Calvary</h1>
        <h1 className="side-trait calvary">Enthusiasm</h1>
      </div>
      <div className="container">
        <div className="content">
          <section className="section-title member julian">
            <h1 className={caveat.className}>
              - <span>Calvary</span> -
            </h1>
          </section>
          <section className="section-content member">
            <p className={raleway.className}>
              Hi Val, this might be won't be that long since I need sleep. But I
              feel grateful because you were share the same enthusiasm with me,
              we were into model kits at some points, toys, and also pokemons.
              But through the similarity I'm more into Kanto and Johto than the
              others, even my favorite one is Typhlosion and Heracross. In
              short, we may differ in pokemon generations, but we might have
              similar desk, only yours were more colorful than mine. Thank you
              for this enthusiasm to let me not feel alone.
            </p>
            <p className={raleway.className}>
              Thank you also Val for the effort you put to the team, and also
              your help when I need to make the seller didn't know the buyer was
              me. It means and it helps me well Val. Thank you for the
              invitation too during the AFA this year with Andre and the others,
              it was new experience for me too. Sorry if your "powering-up"
              picture had been held by Caca, it was because my story after the
              event.
            </p>
            <p className={raleway.className}>
              Besides of all, this one below is the my most favorite, it's not
              titled "Pokemon" or other things related to it, but it surely
              picturize our excitement through the things which may brings our
              childhood memories back and also make this feel of our troubled
              heart is goin' away.
            </p>
          </section>
          <section className="section-music">
            <Music source="/ost/Calvary.mp3" title="Ed Sheeran - Celestial" />
          </section>
        </div>
      </div>
    </>
  );
};

export default Calvary;
