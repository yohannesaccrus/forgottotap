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
              we were into model kits at some points, but you were more into
              creature while I more into machines. In short, we might have
              similar desk, but yours were more colorful.
            </p>
            <p className={raleway.className}>
              Thank you ya Val for the effort you put to the team, and also your
              help when I need to make the seller didn't know the buyer was me.
              It means and it helps me Val. I got you this one, and I suggest
              you check its official video, It's good too if you have heard
              about this too. This is my favorite among all the ost or songs in
              this site.
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

export default Emilda;
