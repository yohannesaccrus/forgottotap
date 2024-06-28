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

const Julian = () => {
  return (
    <>
      <div className="container-fonts">
        <h1 className="side-name julian">julian</h1>
        <h1 className="side-trait julian">pride</h1>
      </div>
      <div className="container">
        <div className="content">
          <section className="section-title member julian">
            <h1 className={caveat.className}>
              - Pak <span>Jul</span> -
            </h1>
          </section>
          <section className="section-content member">
            <p className={raleway.className}>
              We were together since there is no standards, no microfrontends,
              no JIRA, no Bingjie, no H* drama(s) but there is Jo. I did
              remember you offer me Beng-beng also Oreo when I'm at the lowest
              state in my life and also confidently said "Gue" when I ask where
              are the other members of FE in the team. Those we're not came in
              form of a box, but there's happines I felt back then, because its
              like you won't find this kind of things anywhere else.
            </p>
            <p className={raleway.className}>
              Imagine how cool you have manager which also at the same year as
              you, and yes I told my family this many times with joy in my face.
              You build a good team and gather all of us here, guiding, making
              decisions, but at the same time also spread this friendly feelings
              among us. I knew some times were bad and hard for you also us, but
              thank you for always put and prioritize us first during and after
              the big waves.
            </p>
            <p className={raleway.className}>
              As a person who works beside you to this current time, I feel you
              have pride on this team, you feel confident but also cautious at
              the same time. This was also I've seen and hear during our talks,
              jokes, and the most moments with you, which I feel an A****** was
              the right choice to symbolize it. I hope with Pak Jul's leadership
              and the new way ahead, FE will become stronger team than before in
              terms of experience, knowledge, and skills.
            </p>
            <p className={raleway.className} style={{ textAlign: "center" }}>
              and may I close this with note with ost. which also may reflect
              your story and also your pride for living in Selatan, Jakarta
            </p>
          </section>
          <section className="section-music">
            <Music
              source="/ost/Julian.mp3"
              title="White Shoes & The Couples Company - Kisah dari Selatan Jakarta"
            />
          </section>
        </div>
      </div>
    </>
  );
};

export default Julian;
