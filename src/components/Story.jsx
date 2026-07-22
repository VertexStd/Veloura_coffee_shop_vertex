import { motion, useReducedMotion } from "framer-motion";
import { ease, fadeUp, viewport } from "../lib/motion";
import { story as storyImages, srcSet } from "../data/images";

const chapters = [
  {
    id: "sourced",
    index: "01",
    headline: "Chosen at the source.",
    description:
      "We partner with small estate growers who harvest by hand at peak ripeness—preserving the terroir that makes each origin unmistakable.",
    image: storyImages[0],
  },
  {
    id: "roasted",
    index: "02",
    headline: "Roasted slowly. Revealed completely.",
    description:
      "Each batch is profiled with restraint so sweetness unfolds, acidity stays luminous, and the bean’s character remains intact.",
    image: storyImages[1],
  },
  {
    id: "sorted",
    index: "03",
    headline: "Measured with intention.",
    description:
      "From grind to pour—precise ratios, patient bloom, and a cup that honors the work behind every bean.",
    image: storyImages[2],
  },
];

function StoryChapter({ chapter, reverse, reduceMotion }) {
  return (
    <article className={`story-row${reverse ? " story-row--reverse" : ""}`}>
      <motion.div
        className="story-row__media"
        initial={reduceMotion ? false : { opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.85, ease }}
      >
        <img
          src={chapter.image.build(1200)}
          srcSet={srcSet(chapter.image.build, [640, 960, 1400])}
          sizes="(max-width: 900px) 100vw, 55vw"
          alt={chapter.image.alt}
          width={1400}
          height={1050}
          loading="lazy"
          decoding="async"
        />
      </motion.div>

      <motion.div
        className="story-row__copy"
        initial={reduceMotion ? false : { opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.75, delay: 0.08, ease }}
      >
        <p className="story-row__index">{chapter.index}</p>
        <h3 className="story-row__headline">{chapter.headline}</h3>
        <p className="story-row__text">{chapter.description}</p>
      </motion.div>
    </article>
  );
}

export default function Story() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="story section section--stone" id="our-story" aria-labelledby="story-heading">
      <div className="shell">
        <motion.header
          className="section-intro section-intro--sticky"
          initial={reduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={viewport}
          variants={fadeUp}
        >
          <h2 id="story-heading" className="section-title">
            The quiet work behind every bean.
          </h2>
        </motion.header>

        <div className="story-rows">
          {chapters.map((chapter, index) => (
            <StoryChapter
              key={chapter.id}
              chapter={chapter}
              reverse={index % 2 === 1}
              reduceMotion={reduceMotion}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
