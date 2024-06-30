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

const Daniel = () => {
  return (
    <>
      <div className="container-fonts">
        <h1 className="side-name daniel">Daniel</h1>
        <h1 className="side-trait daniel">Hope</h1>
      </div>
      <div className="container">
        <div className="content">
          <section className="section-title member julian">
            <h1 className={caveat.className}>
              - <span>Daniel</span> -
            </h1>
          </section>
          <section className="section-content member">
            <p className={raleway.className}>
              Far and exciting journey awaits Dan, I'm also happy when hear you
              got the chance of going abroad, it will surely become precious and
              great experience to you. Prepare everything carefully Dan, so you
              can goin' there well, and starts there well too. Hope everything
              is good for you before and after you get there.
            </p>
            <p className={raleway.className}>
              Thank you for all the effort you put to the team, especially for
              wallet, and your helps through JIRA's bots with Fanny and Dzar.
              Thanks for all the music you played well through the stories,
              through the brownbags (when everyone wows you), event with Hans,
              or just when we do chit chat after the day ends, it will surely be
              remembered as the team's spirit.
            </p>
            <p className={raleway.className}>
              Eventhough you seems more calm than Calvary but you also brave, I
              think this is also one trait you have which leads to your path,
              besides you also goin' into places and also conquer the Mt. Bromo
              with Dzar. After the SIPP and your next chapter in US, I hope
              there's moment we meet again in the future, surely there will be
              lot of stories we have. The ost. below were also being used as
              reunion in its movie, and might be a good backsound too when you
              on your journey.
            </p>
          </section>
          <section className="section-music">
            <Music
              source="/ost/Daniel.mp3"
              title="Bryan Tyler - Neela's Drift"
            />
          </section>
        </div>
      </div>
    </>
  );
};

export default Daniel;
