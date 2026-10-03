import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

const menuItems = [
  { id: 'dashboard', label: 'Dashboard', icon: '📊', path: '/dashboard' },
  { id: 'members', label: 'Members', icon: '👥', path: '/dashboard?tab=members', badge: 15420 },
  { id: 'bookings', label: 'Bookings', icon: '📅', path: '/dashboard?tab=bookings', badge: 138 },
  { id: 'trainers', label: 'Trainers', icon: '🏋️', path: '/dashboard?tab=trainers' },
  { id: 'revenue', label: 'Revenue', icon: '💰', path: '/dashboard?tab=revenue' },
  { id: 'classes', label: 'Classes', icon: '🧘', path: '/dashboard?tab=classes' },
  { id: 'inventory', label: 'Inventory', icon: '📦', path: '/dashboard?tab=inventory' },
  { id: 'notifications', label: 'Notifications', icon: '🔔', path: '/dashboard?tab=notifications', badge: 12 },
  { id: 'settings', label: 'Settings', icon: '⚙️', path: '/dashboard?tab=settings' },
];

const Logo = () => (
  <Link to="/" className="flex items-center gap-3 mb-10 px-2 group">
    <div className="relative w-11 h-11 flex items-center justify-center border-2 border-amber rounded-lg 
                    group-hover:shadow-amber transition-all duration-300 bg-dark-bg">
      <svg viewBox="0 0 24 24" className="w-6 h-6 text-amber-light" fill="currentColor">
        <path d="M20.57 14.86L22 13.43 20.57 12 17 15.57 8.43 7 12 3.43 10.57 2 9.14 3.43 7.71 2 5.57 4.14 4.14 2.71 2.71 4.14l1.43 1.43L2 7.71l1.43 1.43L2 10.57 3.43 12 7 8.43 15.57 17 12 20.57 13.43 22l1.43-1.43L16.29 22l2.14-2.14 1.43 1.43 1.43-1.43-1.43-1.43L22 16.29z"/>
      </svg>
    </div>
    <div className="flex flex-col leading-none">
      <span className="font-display text-xl font-bold tracking-wider text-white">FITNESS</span>
      <span className="font-display text-lg font-bold tracking-[0.25em] amber-text -mt-0.5">HUB</span>
    </div>
  </Link>
);

const DashboardSidebar = ({ activeTab = 'dashboard' }) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside className={`relative h-screen sticky top-0 border-r border-dark-border-2 bg-dark-card
                      transition-all duration-300 flex flex-col ${collapsed ? 'w-20' : 'w-72'}`}>
      {/* Toggle */}
      <button
        onClick={() => setCollapsed(!collapsed)}
        className="absolute -right-3 top-24 w-7 h-7 bg-amber text-dark-bg rounded-full flex items-center justify-center z-20 shadow-amber-sm hover:scale-110 transition-all font-bold text-lg"
        title={collapsed ? 'Expand' : 'Collapse'}
      >
        {collapsed ? '›' : '‹'}
      </button>

      <div className="p-5 flex-grow flex flex-col overflow-y-auto">
        <div className={collapsed ? 'opacity-0 hidden' : ''}>
          <Logo />
        </div>
        {collapsed && (
          <div className="mb-10 flex justify-center">
            <div className="w-11 h-11 flex items-center justify-center border-2 border-amber rounded-lg bg-dark-bg shadow-amber-sm">
              <svg viewBox="0 0 24 24" className="w-6 h-6 text-amber-light" fill="currentColor">
                <path d="M20.57 14.86L22 13.43 20.57 12 17 15.57 8.43 7 12 3.43 10.57 2 9.14 3.43 7.71 2 5.57 4.14 4.14 2.71 2.71 4.14l1.43 1.43L2 7.71l1.43 1.43L2 10.57 3.43 12 7 8.43 15.57 17 12 20.57 13.43 22l1.43-1.43L16.29 22l2.14-2.14 1.43 1.43 1.43-1.43-1.43-1.43L22 16.29z"/>
              </svg>
            </div>
          </div>
        )}

        {!collapsed && (
          <div className="mb-6 p-4 rounded-xl bg-gradient-to-br from-amber/10 via-dark-bg to-transparent border border-amber/20">
            <p className="text-xs text-amber uppercase tracking-widest font-bold mb-1">Admin Portal</p>
            <p className="text-white font-bold">CEO: Ahtesham Azhar</p>
            <p className="text-gray-500 text-xs mt-1">Owner Dashboard</p>
          </div>
        )}

        <nav className="space-y-1.5 flex-grow">
          {menuItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <NavLink
                key={item.id}
                to={item.path}
                className={`relative flex items-center gap-3 px-3.5 py-3 rounded-xl transition-all duration-300 group ${
                  isActive
                    ? 'bg-amber text-dark-bg font-bold shadow-amber-sm'
                    : 'text-gray-400 hover:bg-dark-bg hover:text-amber-light hover:shadow-sm'
                }`}
                title={item.label}
              >
                <span className={`text-xl flex-shrink-0 ${isActive ? '' : 'group-hover:scale-110 transition-transform'}`}>
                  {item.icon}
                </span>
                {!collapsed && (
                  <>
                    <span className="tracking-wide text-sm flex-grow">{item.label}</span>
                    {item.badge && (
                      <span className={`text-xs px-2 py-0.5 rounded-full font-bold ${
                        isActive ? 'bg-dark-bg text-amber' : 'bg-amber/20 text-amber-light'
                      }`}>
                        {item.badge}
                      </span>
                    )}
                  </>
                )}
                {collapsed && item.badge && (
                  <span className="absolute top-1.5 right-1.5 w-5 h-5 bg-amber text-dark-bg rounded-full text-[10px] font-bold flex items-center justify-center">
                    {item.badge > 99 ? '99+' : item.badge}
                  </span>
                )}
              </NavLink>
            );
          })}
        </nav>

        {/* User Profile */}
        <div className={`mt-6 p-3 rounded-xl bg-dark-bg border border-dark-border ${collapsed ? 'justify-center' : ''} flex items-center gap-3`}>
          <div className="w-10 h-10 flex-shrink-0 rounded-full bg-gradient-to-br from-amber to-amber-deep flex items-center justify-center text-dark-bg font-bold">
            AA
          </div>
          {!collapsed && (
            <div className="flex-grow min-w-0">
              <p className="text-white font-bold text-sm truncate">Ahtesham Azhar</p>
              <p className="text-gray-500 text-xs truncate">ceo@fitnesshub.com</p>
            </div>
          )}
          {!collapsed && (
            <Link to="/" title="Back to site" className="text-gray-500 hover:text-amber transition-colors text-lg">
              ⇱
            </Link>
          )}
        </div>
      </div>
    </aside>
  );
};

export default DashboardSidebar;
