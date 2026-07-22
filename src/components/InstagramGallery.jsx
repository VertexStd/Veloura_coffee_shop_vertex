import { motion, useReducedMotion } from "framer-motion";
import { fadeUp, springSoft, stagger, tapScale, viewport } from "../lib/motion";
import { instagram as gallery, srcSet } from "../data/images";

export default function InstagramGallery() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="instagram" aria-labelledby="instagram-heading">
      <div className="instagram__bar shell">
        <motion.div
          className="instagram__intro"
          initial={reduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={viewport}
          variants={fadeUp}
        >
          <h2 id="instagram-heading" className="instagram__title">
            @velouracoffee
          </h2>
          <a
            className="text-link"
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Follow on Instagram
          </a>
        </motion.div>
      </div>

      <motion.ul
        className="masonry"
        variants={stagger}
        initial={reduceMotion ? false : "hidden"}
        whileInView="visible"
        viewport={{ once: true, amount: 0.08 }}
      >
        {gallery.map((image) => (
          <motion.li
            key={image.alt}
            className={`masonry__item masonry__item--${image.size}`}
            variants={fadeUp}
          >
            <motion.a
              className="masonry__frame"
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              whileTap={reduceMotion ? undefined : tapScale}
              transition={springSoft}
            >
              <img
                src={image.build(700)}
                srcSet={srcSet(image.build, [400, 700, 1000])}
                sizes="(max-width: 560px) 90vw, (max-width: 900px) 45vw, 32vw"
                alt={image.alt}
                loading="lazy"
                decoding="async"
                width={700}
                height={900}
              />
            </motion.a>
          </motion.li>
        ))}
      </motion.ul>
    </section>
  );
}
