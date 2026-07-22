import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef } from "react";
import { ease, springSoft, tapScale } from "../lib/motion";
import { hero, srcSet } from "../data/images";

export default function Hero() {
  const reduceMotion = useReducedMotion();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  /* Subtle parallax — keeps 60fps on mobile GPUs */
  const mediaY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "6%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.65], [1, 0.55]);
  const scrollCueOpacity = useTransform(scrollYProgress, [0, 0.12], [1, 0]);

  return (
    <section className="hero" ref={ref} aria-label="Veloura Coffee introduction">
      <motion.div
        className="hero__media"
        style={reduceMotion ? undefined : { y: mediaY }}
        initial={reduceMotion ? false : { scale: 1.04 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.4, ease }}
      >
        <img
          className="hero__image"
          src={hero.build(1600)}
          srcSet={srcSet(hero.build, [800, 1200, 1600, 2000])}
          sizes="100vw"
          alt={hero.alt}
          width={2000}
          height={1333}
          fetchPriority="high"
          decoding="async"
        />
      </motion.div>

      <div className="hero__overlay" aria-hidden="true" />

      <motion.div
        className="hero__content"
        style={reduceMotion ? undefined : { y: contentY, opacity: contentOpacity }}
      >
        <motion.p
          className="hero__brand"
          initial={reduceMotion ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.08, ease }}
        >
          Veloura
        </motion.p>

        <motion.h1
          className="hero__headline"
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.18, ease }}
        >
          Crafted for Those Who Appreciate Every Sip.
        </motion.h1>

        <motion.p
          className="hero__support"
          initial={reduceMotion ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.3, ease }}
        >
          Small-batch coffee, roasted with patience and poured with intention.
        </motion.p>

        <motion.div
          className="hero__actions"
          initial={reduceMotion ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.4, ease }}
        >
          <motion.a
            className="btn btn--light"
            href="#shop"
            whileTap={reduceMotion ? undefined : tapScale}
            transition={springSoft}
          >
            Shop Collection
          </motion.a>
          <motion.a
            className="hero__text-cta"
            href="#our-story"
            whileTap={reduceMotion ? undefined : { opacity: 0.55 }}
          >
            Our Story
          </motion.a>
        </motion.div>
      </motion.div>

      <motion.a
        className="hero__scroll"
        href="#menu"
        aria-label="Scroll to menu"
        initial={reduceMotion ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.05, duration: 0.75, ease }}
      >
        <motion.span
          className="hero__scroll-fade"
          style={reduceMotion ? undefined : { opacity: scrollCueOpacity }}
        >
          <motion.span
            className="hero__scroll-line"
            aria-hidden="true"
            animate={
              reduceMotion
                ? undefined
                : { scaleY: [1, 0.42, 1], opacity: [0.4, 0.85, 0.4] }
            }
            transition={{ duration: 2.1, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.span>
      </motion.a>
    </section>
  );
}
