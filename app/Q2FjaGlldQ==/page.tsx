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

const Caca = () => {
  return (
    <>
      <div className="container-fonts">
        <h1 className="side-name caca">Caca</h1>
        <h1 className="side-trait caca">Happiness</h1>
      </div>
      <div className="container">
        <div className="content">
          <section className="section-title member julian">
            <h1 className={caveat.className}>
              - <span>Caca</span> -
            </h1>
          </section>
          <section className="section-content member">
            <p className={raleway.className}>
              I'm kinda forgot on how to pronounce your other nickname, but I
              hope I get it right when you decode it. You might read this close
              to our lunch time, and this was the moment you were always there
              too, wait ESP (Extremely Sh** Product, Andre said it, not me) lift
              with most of us, make a queue for FIFO in Serba Cobek getting
              Bakwan, then goin' up again together to finish it all before 12.
            </p>
            <p className={raleway.className}>
              I think what Gunawan said before was right, you brought happiness
              to the team, through the moments, jokes, games, and along with
              Andre's "heroesness", both of you made a good team guiding Calvary
              as a happiness-rookie. Thank you Ca for all the helps you did to
              the team, sometimes I also accidentally saw you learning through
              videos or tutorials, this is a good spirit, and I believe you can
              learn and grow more. More days to come more challenge to face Ca,
              Let's keep be awesome and and rocking with the team!
            </p>
            <p className={raleway.className}>
              Ummm, if you feel your box is bigger and wilder, inside is the
              opposite of it. And again Ca, I'm sorry if I pronounce your
              nickname wrong, but I hope the song below was right, (believe or
              not this song may call you)
            </p>
          </section>
          <section className="section-music">
            <Music
              source="/ost/Caca.mp3"
              title="Basecamp 베이스캠프 - Camp ft. Colde"
            />
          </section>
        </div>
      </div>
    </>
  );
};

export default Caca;
