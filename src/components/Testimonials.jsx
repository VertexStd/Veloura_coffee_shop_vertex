import { motion, useReducedMotion } from "framer-motion";
import { fadeUp, viewport } from "../lib/motion";
import { testimonials as testimonialImages } from "../data/images";

const testimonials = [
  {
    name: "Amelia Hart",
    role: "Brooklyn",
    review:
      "Veloura feels like a quiet ritual. The Estate roast is layered and sweet—every morning cup is unhurried and complete.",
  },
  {
    name: "James Okonkwo",
    role: "London",
    review:
      "Noir Reserve is the first coffee that made me pause mid-sip—elegant, bright, and deeply considered.",
  },
  {
    name: "Sofia Reyes",
    role: "Mexico City",
    review:
      "From packaging to pour, everything feels intentional. Silk Road has become our afternoon signature.",
  },
];

function Author({ item }) {
  const image = testimonialImages[item.name];
  return (
    <footer className="quote__author">
      <img
        className="quote__photo"
        src={image.build(160)}
        alt={image.alt}
        width={48}
        height={48}
        loading="lazy"
        decoding="async"
      />
      <div>
        <cite className="quote__name">{item.name}</cite>
        <p className="quote__role">{item.role}</p>
      </div>
    </footer>
  );
}

export default function Testimonials() {
  const reduceMotion = useReducedMotion();
  const [featured, ...rest] = testimonials;

  return (
    <section className="testimonials section" aria-labelledby="testimonials-heading">
      <div className="shell">
        <motion.h2
          id="testimonials-heading"
          className="section-title testimonials__title"
          initial={reduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={viewport}
          variants={fadeUp}
        >
          Words from the cup.
        </motion.h2>

        <div className="quote-layout">
          <motion.blockquote
            className="quote quote--featured"
            initial={reduceMotion ? false : "hidden"}
            whileInView="visible"
            viewport={viewport}
            variants={fadeUp}
          >
            <p className="quote__text">“{featured.review}”</p>
            <Author item={featured} />
          </motion.blockquote>

          <div className="quote-stack">
            {rest.map((item) => (
              <motion.blockquote
                key={item.name}
                className="quote"
                initial={reduceMotion ? false : "hidden"}
                whileInView="visible"
                viewport={viewport}
                variants={fadeUp}
              >
                <p className="quote__text">“{item.review}”</p>
                <Author item={item} />
              </motion.blockquote>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
