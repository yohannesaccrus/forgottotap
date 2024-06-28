import Image from "next/image";
import { Raleway, Caveat } from "next/font/google";

const raleway = Raleway({
  subsets: ["cyrillic"],
  display: "swap",
  weight: ["300", "400", "700"],
});

const caveat = Caveat({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "600"],
});

const Reason = () => {
  return (
    <>
      <div className="container">
        <div className="content">
          <section className="section-title">
            <h1 className={caveat.className}>
              - The <span>Box</span> of <span>Happines</span> -
            </h1>
          </section>
          <section className="section-content">
            <p className={raleway.className}>"Have you ever hear of it ?,"</p>
            <p className={raleway.className}>
              "Or you might have been experienced it before ?,"
            </p>
            <p className={raleway.className}>
              Actually, this has happened to all of us at some point. The
              difference is when we experience it and whether we still find joy
              in this 'Box of Happiness'. Honestly, I didn't experience this
              moment much when I was a child, so I got myself back my own up
              during my "adult" time. However, I remember this one moment I
              received this box, because they told me they will give me if I
              ranked well in class.., But it feels..
            </p>
            <p className={raleway.className}>
              it feels like I'm goin' to the sky because I feel that much of
              appreciation of what I did
            </p>
            <p className={raleway.className}>
              It was what happened to me, which I try to re-create those moments
              during my current time, and who knows you might also have the same
              thing as I did
            </p>
            <p className={raleway.className}>
              "Or maybe will experience it in the future ?..,""
              <br />
              well.., ring also comes within a box before it opened, right ?
            </p>
            <div className="media-container">
              <div className="visual">
                <Image
                  src="/static/cat.webp"
                  alt="Box"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                />
              </div>
              <p className="caption">
                I ain't give you a cat, it's the illustration
              </p>
            </div>
            <p className={raleway.className}>
              "and do we still enjoy it ? I still believe we are.."
            </p>
            <p className={raleway.className}>
              Because inside of it might be something we like, our passions,
              might also dreams, or something which relates to our lives. We're
              all different in a very good way, and the box you may receive
              currently may relates to it.
            </p>
            <p className={raleway.className}>
              The thing is, I want to re-create this feelings not only for
              myself
            </p>
            <p className={`${raleway.className} last`}>
              - Thank you for the efforts, stories, advices, and also kindness
              through the good and rough days we're all passed -
            </p>
          </section>
        </div>
      </div>
    </>
  );
};

export default Reason;
