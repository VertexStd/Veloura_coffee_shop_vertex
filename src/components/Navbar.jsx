import { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  ease,
  menuItem,
  menuList,
  menuOverlay,
  springSnappy,
  tapPress,
} from "../lib/motion";

const links = [
  { label: "Menu", href: "#menu" },
  { label: "Our Story", href: "#our-story" },
  { label: "Origins", href: "#locations" },
  { label: "Subscriptions", href: "#subscriptions" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const toggleRef = useRef(null);
  const firstLinkRef = useRef(null);
  const menuId = useId();
  const reduceMotion = useReducedMotion();
  const scrollLockY = useRef(0);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("menu-open", open);

    if (open) {
      scrollLockY.current = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollLockY.current}px`;
      document.body.style.left = "0";
      document.body.style.right = "0";
      document.body.style.width = "100%";
      const id = window.setTimeout(() => firstLinkRef.current?.focus(), 40);
      const onKey = (event) => {
        if (event.key === "Escape") {
          setOpen(false);
          toggleRef.current?.focus();
        }
      };
      window.addEventListener("keydown", onKey);
      return () => {
        window.clearTimeout(id);
        window.removeEventListener("keydown", onKey);
        document.body.classList.remove("menu-open");
        document.body.style.position = "";
        document.body.style.top = "";
        document.body.style.left = "";
        document.body.style.right = "";
        document.body.style.width = "";
        window.scrollTo(0, scrollLockY.current);
      };
    }

    return () => document.body.classList.remove("menu-open");
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      <header
        className={`nav-shell${scrolled ? " is-scrolled" : ""}${open ? " is-open" : ""}`}
      >
        <nav className="nav" aria-label="Primary">
          <a className="nav__logo" href="#" aria-label="Veloura Coffee home">
            <span className="nav__mark" aria-hidden="true" />
            <span className="nav__wordmark">Veloura</span>
          </a>

          <ul className="nav__links">
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>

          <div className="nav__actions">
            <a className="nav__cta" href="#shop">
              Shop Coffee
            </a>
            <motion.button
              ref={toggleRef}
              className="nav__toggle"
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls={menuId}
              onClick={() => setOpen((value) => !value)}
              whileTap={reduceMotion ? undefined : tapPress}
              transition={springSnappy}
            >
              <span className="nav__toggle-line" aria-hidden="true" />
              <span className="nav__toggle-line" aria-hidden="true" />
            </motion.button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="mobile-menu is-visible"
            id={menuId}
            role="dialog"
            aria-modal="true"
            aria-label="Menu"
            initial={reduceMotion ? false : "hidden"}
            animate="visible"
            exit="exit"
            variants={menuOverlay}
          >
            <motion.div
              className="mobile-menu__panel"
              initial={reduceMotion ? false : { opacity: 0, scale: 0.985 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.99 }}
              transition={{ duration: 0.42, ease }}
            >
              <motion.ul
                className="mobile-menu__links"
                variants={menuList}
                initial={reduceMotion ? false : "hidden"}
                animate="visible"
                exit="exit"
              >
                {links.map((link, index) => (
                  <motion.li key={link.href} variants={menuItem}>
                    <a
                      ref={index === 0 ? firstLinkRef : undefined}
                      href={link.href}
                      onClick={close}
                    >
                      {link.label}
                    </a>
                  </motion.li>
                ))}
              </motion.ul>
              <motion.a
                className="btn btn--dark mobile-menu__cta"
                href="#shop"
                onClick={close}
                variants={menuItem}
                whileTap={reduceMotion ? undefined : tapPress}
                transition={springSnappy}
              >
                Shop Coffee
              </motion.a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
