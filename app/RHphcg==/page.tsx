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
        <h1 className="side-name dzar">Curiosity</h1>
        <h1 className="side-trait dzar">Dzar</h1>
      </div>
      <div className="container">
        <div className="content">
          <section className="section-title member julian">
            <h1 className={caveat.className}>
              - <span>Dzar</span> -
            </h1>
          </section>
          <section className="section-content member">
            <p className={raleway.className}>
              Actually there is much I want to say about you Dzar, especially
              you were also the early members of the FE team up until now.
              You're a person who always fight for things you want or deserve to
              knew, and thank you for also involving me in the way of it, again
              I'm sorry I can't say that much, I think I will update this page
              again.
            </p>
            <p className={raleway.className}>
              Thanks for all the effort in team and also advice until shopee FE
              academy starts, it was my turn next, uhhh..
            </p>
            <p className={raleway.className}>
              I realize you have interest in hiking, mountains or hills, the
              last time even with Daniel and couples from regionals. I hope it
              express your interest through hiking, because it can run in all
              terrains, and also because I knew you Dzar, there will be always
              something in Jogja, which is also my first town I visit I
              remembered when I was a child.
            </p>
          </section>
          <section className="section-music">
            <Music
              source="/ost/Dzar.mp3"
              title="Adhitia Sofyan - Sesuatu di Jogja"
            />
          </section>
        </div>
      </div>
    </>
  );
};

export default Emilda;
