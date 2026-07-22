import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { fadeUp, springSnappy, springSoft, stagger, tapScale, viewport } from "../lib/motion";
import { collection as collectionImages, srcSet } from "../data/images";

const coffees = [
  {
    name: "Noir Reserve",
    origin: "Yirgacheffe, Ethiopia",
    roast: "Light",
    price: "$28",
  },
  {
    name: "Veloura Estate",
    origin: "Antigua, Guatemala",
    roast: "Medium",
    price: "$32",
  },
  {
    name: "Amber Solstice",
    origin: "Tarrazú, Costa Rica",
    roast: "Medium",
    price: "$30",
  },
  {
    name: "Midnight Bloom",
    origin: "Huila, Colombia",
    roast: "Dark",
    price: "$26",
  },
  {
    name: "Silk Road Blend",
    origin: "Sidamo, Ethiopia",
    roast: "Light",
    price: "$34",
  },
  {
    name: "Casa Bruma",
    origin: "Minas Gerais, Brazil",
    roast: "Medium-Dark",
    price: "$24",
  },
];

function ProductCard({ coffee, image, reduceMotion }) {
  const [liked, setLiked] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    if (imgRef.current?.complete) setLoaded(true);
  }, []);

  return (
    <motion.article className="product" variants={fadeUp}>
      <motion.div
        className="product__media-wrap"
        whileTap={reduceMotion ? undefined : tapScale}
        transition={springSoft}
      >
        <a className="product__media" href="#shop" tabIndex={-1} aria-hidden="true">
          <span className={`product__skeleton${loaded ? " is-hidden" : ""}`} aria-hidden="true" />
          <img
            ref={imgRef}
            className={loaded ? "is-loaded" : ""}
            src={image.build(800)}
            srcSet={srcSet(image.build, [480, 720, 960])}
            sizes="(max-width: 640px) 92vw, (max-width: 1024px) 45vw, 30vw"
            alt=""
            loading="lazy"
            decoding="async"
            width={800}
            height={1000}
            onLoad={() => setLoaded(true)}
          />
        </a>
        <motion.button
          type="button"
          className={`product__fav${liked ? " is-active" : ""}`}
          aria-label={liked ? `Remove ${coffee.name} from favorites` : `Save ${coffee.name}`}
          aria-pressed={liked}
          onClick={() => setLiked((value) => !value)}
          whileTap={reduceMotion ? undefined : { scale: 0.88 }}
          animate={
            reduceMotion
              ? undefined
              : liked
                ? { scale: [1, 1.18, 1] }
                : { scale: 1 }
          }
          transition={springSnappy}
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path
              d="M12 20s-7-4.4-7-9.2C5 8 6.8 6.2 9 6.2c1.3 0 2.4.6 3 1.6.6-1 1.7-1.6 3-1.6 2.2 0 4 1.8 4 4.6C19 15.6 12 20 12 20Z"
              fill={liked ? "currentColor" : "none"}
              stroke="currentColor"
              strokeWidth="1.5"
            />
          </svg>
        </motion.button>
      </motion.div>
      <div className="product__body">
        <div className="product__row">
          <h3 className="product__name">
            <a href="#shop">{coffee.name}</a>
          </h3>
          <p className="product__price">{coffee.price}</p>
        </div>
        <p className="product__meta">
          {coffee.origin}
          <span aria-hidden="true"> · </span>
          {coffee.roast} roast
        </p>
      </div>
    </motion.article>
  );
}

export default function Collection() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="collection section" id="shop" aria-labelledby="collection-heading">
      <div className="shell" id="menu">
        <motion.header
          className="section-intro section-intro--split section-intro--sticky"
          initial={reduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={viewport}
          variants={fadeUp}
        >
          <h2 id="collection-heading" className="section-title">
            Six coffees.
            <br />
            One standard of craft.
          </h2>
          <p className="section-lede">
            Single-estate lots and considered blends, roasted in small batches for clarity and
            depth.
          </p>
        </motion.header>

        <motion.ul
          className="product-grid"
          variants={stagger}
          initial={reduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={viewport}
        >
          {coffees.map((coffee) => (
            <li key={coffee.name}>
              <ProductCard
                coffee={coffee}
                image={collectionImages[coffee.name]}
                reduceMotion={reduceMotion}
              />
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
