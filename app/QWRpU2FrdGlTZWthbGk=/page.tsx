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
              truly say thank you. Acquiring become better and better mainly
              because of your efforts too, even at this several recent PRD's you
              handle it the most because me and Mas Con were out of the team,
              you were great Di. Adi Sakti Sekali title comes with real power I
              guess.
            </p>
            <p className={raleway.className}>
              Sometimes I wonder why you always like around me, we're on the
              same team, we're just cross by the roads of our place we stay,
              even when I'm at my lowest sick moment, alone, scared, you were
              there in form of Qur'an, truly touched but also amazed at the same
              time. Thank you also for put the good spirit through the team, the
              KLIN culture during tuesday which you made with others, and all
              the kinds and efforts. Those things made the team alive!
            </p>
            <p className={raleway.className}>
              Together with Mas Con I want us to have a good moment together
              after all the waves caused mostly by Josh and Utsav. Especially
              during my off's last month, both of you were helped me. I'm very
              sorry too if there's things that I need to hold or ran into which
              I may forgot the key which get to your Samantha last week, I also
              feel other case happen to me lately.
            </p>
            <p className={raleway.className}>
              Anyway, have you ever wonder if your name got "u" middle of it ?,
              and also this one below might bring memories, just try not to
              compare the vocalist with our highest lead, I kinda feel they were
              similar in look, please enjoy and also remember to...
            </p>
            <p className={raleway.className} style={{ textAlign: "center" }}>
              Just Keep Being Adi
            </p>
          </section>
          <section className="section-music">
            <Music
              source="/ost/Adi.mp3"
              title="J-Rocks ft. Prisa - Kau Curi Lagi"
              startAt={67}
            >
              <p className={raleway.className}>
                And also Adi, along with Mas Con, I'm invite you to the{" "}
                <strong>AS x CS Night's Out</strong>, as I want to appreciate
                both of your efforts through AS, CS and also Platforms in the
                end of this Q2, I will update the selection of the place here
                later on including the one below us, and also can decide the
                time with Mas Con, it's only the name consist of "Night", but it
                doesn't have to be at night.
              </p>
            </Music>
          </section>
        </div>
      </div>
    </>
  );
};

export default Adi;
