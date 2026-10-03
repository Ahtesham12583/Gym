import { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import DashboardSidebar from '../components/DashboardSidebar';

/* =========================================================
   BACKEND INTEGRATION NOTES (Tum yahan API connect karo):
   ---------------------------------------------------------
   1. Install axios / use fetch: npm i axios
   2. Create src/api/client.js with baseURL + token interceptor
   3. Each state below has a TODO comment for its API endpoint
   4. Sample: const { data: stats } = useQuery('/api/admin/stats')
   ========================================================= */

// -------- MOCK DATA (Replace with real API data) --------
const MOCK_STATS = [
  { id: 1, label: 'Total Members', value: 15420, delta: '+12.5%', trend: 'up', icon: '👥', api: 'GET /api/admin/stats/members' },
  { id: 2, label: 'Active Bookings', value: 138, delta: '+8.2%', trend: 'up', icon: '📅', api: 'GET /api/admin/bookings/active' },
  { id: 3, label: 'Revenue (MTD)', value: 'Rs. 2.48M', delta: '+18.3%', trend: 'up', icon: '💰', api: 'GET /api/admin/revenue/mtd' },
  { id: 4, label: 'Active Trainers', value: 52, delta: '+2', trend: 'up', icon: '🏋️', api: 'GET /api/admin/trainers/active' },
  { id: 5, label: 'Check-ins Today', value: 1847, delta: '+5.7%', trend: 'up', icon: '✅', api: 'GET /api/admin/checkins/today' },
  { id: 6, label: 'Pending Renewals', value: 64, delta: '-3', trend: 'down', icon: '⏳', api: 'GET /api/admin/members/renewals' },
];

const MOCK_MEMBERS = [
  { id: 'FH-10293', name: 'Ahmed Khan', email: 'ahmed@example.com', phone: '+92 300 1112233', plan: 'Pro', status: 'Active', joined: '2024-01-15', expires: '2027-01-15', avatar: 'AK' },
  { id: 'FH-10294', name: 'Sarah Williams', email: 'sarah@example.com', phone: '+92 301 2223344', plan: 'Elite', status: 'Active', joined: '2022-06-20', expires: '2026-06-20', avatar: 'SW' },
  { id: 'FH-10295', name: 'Rizwan Bhatti', email: 'rizwan@example.com', phone: '+92 302 3334455', plan: 'Basic', status: 'Expiring', joined: '2024-11-02', expires: '2026-10-05', avatar: 'RB' },
  { id: 'FH-10296', name: 'Fatima Noor', email: 'fatima@example.com', phone: '+92 303 4445566', plan: 'Pro', status: 'Active', joined: '2023-03-12', expires: '2027-03-12', avatar: 'FN' },
  { id: 'FH-10297', name: 'Bilal Sheikh', email: 'bilal@example.com', phone: '+92 304 5556677', plan: 'Basic', status: 'Inactive', joined: '2023-08-01', expires: '2026-08-01', avatar: 'BS' },
  { id: 'FH-10298', name: 'Maria Garcia', email: 'maria@example.com', phone: '+92 305 6667788', plan: 'Elite', status: 'Active', joined: '2024-05-19', expires: '2027-05-19', avatar: 'MG' },
  { id: 'FH-10299', name: 'Hamza Ali', email: 'hamza@example.com', phone: '+92 306 7778899', plan: 'Pro', status: 'Expiring', joined: '2024-02-14', expires: '2026-10-14', avatar: 'HA' },
  { id: 'FH-10300', name: 'Zainab Malik', email: 'zainab@example.com', phone: '+92 307 8889900', plan: 'Pro', status: 'Active', joined: '2023-09-30', expires: '2026-09-30', avatar: 'ZM' },
];

const MOCK_BOOKINGS = [
  { id: 'BK-8841', customer: 'Ahmed Khan', service: 'Personal Training', trainer: 'Marcus Steel', date: '2026-10-02', time: '06:00 AM', status: 'Confirmed', amount: 'Rs. 2,500' },
  { id: 'BK-8842', customer: 'Sarah Williams', service: 'Group Class (CrossFit)', trainer: 'Elena Rodriguez', date: '2026-10-02', time: '07:00 AM', status: 'Confirmed', amount: 'Rs. 500' },
  { id: 'BK-8843', customer: 'Rizwan Bhatti', service: 'Free Trial Session', trainer: 'Any Available', date: '2026-10-02', time: '04:00 PM', status: 'Pending', amount: 'FREE' },
  { id: 'BK-8844', customer: 'Fatima Noor', service: 'Nutrition Consultation', trainer: 'Dr. Natasha Rao', date: '2026-10-03', time: '11:00 AM', status: 'Confirmed', amount: 'Rs. 3,000' },
  { id: 'BK-8845', customer: 'Bilal Sheikh', service: 'Fitness Assessment', trainer: 'David Knight', date: '2026-10-03', time: '05:00 PM', status: 'Cancelled', amount: 'Rs. 1,500' },
  { id: 'BK-8846', customer: 'Maria Garcia', service: 'Recovery Session', trainer: 'Sophia Chen', date: '2026-10-04', time: '08:00 PM', status: 'Confirmed', amount: 'Rs. 2,000' },
];

const WEEKLY_REVENUE = [
  { day: 'Mon', value: 320 }, { day: 'Tue', value: 480 }, { day: 'Wed', value: 410 },
  { day: 'Thu', value: 560 }, { day: 'Fri', value: 620 }, { day: 'Sat', value: 890 }, { day: 'Sun', value: 720 },
];
const MAX_REVENUE = Math.max(...WEEKLY_REVENUE.map(d => d.value));

const STATUS_STYLES = {
  Active: { cls: 'bg-green-500/15 text-green-400 border-green-500/30' },
  Confirmed: { cls: 'bg-green-500/15 text-green-400 border-green-500/30' },
  Expiring: { cls: 'bg-amber/15 text-amber-light border-amber/40' },
  Pending: { cls: 'bg-amber/15 text-amber-light border-amber/40' },
  Inactive: { cls: 'bg-red-500/15 text-red-400 border-red-500/30' },
  Cancelled: { cls: 'bg-red-500/15 text-red-400 border-red-500/30' },
};

const STATUS_BADGE = ({ s }) => (
  <span className={`badge border ${STATUS_STYLES[s]?.cls || 'bg-gray-500/15 text-gray-400 border-gray-500/30'}`}>
    {s}
  </span>
);

const PLAN_STYLES = {
  Basic: 'bg-gray-500/15 text-gray-300 border-gray-500/30',
  Pro: 'bg-amber/15 text-amber-light border-amber/40',
  Elite: 'bg-green-500/15 text-green-400 border-green-500/30',
};
// --------------------------------------------------------

const Dashboard = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const tab = searchParams.get('tab') || 'dashboard';
  const [search, setSearch] = useState('');
  const [stats, setStats] = useState([]);
  const [members, setMembers] = useState([]);
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  // TODO: Replace with actual API calls to your backend
  useEffect(() => {
    // Example: axios.get('/api/admin/stats').then(r => setStats(r.data))
    const timer = setTimeout(() => {
      setStats(MOCK_STATS);
      setMembers(MOCK_MEMBERS);
      setBookings(MOCK_BOOKINGS);
      setLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const filteredMembers = members.filter(m =>
    [m.name, m.email, m.id, m.phone].some(v => v.toLowerCase().includes(search.toLowerCase()))
  );

  const setTab = (t) => setSearchParams(t === 'dashboard' ? {} : { tab: t });

  return (
    <div className="flex bg-dark-bg min-h-screen text-gray-200">
      <DashboardSidebar activeTab={tab} />

      <main className="flex-1 min-w-0 overflow-x-hidden">
        {/* Top Bar */}
        <header className="sticky top-0 z-30 bg-dark-bg/95 backdrop-blur border-b border-dark-border px-6 lg:px-10 py-4 flex flex-wrap items-center gap-4">
          <div className="flex items-center gap-3">
            <h1 className="font-display text-2xl lg:text-3xl font-bold uppercase tracking-wider text-white">
              {tab === 'dashboard' && 'Dashboard Overview'}
              {tab === 'members' && 'Members Management'}
              {tab === 'bookings' && 'Bookings & Appointments'}
              {tab === 'trainers' && 'Trainers Directory'}
              {tab === 'revenue' && 'Revenue & Analytics'}
              {tab === 'classes' && 'Group Classes Schedule'}
              {tab === 'inventory' && 'Inventory Management'}
              {tab === 'notifications' && 'Notifications'}
              {tab === 'settings' && 'System Settings'}
            </h1>
            <span className="hidden sm:inline text-xs text-amber uppercase tracking-widest font-bold px-2.5 py-1 rounded-full bg-amber/10 border border-amber/30">
              LIVE
            </span>
          </div>

          <div className="flex-grow"></div>

          <div className="relative hidden md:block">
            <input
              type="text"
              placeholder="Search members, bookings, trainers..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-80 bg-dark-card border border-dark-border rounded-xl pl-11 pr-4 py-2.5 text-sm text-white
                         placeholder-gray-500 focus:outline-none focus:border-amber focus:shadow-amber-sm transition-all"
            />
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">🔍</span>
          </div>

          <button className="relative w-11 h-11 rounded-xl bg-dark-card border border-dark-border hover:border-amber hover:shadow-amber-sm transition-all flex items-center justify-center text-lg">
            🔔
            <span className="absolute -top-1 -right-1 w-5 h-5 bg-amber text-dark-bg rounded-full text-[10px] font-bold flex items-center justify-center">12</span>
          </button>

          <Link to="/booking" className="btn-primary !px-5 !py-2.5 text-sm flex items-center gap-2 animate-pulse-amber">
            <span>＋</span> New Booking
          </Link>
        </header>

        <div className="p-6 lg:p-10 space-y-10">
          {/* ========== TAB: DASHBOARD OVERVIEW ========== */}
          {(tab === 'dashboard' || !['members','bookings','trainers','revenue','classes','inventory','notifications','settings'].includes(tab)) && (
            <>
              {/* Stats */}
              <section>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-5">
                  {loading ? (
                    Array.from({length:6}).map((_,i)=>(<div key={i} className="card-glow p-6 h-32 animate-pulse bg-shimmer bg-[length:1000px_100%] animate-shimmer"></div>))
                  ) : (
                    stats.map((s) => (
                      <div key={s.id} className="card-glow p-6 group relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-24 h-24 bg-amber/5 rounded-full blur-2xl group-hover:bg-amber/10 transition-all"></div>
                        <div className="flex items-start justify-between mb-4">
                          <div className="w-12 h-12 rounded-xl bg-amber/10 border border-amber/30 flex items-center justify-center text-2xl group-hover:shadow-amber-sm group-hover:border-amber transition-all">
                            {s.icon}
                          </div>
                          <span className={`text-xs font-bold px-2 py-1 rounded-full ${
                            s.trend === 'up' ? 'bg-green-500/15 text-green-400' : 'bg-red-500/15 text-red-400'
                          }`}>
                            {s.delta}
                          </span>
                        </div>
                        <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">{s.label}</p>
                        <p className="font-display text-3xl font-bold text-white">{s.value}</p>
                        <p className="text-[10px] text-gray-600 mt-2 truncate opacity-0 group-hover:opacity-100 transition-opacity">
                          ⚡ {s.api}
                        </p>
                      </div>
                    ))
                  )}
                </div>
              </section>

              {/* Chart + Recent */}
              <section className="grid lg:grid-cols-3 gap-6">
                {/* Weekly Revenue Chart */}
                <div className="lg:col-span-2 card-glow p-6 lg:p-8">
                  <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
                    <div>
                      <h3 className="font-display text-2xl font-bold uppercase tracking-wider text-white mb-1">Weekly Revenue</h3>
                      <p className="text-gray-500 text-sm">Last 7 days performance</p>
                    </div>
                    <div className="flex items-center gap-4 text-sm">
                      <div className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-amber shadow-amber-sm"></span><span className="text-gray-400">Revenue (K)</span></div>
                      <div className="font-display text-2xl font-bold text-white">Rs. 4.0M</div>
                    </div>
                  </div>
                  {/* Bar Chart (CSS only, replace with Recharts when ready) */}
                  <div className="flex items-end justify-between gap-3 h-64 border-b border-dark-border-2 pb-2">
                    {WEEKLY_REVENUE.map((d) => (
                      <div key={d.day} className="flex flex-col items-center flex-grow gap-3">
                        <div className="flex-grow w-full flex items-end gap-1">
                          <div
                            className="w-full rounded-t-lg bg-gradient-to-t from-amber-deep via-amber to-amber-glow hover:shadow-amber-sm transition-all duration-300 group relative"
                            style={{ height: `${(d.value / MAX_REVENUE) * 100}%` }}
                          >
                            <span className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 text-xs font-bold text-amber-light whitespace-nowrap transition-opacity bg-dark-bg px-2 py-1 rounded border border-amber/30">
                              Rs.{d.value}K
                            </span>
                          </div>
                        </div>
                        <span className="text-xs text-gray-500 uppercase tracking-wide">{d.day}</span>
                      </div>
                    ))}
                  </div>
                  {/* TODO: Replace with Recharts <BarChart data={WEEKLY_REVENUE}><Bar dataKey="value" fill="#D4A017" /></BarChart> */}
                </div>

                {/* Quick Actions */}
                <div className="card-glow p-6 lg:p-8 space-y-5">
                  <h3 className="font-display text-2xl font-bold uppercase tracking-wider text-white mb-2">Quick Actions</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { i: '➕', l: 'Add Member', t: 'members' },
                      { i: '📅', l: 'New Booking', t: 'bookings' },
                      { i: '💳', l: 'Renew Plan', t: 'revenue' },
                      { i: '🏋️', l: 'Add Trainer', t: 'trainers' },
                      { i: '📢', l: 'Announcement', t: 'notifications' },
                      { i: '📊', l: 'Export CSV', t: 'revenue' },
                    ].map((a) => (
                      <button key={a.l} onClick={() => setTab(a.t)}
                              className="p-4 rounded-xl bg-dark-bg border border-dark-border hover:border-amber hover:shadow-amber-sm transition-all text-left group">
                        <div className="text-2xl mb-1 group-hover:scale-110 transition-transform">{a.i}</div>
                        <div className="text-xs font-semibold text-gray-300 group-hover:text-amber-light">{a.l}</div>
                      </button>
                    ))}
                  </div>

                  <div className="pt-5 border-t border-dark-border">
                    <h4 className="text-xs uppercase tracking-widest font-bold text-amber mb-3">Upcoming Check-ins</h4>
                    <div className="space-y-3">
                      {MOCK_MEMBERS.slice(0, 4).map((m) => (
                        <div key={m.id} className="flex items-center gap-3 group cursor-pointer p-2 rounded-lg hover:bg-dark-bg transition-colors" onClick={()=>setTab('members')}>
                          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-amber to-amber-deep flex items-center justify-center text-dark-bg font-bold text-xs flex-shrink-0">
                            {m.avatar}
                          </div>
                          <div className="flex-grow min-w-0">
                            <p className="text-sm text-white font-medium truncate">{m.name}</p>
                            <p className="text-[11px] text-gray-500 truncate">#{m.id} · {m.plan}</p>
                          </div>
                          <span className="text-xs text-green-400 font-bold">● in 2h</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </section>

              {/* Tables Section */}
              <section className="grid lg:grid-cols-2 gap-6">
                {/* Recent Members */}
                <div className="card-glow overflow-hidden">
                  <div className="p-6 flex items-center justify-between border-b border-dark-border">
                    <div>
                      <h3 className="font-display text-xl font-bold uppercase tracking-wider text-white">Recent Members</h3>
                      <p className="text-gray-500 text-sm">{members.length} members registered</p>
                    </div>
                    <button onClick={()=>setTab('members')} className="text-amber-light text-sm font-semibold uppercase tracking-wide hover:underline">
                      View All →
                    </button>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead><tr><th className="table-th">Member</th><th className="table-th">Plan</th><th className="table-th">Status</th><th className="table-th text-right">Actions</th></tr></thead>
                      <tbody>
                        {loading ? (
                          <tr><td colSpan={4} className="p-12 text-center text-gray-500">Loading members...</td></tr>
                        ) : (
                          members.slice(0, 5).map((m) => (
                            <tr key={m.id} className="hover:bg-dark-bg/50 transition-colors">
                              <td className="table-td">
                                <div className="flex items-center gap-3 min-w-[180px]">
                                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-amber to-amber-deep flex items-center justify-center text-dark-bg font-bold text-xs">{m.avatar}</div>
                                  <div>
                                    <p className="text-white font-semibold">{m.name}</p>
                                    <p className="text-xs text-gray-500">{m.email}</p>
                                  </div>
                                </div>
                              </td>
                              <td className="table-td"><span className={`badge border ${PLAN_STYLES[m.plan]}`}>{m.plan}</span></td>
                              <td className="table-td"><STATUS_BADGE s={m.status} /></td>
                              <td className="table-td text-right">
                                <button className="text-amber-light hover:text-amber-glow font-semibold text-xs uppercase tracking-wide px-3 py-1.5 rounded-lg hover:bg-amber/10 transition-all">
                                  View
                                </button>
                              </td>
                            </tr>
                          ))
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Upcoming Bookings */}
                <div className="card-glow overflow-hidden">
                  <div className="p-6 flex items-center justify-between border-b border-dark-border">
                    <div>
                      <h3 className="font-display text-xl font-bold uppercase tracking-wider text-white">Upcoming Bookings</h3>
                      <p className="text-gray-500 text-sm">{bookings.length} scheduled appointments</p>
                    </div>
                    <button onClick={()=>setTab('bookings')} className="text-amber-light text-sm font-semibold uppercase tracking-wide hover:underline">
                      View All →
                    </button>
                  </div>
                  <div className="divide-y divide-dark-border">
                    {loading ? (
                      <div className="p-12 text-center text-gray-500">Loading bookings...</div>
                    ) : (
                      bookings.slice(0, 6).map((b) => (
                        <div key={b.id} className="p-4 flex items-start gap-4 hover:bg-dark-bg/50 transition-colors cursor-pointer group">
                          <div className="w-12 h-12 rounded-xl bg-amber/10 border border-amber/30 flex flex-col items-center justify-center flex-shrink-0 group-hover:shadow-amber-sm">
                            <span className="text-[10px] text-amber-light font-bold uppercase">{b.date.split('-')[2]}</span>
                            <span className="text-[9px] text-gray-500 uppercase">Oct</span>
                          </div>
                          <div className="flex-grow min-w-0">
                            <div className="flex flex-wrap items-center justify-between gap-2">
                              <p className="text-white font-semibold">{b.customer}</p>
                              <STATUS_BADGE s={b.status} />
                            </div>
                            <p className="text-xs text-gray-400">{b.service} · {b.trainer}</p>
                            <p className="text-xs text-amber-light">{b.time} · {b.amount}</p>
                          </div>
                        </div>
                      ))
                    )}
                  </div>
                </div>
              </section>
            </>
          )}

          {/* ========== TAB: MEMBERS ========== */}
          {tab === 'members' && (
            <section>
              <div className="flex flex-wrap justify-between items-center gap-4 mb-6">
                <div>
                  <h2 className="font-display text-2xl font-bold uppercase tracking-wider text-white">All Members ({filteredMembers.length})</h2>
                  <p className="text-gray-500 text-sm">Manage member accounts, memberships and renewals</p>
                </div>
                <div className="flex flex-wrap gap-3">
                  <button className="btn-secondary !px-4 !py-2 text-xs">📥 Import CSV</button>
                  <button className="btn-primary !px-4 !py-2 text-xs">＋ Add New Member</button>
                </div>
              </div>
              <div className="card-glow overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr>
                        <th className="table-th"><input type="checkbox" className="accent-amber" /></th>
                        <th className="table-th">Member ID</th>
                        <th className="table-th">Name & Contact</th>
                        <th className="table-th">Plan</th>
                        <th className="table-th">Status</th>
                        <th className="table-th">Joined</th>
                        <th className="table-th">Expires</th>
                        <th className="table-th text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredMembers.map((m) => (
                        <tr key={m.id} className="hover:bg-dark-bg/50 transition-colors">
                          <td className="table-td"><input type="checkbox" className="accent-amber" /></td>
                          <td className="table-td font-mono text-amber text-xs">{m.id}</td>
                          <td className="table-td">
                            <div className="flex items-center gap-3">
                              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-amber to-amber-deep flex items-center justify-center text-dark-bg font-bold text-xs">{m.avatar}</div>
                              <div>
                                <p className="text-white font-semibold">{m.name}</p>
                                <p className="text-xs text-gray-500">{m.email} · {m.phone}</p>
                              </div>
                            </div>
                          </td>
                          <td className="table-td"><span className={`badge border ${PLAN_STYLES[m.plan]}`}>{m.plan}</span></td>
                          <td className="table-td"><STATUS_BADGE s={m.status} /></td>
                          <td className="table-td text-gray-400">{m.joined}</td>
                          <td className="table-td text-gray-400">{m.expires}</td>
                          <td className="table-td text-right space-x-2">
                            <button className="text-gray-400 hover:text-amber text-sm">👁</button>
                            <button className="text-gray-400 hover:text-amber text-sm">✏️</button>
                            <button className="text-gray-400 hover:text-red-400 text-sm">🗑</button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="p-5 border-t border-dark-border flex flex-wrap items-center justify-between gap-3 text-sm">
                  <p className="text-gray-500">Showing 1-{filteredMembers.length} of {filteredMembers.length} members</p>
                  <div className="flex gap-2">
                    <button className="px-4 py-2 rounded-lg border border-dark-border text-gray-400 hover:border-amber hover:text-amber transition-all">Prev</button>
                    <button className="px-4 py-2 rounded-lg bg-amber text-dark-bg font-bold shadow-amber-sm">1</button>
                    <button className="px-4 py-2 rounded-lg border border-dark-border text-gray-400 hover:border-amber hover:text-amber transition-all">2</button>
                    <button className="px-4 py-2 rounded-lg border border-dark-border text-gray-400 hover:border-amber hover:text-amber transition-all">Next</button>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* ========== TAB: BOOKINGS ========== */}
          {tab === 'bookings' && (
            <section>
              <div className="flex flex-wrap justify-between items-center gap-4 mb-6">
                <div>
                  <h2 className="font-display text-2xl font-bold uppercase tracking-wider text-white">All Bookings ({bookings.length})</h2>
                  <p className="text-gray-500 text-sm">Manage session bookings, confirmations and cancellations</p>
                </div>
                <div className="flex flex-wrap gap-3">
                  <Link to="/booking" className="btn-primary !px-4 !py-2 text-xs">＋ New Booking</Link>
                </div>
              </div>
              <div className="grid gap-3">
                {bookings.map((b) => (
                  <div key={b.id} className="card-glow p-5 flex flex-wrap items-center gap-4 hover:border-amber hover:shadow-amber-sm transition-all">
                    <div className="w-14 h-14 rounded-xl bg-amber/10 border border-amber/30 flex flex-col items-center justify-center flex-shrink-0">
                      <span className="text-sm text-amber-light font-bold">{b.date.split('-')[2]}/{b.date.split('-')[1]}</span>
                      <span className="text-[10px] text-gray-500 uppercase">{b.time}</span>
                    </div>
                    <div className="flex-grow min-w-[220px]">
                      <div className="flex flex-wrap items-center gap-2">
                        <p className="text-white font-bold">{b.customer}</p>
                        <STATUS_BADGE s={b.status} />
                        <span className="font-mono text-xs text-gray-500">{b.id}</span>
                      </div>
                      <p className="text-sm text-gray-300 mt-0.5">{b.service}</p>
                      <p className="text-xs text-gray-500">Trainer: {b.trainer} · {b.date} · {b.time}</p>
                    </div>
                    <div className="flex items-center gap-6">
                      <div className="text-right">
                        <p className="text-amber-light font-display text-xl font-bold">{b.amount}</p>
                      </div>
                      <div className="flex gap-2">
                        <button className="px-3 py-2 rounded-lg border border-dark-border text-gray-400 hover:border-amber hover:text-amber text-xs font-semibold uppercase tracking-wide transition-all">Edit</button>
                        <button className="px-3 py-2 rounded-lg bg-amber/10 border border-amber/30 text-amber-light hover:bg-amber hover:text-dark-bg text-xs font-semibold uppercase tracking-wide transition-all">View</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* ========== TAB: REVENUE ========== */}
          {tab === 'revenue' && (
            <section className="space-y-6">
              <div className="grid md:grid-cols-3 gap-5">
                <div className="card-glow p-6"><p className="text-gray-500 text-xs uppercase tracking-wider mb-1">Monthly Revenue</p><p className="font-display text-4xl font-bold text-white mb-2">Rs. 2.48M</p><p className="text-green-400 text-sm font-bold">+18.3% vs last month</p></div>
                <div className="card-glow p-6"><p className="text-gray-500 text-xs uppercase tracking-wider mb-1">New Signups</p><p className="font-display text-4xl font-bold text-white mb-2">284</p><p className="text-green-400 text-sm font-bold">+12.1% vs last month</p></div>
                <div className="card-glow p-6"><p className="text-gray-500 text-xs uppercase tracking-wider mb-1">Avg Revenue / Member</p><p className="font-display text-4xl font-bold text-white mb-2">Rs. 5,124</p><p className="text-amber-light text-sm font-bold">Target: Rs. 6,000</p></div>
              </div>
              <div className="card-glow p-8">
                <h3 className="font-display text-2xl font-bold uppercase tracking-wider text-white mb-8">Annual Revenue Breakdown</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
                  {[
                    {l:'Basic Plans', v:'Rs. 620K', p:25, c:'from-gray-500 to-gray-400'},
                    {l:'Pro Plans', v:'Rs. 1.18M', p:48, c:'from-amber-deep to-amber-glow'},
                    {l:'Elite Plans', v:'Rs. 420K', p:17, c:'from-green-600 to-green-400'},
                    {l:'PT & Add-ons', v:'Rs. 260K', p:10, c:'from-blue-600 to-blue-400'},
                  ].map((c) => (
                    <div key={c.l} className="p-5 rounded-xl bg-dark-bg border border-dark-border">
                      <p className="text-gray-500 text-xs uppercase tracking-wider mb-2">{c.l}</p>
                      <p className="font-display text-2xl font-bold text-white mb-3">{c.v}</p>
                      <div className="w-full h-2 rounded-full bg-dark-border overflow-hidden mb-2">
                        <div className={`h-full bg-gradient-to-r ${c.c}`} style={{width: `${c.p}%`}}></div>
                      </div>
                      <p className="text-xs text-gray-500">{c.p}% of total</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* ========== OTHER TABS: Trainers/Classes/Inventory/Notifications/Settings ========== */}
          {['trainers','classes','inventory','notifications','settings'].includes(tab) && (
            <section>
              <div className="card-glow p-16 text-center">
                <div className="w-24 h-24 mx-auto rounded-full bg-amber/10 border border-amber/30 flex items-center justify-center text-5xl mb-6 shadow-amber-sm">
                  {tab==='trainers' && '🏋️'}
                  {tab==='classes' && '🧘'}
                  {tab==='inventory' && '📦'}
                  {tab==='notifications' && '🔔'}
                  {tab==='settings' && '⚙️'}
                </div>
                <h3 className="font-display text-3xl font-bold uppercase tracking-wider text-white mb-3">
                  {tab.charAt(0).toUpperCase()+tab.slice(1)} Module
                </h3>
                <p className="text-gray-400 max-w-xl mx-auto mb-8">
                  Section is ready for backend integration. Map your API endpoints below to connect live data.
                </p>
                <div className="max-w-2xl mx-auto text-left bg-dark-bg rounded-xl border border-dark-border p-6 space-y-3 text-sm font-mono">
                  <p className="text-amber">// Suggested API endpoints:</p>
                  <p><span className="text-green-400">GET</span> /api/admin/{tab}</p>
                  <p><span className="text-amber-light">POST</span> /api/admin/{tab}</p>
                  <p><span className="text-blue-400">PUT</span> /api/admin/{tab}/:id</p>
                  <p><span className="text-red-400">DELETE</span> /api/admin/{tab}/:id</p>
                </div>
              </div>
            </section>
          )}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
