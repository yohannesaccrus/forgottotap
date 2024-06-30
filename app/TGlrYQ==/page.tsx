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
              Hi Lika, how was the last week's BR roller coaster ? hahaha. We
              were infrequently in the same project ya Lik, until this website
              project comes and also because Chung Kit code base design which
              may need Condro's help to fix and onwards you were involved the
              most. It's a kind of responsibility you take on here, yes we know
              its not run that smooth because there's issues here and there, but
              during the times we worked, I feel kind of strong will from you, I
              know it's kind of job requirement is it ?, but you got the spirit
              on you, the will, the brave, to overcome this all, and it's a big
              leap, isn't it?
            </p>
            <p className={raleway.className}>
              It's hard I knew, I believe others would also thinks the same, why
              it is so hard just to send the urls and tell what need to do, but
              I believe you'll get to know more through this, not just you but
              me too, the others too. I'm sorry if there's miss one or two
              things which may leads to us getting confused. But I'll try to
              overcome this as well, just don't be affraid to ask or tell us if
              you experience something wrong, we fix of course, but if its dead
              end, we'll smash somenone's seatalk if it needs to, haha.
            </p>
            <p className={raleway.className}>
              Anyway, that's all about the works and codes, I know you were the
              one who also calm in the team being not calm because of this one,
              even you told me you work during leave and weekend. Thank you ya
              Lik for your great efforts, you have a good will I feel.
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
