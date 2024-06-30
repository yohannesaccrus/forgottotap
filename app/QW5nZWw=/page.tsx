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

const Angel = () => {
  return (
    <>
      <div className="container-fonts">
        <h1 className="side-name angel">Passions</h1>
        <h1 className="side-trait angel">Angel</h1>
      </div>
      <div className="container">
        <div className="content">
          <section className="section-title member julian">
            <h1 className={caveat.className}>
              - <span>Angel</span> -
            </h1>
          </section>
          <section className="section-content member">
            <p className={raleway.className}>
              If its determined by the talks we all had, from the thing you
              talks also, I think its good to say that your passions is unique.
              It was good you have this kind of unique passions, because from
              what I believe if we assume passions is the same like hobbies, it
              could lead us connect to someone new which may help us during our
              effort in building something, its kind of your ticket to know each
              other well. So keep your passions Angel, its good and unique in
              both ways.
            </p>
            <p className={raleway.className}>
              If its about works, you were the one who brings my mentorship
              moment back, because previously I'm with QA. Since that moment
              you've been worked with Lika and Emil, and I see you get along
              well in CC and website. You also have good styling skills I feel
              through the code and interest, It's feels so good to code
              something we can see, because if not then you may involve many
              heads to overcome it, and this is one of the reason we become FE.
              Thank you Angel for your code, your help, and your effort to the
              team.
            </p>
            <p className={raleway.className}>
              I saw you had one, please don't mind if this also comes upon you,
              they might be friend with one Daniel had given to you, and also if
              you driving through the weekend or through to Cikarang, can also
              listen to the one below.
            </p>
          </section>
          <section className="section-music">
            <Music
              source="/ost/Angel.mp3"
              title="Miki Matsubara - Stay With Me (JDM Edit)"
            />
          </section>
        </div>
      </div>
    </>
  );
};

export default Angel;
