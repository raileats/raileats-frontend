import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="re-footer">
      <div className="re-footer-inner">
        <div className="brand">
          <div className="logo">RailEats</div>
          <p className="tag">Rail Journey ka Swad, only Raileats ke Paas!</p>
        </div>

        <div className="links">
          <div>
            <h4>Company</h4>
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
            <a href="/privacy">Privacy Policy</a>
          </div>

          <div>
            <h4>Help</h4>
            <a href="/faq">FAQ</a>
            <a href="/tnc">T&C</a>
          </div>

          <div>
            <h4>Follow Us</h4>
            <div className="socials">
              <a href="#" aria-label="facebook">FB</a>
              <a href="#" aria-label="instagram">IG</a>
              <a href="#" aria-label="twitter">TW</a>
            </div>
          </div>
        </div>

        <div className="contact">
          <h4>Contact</h4>
          <p>support@raileats.in</p>
          <p>+91 87997 26485</p>
        </div>
      </div>

      <div className="re-footer-bottom">
        <span>© {new Date().getFullYear()} RailEats.in</span>
        <span>Made with ❤️ for train travellers</span>
      </div>
    </footer>
  );
}
