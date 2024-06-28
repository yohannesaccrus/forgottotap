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

const Zhafran = () => {
  return (
    <>
      <div className="container-fonts">
        <h1 className="side-name zhafran">courage</h1>
        <h1 className="side-trait zhafran">Zhafran</h1>
      </div>
      <div className="container">
        <div className="content">
          <section className="section-title member julian">
            <h1 className={caveat.className}>
              - <span>Zhafran</span> -
            </h1>
          </section>
          <section className="section-content member">
            <p className={raleway.className}>
              Yes, you can still reply me and the others through email Zhaf, it
              means you were still on the team. I think if there's tech update,
              company related plan which being whistleblowed, or someone ran off
              wild because got cut off forcefully you were the right person to
              go before Condro and the others, cause you might knew it so well,
              even the darkest one. This is good thing to keep update, because
              we need to follow tech trends right ?
            </p>
            <p className={raleway.className}>
              From Jo to Zhizou, from SIPP through recon, from bifrost to antd,
              you've been proven that much you've been growing since the time
              you joined. Your courage made it to this current of time, which
              you always and still have points and efforts to make the team
              develop more. As I said also to Andre your skills is also
              remarkable, and thank you for have sharing this with the others
              through advice, reviews, and standards. Thanks also for always put
              fire or encourage the team to grow more Zhaf.
            </p>
            <p className={raleway.className}>
              If I roll back the time, I feel that relief again when you finally
              able to join the team, as jo keep rejecting others to join. Thanks
              again for the time through all the up and downs and also the
              moments we had all good and bad, however through those things we
              can learn and develop more.
            </p>
            <p className={raleway.className}>
              I've never been really talks about what genre you likes, but I did
              know someone you might want to hear him singing.
            </p>
          </section>
          <section className="section-music">
            <Music source="/ost/Zhafran.mp3" title="Kimi no Nawa - ??????" />
          </section>
        </div>
      </div>
    </>
  );
};

export default Zhafran;
