import { Link } from 'react-router-dom';

const Footer = () => {
  const gymFeatures = [
    '24/7 Access',
    'Personal Training',
    'Group Classes',
    'Modern Equipment',
    'Nutrition Plans',
    'Locker Rooms',
  ];

  const contactInfo = [
    { icon: '📍', label: 'Location', value: '123 Fitness Street, Downtown' },
    { icon: '📞', label: 'Phone', value: '+92 300 1234567' },
    { icon: '✉️', label: 'Email', value: 'info@fitnesshub.com' },
    { icon: '⏰', label: 'Hours', value: 'Mon-Sun: Open 24 Hours' },
  ];

  return (
    <footer className="relative bg-dark-card border-t border-amber/20 pt-20 pb-8 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-amber/10 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 flex items-center justify-center border-2 border-amber rounded-lg shadow-amber-sm bg-dark-bg">
                <svg viewBox="0 0 24 24" className="w-7 h-7 text-amber-light" fill="currentColor">
                  <path d="M20.57 14.86L22 13.43 20.57 12 17 15.57 8.43 7 12 3.43 10.57 2 9.14 3.43 7.71 2 5.57 4.14 4.14 2.71 2.71 4.14l1.43 1.43L2 7.71l1.43 1.43L2 10.57 3.43 12 7 8.43 15.57 17 12 20.57 13.43 22l1.43-1.43L16.29 22l2.14-2.14 1.43 1.43 1.43-1.43-1.43-1.43L22 16.29z"/>
                </svg>
              </div>
              <div>
                <span className="font-display text-2xl font-bold tracking-wider text-white block">FITNESS</span>
                <span className="font-display text-xl font-bold tracking-[0.3em] amber-text -mt-1 block">HUB</span>
              </div>
            </Link>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Transform your body, elevate your mind. Fitness Hub is your ultimate destination for building strength, endurance, and a healthier lifestyle.
            </p>
            <div className="flex gap-3">
              {['f', 'in', 'ig', 'yt'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-10 h-10 flex items-center justify-center border border-dark-border rounded-lg
                           text-gray-400 hover:text-amber-light hover:border-amber hover:shadow-amber-sm
                           transition-all duration-300 font-bold text-sm"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display text-xl font-bold uppercase tracking-wider text-white mb-6
                          border-l-4 border-amber pl-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[{ to: '/', label: 'Home' }, { to: '/about', label: 'About Us' }, 
                { to: '/booking', label: 'Book a Session' }, { to: '/contact', label: 'Contact' },
                { to: '/login', label: 'Member Login' }].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-gray-400 hover:text-amber-light transition-colors duration-300
                             flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-amber rounded-full scale-0 group-hover:scale-100 transition-transform"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-xl font-bold uppercase tracking-wider text-white mb-6
                          border-l-4 border-amber pl-4">
              Our Features
            </h4>
            <ul className="space-y-3">
              {gymFeatures.map((feature) => (
                <li key={feature} className="flex items-center gap-3 text-gray-400">
                  <span className="text-amber-light">▸</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-xl font-bold uppercase tracking-wider text-white mb-6
                          border-l-4 border-amber pl-4">
              Contact Info
            </h4>
            <ul className="space-y-4">
              {contactInfo.map((item) => (
                <li key={item.label} className="flex gap-3">
                  <span className="text-xl">{item.icon}</span>
                  <div>
                    <p className="text-amber-light font-medium text-sm uppercase tracking-wide">{item.label}</p>
                    <p className="text-gray-400">{item.value}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="h-px bg-gradient-to-r from-transparent via-amber/50 to-transparent mb-8"></div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm text-center md:text-left">
            © {new Date().getFullYear()} Fitness Hub. All rights reserved. | Built with passion under the leadership of{' '}
            <span className="text-amber-light font-semibold">Ahtesham Azhar</span> (CEO)
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-amber-light transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-amber-light transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
