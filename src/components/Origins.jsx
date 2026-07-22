import { motion, useReducedMotion } from "framer-motion";
import { fadeUp, stagger, viewport } from "../lib/motion";
import { origins as originImages, srcSet } from "../data/images";

const origins = [
  {
    country: "Ethiopia",
    region: "Yirgacheffe & Sidamo",
    notes: "Jasmine, bergamot, wild blueberry",
  },
  {
    country: "Colombia",
    region: "Huila Highlands",
    notes: "Caramel, red apple, cocoa nib",
  },
  {
    country: "Brazil",
    region: "Minas Gerais",
    notes: "Toasted nut, milk chocolate, soft spice",
  },
  {
    country: "Guatemala",
    region: "Antigua Valley",
    notes: "Brown sugar, stone fruit, gentle smoke",
  },
];

export default function Origins() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="origins section section--ink" id="locations" aria-labelledby="origins-heading">
      <div className="shell">
        <motion.header
          className="section-intro section-intro--split section-intro--light"
          initial={reduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={viewport}
          variants={fadeUp}
        >
          <h2 id="origins-heading" className="section-title section-title--light">
            Where the cup begins.
          </h2>
          <p className="section-lede section-lede--light">
            Four regions. Distinct soils, altitudes, and traditions.
          </p>
        </motion.header>

        <motion.ul
          className="origin-grid"
          variants={stagger}
          initial={reduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={viewport}
        >
          {origins.map((origin) => {
            const image = originImages[origin.country];
            return (
              <motion.li key={origin.country} variants={fadeUp}>
                <article className="origin-card">
                  <div className="origin-card__media">
                    <img
                      src={image.build(1100)}
                      srcSet={srcSet(image.build, [640, 960, 1400])}
                      sizes="(max-width: 800px) 100vw, 50vw"
                      alt={image.alt}
                      loading="lazy"
                      decoding="async"
                      width={1200}
                      height={900}
                    />
                  </div>
                  <div className="origin-card__body">
                    <p className="origin-card__region">{origin.region}</p>
                    <h3 className="origin-card__country">{origin.country}</h3>
                    <p className="origin-card__notes">{origin.notes}</p>
                    <a className="text-link text-link--light" href="#shop">
                      Learn more
                    </a>
                  </div>
                </article>
              </motion.li>
            );
          })}
        </motion.ul>
      </div>
    </section>
  );
}
