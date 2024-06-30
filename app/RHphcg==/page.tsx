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

const Dzar = () => {
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
              Hi Pak, there's lot of moments, up and downs, trouble and issues
              since our first time through DD, hard times with Wang Sen of the
              portal "depreciation", and eventually fights with admin portal.
              Thank you Dzar for always help and support during the hard times,
              also thank you for being a person who always fight for things we
              need or deserve to knew, and thank you for also involving me in
              the way of it.
            </p>
            <p className={raleway.className}>
              There's hard times Dzar I knew, even at the start of this year you
              experienced it the most, I hope everything goes well for the team.
              You can always talks to me when things happens, because sometimes
              I did feel confused to honestly. But I do hope we can talk about
              other than company things with cups of Liong, I never had this one
              and curious about the taste of it. Let's one day grab one
            </p>
            <p className={raleway.className}>
              Might the same with Emil's Ottoke, your 'Hmmmmm' is that simple
              but good things to the team. Its unique tone I think only Daniel
              can imitate it, makes both of you have bond beyond the team, haha.
              Simple but makes the team cheers through it, thanks Dzar. I
              realize also you have interest in hiking, mountains or hills, the
              last time even with Daniel and couples from regionals.
            </p>
            <p className={raleway.className}>
              I hope it express your interest through hiking, because it can run
              in all terrains. Hope one day we can all see you hike other
              mountains and see it through your instagram account. Also there's
              always something in Jogja isn't it ?
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

export default Dzar;
