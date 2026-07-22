import { motion, useReducedMotion } from "framer-motion";
import { fadeUp, stagger, viewport } from "../lib/motion";
import { brewing as brewingImages, srcSet } from "../data/images";

const methods = [
  {
    name: "Espresso",
    description: "Dense crema, vivid aroma, a polished finish under pressure.",
    time: "25–30 sec",
  },
  {
    name: "Pour Over",
    description: "A deliberate bloom that opens floral notes and clarity.",
    time: "3–4 min",
  },
  {
    name: "French Press",
    description: "Full immersion for richer body and silky texture.",
    time: "4–5 min",
  },
  {
    name: "Cold Brew",
    description: "Low acidity, gentle sweetness, steeped with patience.",
    time: "12–16 hrs",
  },
];

export default function BrewingGuide() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="brewing section section--stone" aria-labelledby="brewing-heading">
      <div className="shell">
        <motion.header
          className="section-intro section-intro--split section-intro--sticky"
          initial={reduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={viewport}
          variants={fadeUp}
        >
          <h2 id="brewing-heading" className="section-title">
            Methods for the home ritual.
          </h2>
          <p className="section-lede">
            Four approaches—each tuned to draw out character without noise.
          </p>
        </motion.header>

        <motion.ul
          className="brew-list"
          variants={stagger}
          initial={reduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={viewport}
        >
          {methods.map(({ name, description, time }) => {
            const image = brewingImages[name];
            return (
              <motion.li key={name} variants={fadeUp}>
                <article className="brew-row">
                  <div className="brew-row__media">
                    <img
                      src={image.build(360)}
                      srcSet={srcSet(image.build, [240, 360, 480])}
                      sizes="72px"
                      alt={image.alt}
                      loading="lazy"
                      decoding="async"
                      width={480}
                      height={480}
                    />
                  </div>
                  <div className="brew-row__copy">
                    <h3 className="brew-row__name">{name}</h3>
                    <p className="brew-row__text">{description}</p>
                  </div>
                  <p className="brew-row__time">
                    <span className="brew-row__time-label">Time</span>
                    {time}
                  </p>
                </article>
              </motion.li>
            );
          })}
        </motion.ul>
      </div>
    </section>
  );
}
