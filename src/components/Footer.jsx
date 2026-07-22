import { useState } from "react";

const navLinks = [
  { label: "Menu", href: "#menu" },
  { label: "Our Story", href: "#our-story" },
  { label: "Origins", href: "#locations" },
  { label: "Shop", href: "#shop" },
  { label: "Subscriptions", href: "#subscriptions" },
];

const socials = [
  { label: "Instagram", href: "https://instagram.com" },
  { label: "Pinterest", href: "https://pinterest.com" },
  { label: "YouTube", href: "https://youtube.com" },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (event) => {
    event.preventDefault();
    if (!email.trim()) return;
    setSubmitted(true);
    setEmail("");
  };

  return (
    <footer className="site-footer">
      <div className="shell site-footer__inner">
        <div className="site-footer__top">
          <div className="site-footer__brand">
            <a className="site-footer__logo" href="#" aria-label="Veloura Coffee home">
              <span className="site-footer__mark" aria-hidden="true" />
              <span className="site-footer__wordmark">Veloura</span>
            </a>
            <p className="site-footer__tagline">
              Small-batch coffee roasted with patience—for those who savor every sip.
            </p>
          </div>

          <nav className="site-footer__nav" aria-label="Footer">
            <p className="site-footer__heading" id="footer-nav-heading">
              Explore
            </p>
            <ul className="site-footer__links" aria-labelledby="footer-nav-heading">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="site-footer__newsletter" id="subscriptions">
            <p className="site-footer__heading" id="newsletter-heading">
              Newsletter
            </p>
            <p className="site-footer__note">
              Seasonal releases and brew notes—never noise.
            </p>
            <form className="site-footer__form" onSubmit={onSubmit} aria-labelledby="newsletter-heading">
              <label className="visually-hidden" htmlFor="footer-email">
                Email address
              </label>
              <input
                id="footer-email"
                type="email"
                name="email"
                placeholder="Email address"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
                autoComplete="email"
              />
              <button type="submit">Join</button>
            </form>
            {submitted && (
              <p className="site-footer__success" role="status">
                You’re on the list.
              </p>
            )}
          </div>

          <div className="site-footer__contact">
            <p className="site-footer__heading">Contact</p>
            <address className="site-footer__address">
              <a href="mailto:hello@velouracoffee.com">hello@velouracoffee.com</a>
              <a href="tel:+12125580190">+1 (212) 558-0190</a>
              <span>
                48 Mercer Street
                <br />
                New York, NY 10013
              </span>
            </address>

            <p className="site-footer__heading site-footer__heading--spaced">Follow</p>
            <ul className="site-footer__social">
              {socials.map((social) => (
                <li key={social.label}>
                  <a href={social.href} target="_blank" rel="noopener noreferrer">
                    {social.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="site-footer__bottom">
          <p className="site-footer__copy">
            © {new Date().getFullYear()} Veloura Coffee
          </p>
          <ul className="site-footer__legal">
            <li>
              <a href="#shop">Privacy</a>
            </li>
            <li>
              <a href="#shop">Terms</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
