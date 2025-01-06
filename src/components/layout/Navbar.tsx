import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Menu, X } from 'lucide-react';
import LanguageSelector from './LanguageSelector';
import CartIcon from '../cart/CartIcon';
import CartDrawer from '../cart/CartDrawer';
import ThemeToggle from '../theme/ThemeToggle';

export default function Navbar() {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { to: '/', label: t('nav.home') },
    { to: '/services', label: t('nav.services') },
    { to: '/portfolio', label: t('nav.portfolio') },
    { to: '/about', label: t('nav.about') },
    { to: '/contact', label: t('nav.contact') },
  ];

  return (
      <>
        <nav className="fixed w-full z-50 bg-[#101113] bg-opacity-95 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between h-20">
              <Link to="/" className="text-2xl font-bold text-[var(--accent)]">
                {import.meta.env.VITE_REACT_APP_TITLE}
              </Link>

              <div className="hidden md:flex items-center gap-8">
                {navLinks.map(({ to, label }) => {
                  const isActive =
                      location.pathname === to ||
                      (to === '/' && location.pathname === '/') ||
                      (to !== '/' && location.pathname.startsWith(to));

                  return (
                      <Link
                          key={to}
                          to={to}
                          className={`text-gray-300 hover:text-[var(--accent)] transition-colors ${
                              isActive ? 'text-accent' : ''
                          }`}
                      >
                        {label}
                      </Link>
                  );
                })}

                <div className="flex items-center gap-4">
                  <LanguageSelector />
                  {/*<ThemeToggle />*/}
                  <CartIcon />
                </div>
              </div>

              <div className="md:hidden flex items-center gap-4">
                <ThemeToggle />
                <CartIcon />
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="text-white"
                >
                  {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
              </div>
            </div>

            {isOpen && (
                <div className="md:hidden absolute top-20 left-0 right-0 bg-[var(--background)] border-t border-gray-800">
                  {navLinks.map(({ to, label }) => (
                      <Link
                          key={to}
                          to={to}
                          className={`text-gray-300 hover:text-[var(--accent)] transition-colors ${
                              location.pathname === to || (to === '/' && location.pathname === '/') ? 'text-accent' : ''
                          }`}
                      >
                        {label}
                      </Link>
                  ))}

                  <div className="px-4 py-3">
                    <LanguageSelector />
                  </div>
                </div>
            )}
          </div>
        </nav>
        <CartDrawer />
      </>
  );
}
