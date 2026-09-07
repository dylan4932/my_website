import React, { useEffect, useState } from 'react';
import './index.css';
import HomeContent from './homeContent';
import AboutContent from './aboutContent';
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi';

const NAV_LINKS = [
  { text: 'Home', href: '#home' },
  { text: 'About', href: '#about' },
  { text: 'Experience', href: '#experience' },
  { text: 'Contact', href: '#contact' },
];

// The single, Apple-style sticky nav for the whole homepage. This replaces
// the old MUI AppBar + legacy sidebar Navigator with one consolidated header.
const HomeContainer = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Close the mobile menu whenever the viewport grows back to desktop size.
  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return undefined;

    const mediaQuery = window.matchMedia('(min-width: 900px)');
    const handleChange = (e) => {
      if (e.matches) setMenuOpen(false);
    };
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="apple-page">
      <header className="site-nav">
        <div className="site-nav-inner">
          <a href="#home" className="site-nav-logo" onClick={closeMenu}>
            Yuan Ji
          </a>

          <nav className="site-nav-links" aria-label="Primary">
            {NAV_LINKS.map((item) => (
              <a key={item.text} href={item.href}>
                {item.text}
              </a>
            ))}
          </nav>

          <div className="site-nav-actions">
            <a
              href="/my_files/resume.pdf"
              className="pill-btn pill-btn-nav"
              download
            >
              Download CV
            </a>
            <button
              type="button"
              className="site-nav-toggle"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((open) => !open)}
            >
              {menuOpen ? <HiOutlineX /> : <HiOutlineMenu />}
            </button>
          </div>
        </div>

        <nav
          className={`site-nav-mobile ${menuOpen ? 'is-open' : ''}`}
          aria-label="Mobile"
        >
          {NAV_LINKS.map((item) => (
            <a key={item.text} href={item.href} onClick={closeMenu}>
              {item.text}
            </a>
          ))}
          <a
            href="/my_files/resume.pdf"
            className="pill-btn pill-btn-nav-mobile"
            download
            onClick={closeMenu}
          >
            Download CV
          </a>
        </nav>
      </header>

      <main className="site-main">
        <HomeContent />
        <AboutContent />
      </main>
    </div>
  );
};

export default HomeContainer;
