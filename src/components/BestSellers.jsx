import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { fadeUp, springSoft, stagger, tapPress, viewport } from "../lib/motion";
import { bestsellers as bestImages, srcSet } from "../data/images";

const bestsellers = [
  { name: "Noir Reserve", price: "$28", note: "Floral · citrus" },
  { name: "Veloura Estate", price: "$32", note: "Cocoa · honey" },
  { name: "Silk Road Blend", price: "$34", note: "Bergamot · stone fruit" },
  { name: "Midnight Bloom", price: "$26", note: "Dark chocolate · spice" },
];

function CountUp({ value, reduceMotion }) {
  const [display, setDisplay] = useState(reduceMotion ? value : 0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    if (reduceMotion) return undefined;
    const node = ref.current;
    if (!node) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started.current) return;
        started.current = true;
        const start = performance.now();
        const duration = 900;
        const tick = (now) => {
          const t = Math.min(1, (now - start) / duration);
          const eased = 1 - (1 - t) ** 3;
          setDisplay(Math.round(value * eased));
          if (t < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.5 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [reduceMotion, value]);

  return (
    <span ref={ref} className="best-count">
      {display}
    </span>
  );
}

export default function BestSellers() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="bestsellers section" aria-labelledby="bestsellers-heading">
      <div className="shell">
        <motion.header
          className="section-intro section-intro--row section-intro--sticky"
          initial={reduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={viewport}
          variants={fadeUp}
        >
          <div>
            <h2 id="bestsellers-heading" className="section-title">
              Best sellers
            </h2>
            <p className="bestsellers__count" aria-hidden="true">
              <CountUp value={4} reduceMotion={reduceMotion} /> favorites
            </p>
          </div>
          <a className="text-link" href="#shop">
            View all
          </a>
        </motion.header>

        <motion.ol
          className="best-list"
          variants={stagger}
          initial={reduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={viewport}
        >
          {bestsellers.map((coffee, index) => {
            const image = bestImages[coffee.name];
            return (
              <motion.li key={coffee.name} variants={fadeUp}>
                <motion.article
                  className="best-item"
                  whileTap={reduceMotion ? undefined : { opacity: 0.92 }}
                  transition={{ duration: 0.15 }}
                >
                  <span className="best-item__num" aria-hidden="true">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="best-item__media">
                    <img
                      src={image.build(480)}
                      srcSet={srcSet(image.build, [240, 400, 640])}
                      sizes="88px"
                      alt={image.alt}
                      loading="lazy"
                      decoding="async"
                      width={700}
                      height={875}
                    />
                  </div>
                  <div className="best-item__info">
                    <h3 className="best-item__name">{coffee.name}</h3>
                    <p className="best-item__note">{coffee.note}</p>
                  </div>
                  <p className="best-item__price">{coffee.price}</p>
                  <motion.button
                    type="button"
                    className="btn btn--dark best-item__cart"
                    whileTap={reduceMotion ? undefined : tapPress}
                    transition={springSoft}
                  >
                    Add to Cart
                  </motion.button>
                </motion.article>
              </motion.li>
            );
          })}
        </motion.ol>
      </div>
    </section>
  );
}
