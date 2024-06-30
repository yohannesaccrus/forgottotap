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

const Andre = () => {
  return (
    <>
      <div className="container-fonts">
        <h1 className="side-name andre">hero</h1>
        <h1 className="side-trait andre">andre</h1>
      </div>
      <div className="container">
        <div className="content">
          <section className="section-title member julian">
            <h1 className={caveat.className}>
              - Andre <span>Satria</span> -
            </h1>
          </section>
          <section className="section-content member">
            <p className={raleway.className}>
              You might think why I write Hero in here and there, and it was
              because I feel that kind of good and cheerful feelings, or not
              just me I think, but us, its like most of the people have the same
              feelings when you were around Ndre. Just hit me if I'm wrong, but
              I think yes if you have two sides of you, the one is fun, full of
              jokes and laugh, but the other one is so brave and bold figure,
              and that's what a heroes do.
            </p>
            <p className={raleway.className}>
              Since the first time of our 30 minutes meet, I saw you were also
              very humble, good listener, and also willing to put others first
              before you, this kindness is rare Andre, really. I also realize we
              have same interests in model kits, porter robinson, urban
              exploration, mythical things and others which cannot be seen with
              clear eye, but the ending was the same, we were both frightened,
              but while you might express it immediately, I express it through
              my struggle to sleep at night.
            </p>
            <p className={raleway.className}>
              I would like to also thank you for your works, your advice, and
              also the times when you put your efforts to make this team grow.
              You have remarkable skills Andre, and you're also willing to share
              it and also help others. I know there's been darkest time for you
              to goin' through, and I hope you'll rise through it and know that
              those won't stop you of getting what you've been dreamed of.
            </p>
            <p className={raleway.className}>
              Once, you told me about a dream you had, I remember you said you
              like it black, but sorry Andre, I tried but I got the green one.
              Below is not Shelter or Everything Goes On, but kind of similar,
              and also may reflect what you did to most of us here, hope you
              enjoy it. Anyway, <strong>7497</strong> from Caca during last week
              was great picture, heroes sometimes need mask too isn't it ?? =)
            </p>
          </section>
          <section className="section-music">
            <Music
              source="/ost/Andre.mp3"
              title="Manse & Neyra - Won’t Let Go"
              startAt={45}
            />
          </section>
        </div>
      </div>
    </>
  );
};

export default Andre;
