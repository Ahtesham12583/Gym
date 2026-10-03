import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

const Logo = () => (
  <Link to="/" className="flex items-center gap-3 group">
    <div className="relative w-12 h-12 flex items-center justify-center border-2 border-amber rounded-lg 
                    group-hover:shadow-amber transition-all duration-300 bg-dark-card">
      <svg viewBox="0 0 24 24" className="w-7 h-7 text-amber-light" fill="currentColor">
        <path d="M20.57 14.86L22 13.43 20.57 12 17 15.57 8.43 7 12 3.43 10.57 2 9.14 3.43 7.71 2 5.57 4.14 4.14 2.71 2.71 4.14l1.43 1.43L2 7.71l1.43 1.43L2 10.57 3.43 12 7 8.43 15.57 17 12 20.57 13.43 22l1.43-1.43L16.29 22l2.14-2.14 1.43 1.43 1.43-1.43-1.43-1.43L22 16.29z"/>
      </svg>
      <div className="absolute -top-1 -right-1 w-3 h-3 bg-amber rounded-full animate-pulse"></div>
    </div>
    <div className="flex flex-col leading-none">
      <span className="font-display text-2xl font-bold tracking-wider text-white
                       group-hover:text-gradient transition-all duration-300">
        FITNESS
      </span>
      <span className="font-display text-xl font-bold tracking-[0.3em] amber-text -mt-1">
        HUB
      </span>
    </div>
  </Link>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/booking', label: 'Booking' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-dark-bg/95 backdrop-blur-md border-b border-amber/20 shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Logo />

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === '/'}
                className={({ isActive }) => 
                  `relative px-5 py-2 font-display uppercase tracking-wider text-sm transition-all duration-300
                   ${isActive 
                     ? 'text-amber-light' 
                     : 'text-gray-300 hover:text-amber-light'}`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.label}
                    <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-amber 
                                      transition-all duration-300 ${isActive ? 'w-full' : 'w-0'}`}></span>
                  </>
                )}
              </NavLink>
            ))}
            <NavLink
              to="/dashboard"
              className={({ isActive }) => 
                `relative px-5 py-2 font-display uppercase tracking-wider text-sm transition-all duration-300 ml-4
                 ${isActive 
                   ? 'text-amber-light' 
                   : 'text-gray-300 hover:text-amber-light'}`
              }
            >
              {({ isActive }) => (
                <>
                  Dashboard
                  <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-amber 
                                    transition-all duration-300 ${isActive ? 'w-full' : 'w-0'}`}></span>
                </>
              )}
            </NavLink>
            <Link
              to="/login"
              className="ml-6 btn-primary !px-6 !py-2 text-sm"
            >
              Member Login
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 group"
            aria-label="Toggle menu"
          >
            <span className={`w-7 h-0.5 bg-amber transition-all duration-300 ${
              isOpen ? 'rotate-45 translate-y-2' : ''
            }`}></span>
            <span className={`w-7 h-0.5 bg-amber transition-all duration-300 ${
              isOpen ? 'opacity-0' : ''
            }`}></span>
            <span className={`w-7 h-0.5 bg-amber transition-all duration-300 ${
              isOpen ? '-rotate-45 -translate-y-2' : ''
            }`}></span>
          </button>
        </div>
      </div>

      <div className={`md:hidden bg-dark-bg/98 backdrop-blur-lg border-t border-dark-border
                       transition-all duration-500 overflow-hidden ${
                         isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                       }`}>
        <div className="px-4 py-6 space-y-2">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === '/'}
              className={({ isActive }) => 
                `block px-4 py-3 font-display uppercase tracking-wider text-base rounded-lg transition-all duration-300
                 ${isActive 
                   ? 'bg-amber/10 text-amber-light border-l-4 border-amber' 
                   : 'text-gray-300 hover:bg-amber/5 hover:text-amber-light'}`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <NavLink
            to="/dashboard"
            end
            className={({ isActive }) => 
              `block px-4 py-3 font-display uppercase tracking-wider text-base rounded-lg transition-all duration-300
               ${isActive 
                 ? 'bg-amber/10 text-amber-light border-l-4 border-amber' 
                 : 'text-gray-300 hover:bg-amber/5 hover:text-amber-light'}`
            }
          >
            Dashboard
          </NavLink>
          <Link
            to="/login"
            className="block btn-primary w-full text-center mt-6"
          >
            Member Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
