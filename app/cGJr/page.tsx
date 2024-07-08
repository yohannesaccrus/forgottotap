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
            <p className={raleway.className}>
              Potion and Poison for us most of the times, nothing I could say except thank you for all these moments too with Julian until this current time, orange days, dinners in SCBD, shopee festival, all the goood and bad. When I said
              poison and potion, I really mean it, Poison means you can laugh with us together or even triggered it for "someone", and potion means you were also good friend since I enter shopee Mas Bangun.
              Just don't put Edwin in or it would be Poison Poison Potion, hahaha, just a joke.
            </p>
            <p className={raleway.className}>
              Things were going hard ya Mas Bangun, I also see what you've been faced on during this current time and recently,
              "More zoom to grow" just not making everyone grows.
              I hope slowly your team and your stallions will rise again, end this suffering. Thank you too for being a good and humorous figure to all FE.
            </p>
            <p className={raleway.className}>
              I enjoy all of our lunch moment together with Julian, eventhough I missed the first peda pelangi in SCBD, hope to keep this on but I'll skip if its release week. I'm sorry if the one
              I gave you under the magnum hood is too small compared to the others, hope it can be seen.
            </p>
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
