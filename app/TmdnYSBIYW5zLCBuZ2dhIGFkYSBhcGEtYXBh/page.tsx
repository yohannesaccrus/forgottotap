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

const Hans = () => {
  return (
    <>
      <div className="container-fonts">
        <h1 className="side-name hans">Hans</h1>
        <h1 className="side-trait hans">Consistency</h1>
      </div>
      <div className="container">
        <div className="content">
          <section className="section-title member julian">
            <h1 className={caveat.className}>
              - <span>Hans</span> -
            </h1>
          </section>
          <section className="section-content member">
            <p className={raleway.className}>
              I've never met someone with high consistency as you have Hans,
              there were no living person I knew who can keep their menu on one
              menu one week straight without exchanging and re-rollin' it again
              on the next week, your level of consistency its like even stronger
              than the typescript itself. It's good but please also remember you
              can still try this and that alright ? It's like the coffee you
              sometimes come to me to ask scissor to open it, besides water you
              have coffee.
            </p>
            <p className={raleway.className}>
              Thank you for all the meme you always share it with me, we're
              going through Akik to Ghazal without even know but laugh together.
              It's like our things to brighten up the day after the daily quests
              has been done isn't it ? anyway we all know this is living would
              like. You grind, you goin' home, but you feel wonder from smallest
              things
            </p>
            <p className={raleway.className}>
              Also Hans, for all the effort you did, which what I knew you were
              oftenly going extra miles, I hope someday it will be getting paid
              off, your works is not just a works Hans. I hope there's a new
              path for you to show who you are onwards Hans. But please remember
              to not abuse your terminal or vs code with AI that much, it could
              make your laptop going whosssshhhh with no stop and also Adi
              complainings.
            </p>
            <p className={raleway.className}>
              I also saw you have that passion and enjoy riding goin' anywhere,
              and I was also shocked but pleased to know that you picked the
              same color scheme as Bellinda have. The thing is, the team were
              most behind the wheels, but we need someone to be on those wheels.
            </p>
          </section>
          <section className="section-music">
            <Music
              source="/ost/Hans.mp3"
              title="Hillsong Young & Free - This Is Living (Acoustic)"
            />
          </section>
        </div>
      </div>
    </>
  );
};

export default Hans;
