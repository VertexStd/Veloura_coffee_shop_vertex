import { motion, useReducedMotion } from "framer-motion";
import { fadeUp, springSoft, tapScale, viewport } from "../lib/motion";
import { finalCta, srcSet } from "../data/images";

export default function FinalCTA() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="final-cta" aria-labelledby="final-cta-heading">
      <div className="final-cta__media" aria-hidden="true">
        <img
          src={finalCta.build(1600)}
          srcSet={srcSet(finalCta.build, finalCta.widths)}
          sizes="100vw"
          alt=""
          loading="lazy"
          decoding="async"
          width={1800}
          height={1200}
        />
      </div>
      <div className="final-cta__overlay" aria-hidden="true" />

      <motion.div
        className="final-cta__inner"
        initial={reduceMotion ? false : "hidden"}
        whileInView="visible"
        viewport={viewport}
        variants={fadeUp}
      >
        <h2 id="final-cta-heading" className="final-cta__headline">
          Experience Coffee
          <br />
          Beyond Ordinary.
        </h2>
        <motion.a
          className="btn btn--light"
          href="#shop"
          whileTap={reduceMotion ? undefined : tapScale}
          transition={springSoft}
        >
          Shop Now
        </motion.a>
      </motion.div>
    </section>
  );
}
