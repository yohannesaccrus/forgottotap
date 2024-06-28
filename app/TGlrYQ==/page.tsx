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

const Lika = () => {
  return (
    <>
      <div className="container-fonts">
        <h1 className="side-name lika">Will</h1>
        <h1 className="side-trait lika">Lika</h1>
      </div>
      <div className="container">
        <div className="content">
          <section className="section-title member julian">
            <h1 className={caveat.className}>
              - <span>Lika</span> -
            </h1>
          </section>
          <section className="section-content member">
            <p className={raleway.className}>
              Lik, we were infrequently in the same project, until this website
              project comes and also because Chung Kit code base design which
              may need Condro's help to fix and onwards you were involved the
              most. It's a kind of responsibility you take on here, and it
              requires a strong will, which I see you have, to try to overcome
              it. It's a big leap, isn't it?
            </p>
            <p className={raleway.className}>
              The process is kinda sometimes quite takes time and lots of
              intermittent, but I believe you'll get to know more through this.
              I'm sorry too if there's miss one or two things which may leads to
              us getting confused. But I'll try to overcome this as well, just
              don't be affraid to ask or tell us if you experience something
              wrong, it's kinda our responsibility too, haha.
            </p>
            <p className={raleway.className}>
              Anyway, that's all about the code, I know you were the one who
              also calm in the team being not calm because of this one, even you
              told me you work during leave and weekend. Thank you ya Lik for
              your great effort, you have a good will I feel.
            </p>
            <p className={raleway.className}>
              We were once talks about you collect a playlist for your future
              needs, hope this one is reference too
            </p>
          </section>
          <section className="section-music">
            <Music
              source="/ost/Lika.mp3"
              title="Tim Halperin - Waiting for Us"
            />
          </section>
        </div>
      </div>
    </>
  );
};

export default Lika;
