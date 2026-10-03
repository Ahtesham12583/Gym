import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [isRegister, setIsRegister] = useState(false);
  const [formData, setFormData] = useState({
    email: '', password: '', remember: true,
    fullName: '', confirmPassword: '', memberId: '', agree: false,
  });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const navigate = useNavigate();

  const validateLogin = () => {
    const e = {};
    if (!formData.email.trim()) e.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) e.email = 'Enter a valid email';
    if (!formData.password.trim()) e.password = 'Password is required';
    else if (formData.password.length < 6) e.password = 'Password must be at least 6 characters';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const validateRegister = () => {
    const e = {};
    if (!formData.fullName.trim()) e.fullName = 'Full name is required';
    if (!formData.email.trim()) e.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) e.email = 'Enter a valid email';
    if (!formData.memberId.trim()) e.memberId = 'Member ID / Reference is required';
    if (!formData.password.trim()) e.password = 'Password is required';
    else if (formData.password.length < 8) e.password = 'Password must be at least 8 characters';
    if (!formData.confirmPassword.trim()) e.confirmPassword = 'Please confirm password';
    else if (formData.password !== formData.confirmPassword) e.confirmPassword = 'Passwords do not match';
    if (!formData.agree) e.agree = 'You must accept the terms';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const submit = (e) => {
    e.preventDefault();
    const valid = isRegister ? validateRegister() : validateLogin();
    if (!valid) return;
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSuccess(true);
      setTimeout(() => { setSuccess(false); navigate('/'); }, 2500);
    }, 1800);
  };

  const change = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === 'checkbox' ? checked : value });
    if (errors[name]) setErrors({ ...errors, [name]: '' });
  };

  const switchMode = () => {
    setIsRegister(!isRegister);
    setErrors({});
    setSuccess(false);
    setFormData({ ...formData, password: '', confirmPassword: '', email: '', fullName: '', memberId: '', agree: false });
  };

  return (
    <div className="min-h-screen bg-dark-bg pt-20 relative overflow-hidden flex items-center">
      <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-neon-red/15 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-neon-red/10 rounded-full blur-[120px] translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-6xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 items-stretch">
          {/* LEFT PANEL - BRANDING */}
          <div className="hidden lg:flex flex-col justify-between p-12 bg-gradient-to-br from-dark-card via-dark-bg to-dark-card
                          border border-dark-border rounded-3xl relative overflow-hidden">
            <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
            <div className="absolute top-1/2 right-0 w-80 h-80 bg-neon-red/20 rounded-full blur-[100px]"></div>

            <div className="relative">
              <Link to="/" className="flex items-center gap-3 mb-12">
                <div className="w-14 h-14 flex items-center justify-center border-2 border-neon-red rounded-xl shadow-amber bg-dark-bg">
                  <svg viewBox="0 0 24 24" className="w-8 h-8 text-neon-red" fill="currentColor">
                    <path d="M20.57 14.86L22 13.43 20.57 12 17 15.57 8.43 7 12 3.43 10.57 2 9.14 3.43 7.71 2 5.57 4.14 4.14 2.71 2.71 4.14l1.43 1.43L2 7.71l1.43 1.43L2 10.57 3.43 12 7 8.43 15.57 17 12 20.57 13.43 22l1.43-1.43L16.29 22l2.14-2.14 1.43 1.43 1.43-1.43-1.43-1.43L22 16.29z"/>
                  </svg>
                </div>
                <div>
                  <span className="font-display text-3xl font-bold tracking-wider text-white block">FITNESS</span>
                  <span className="font-display text-2xl font-bold tracking-[0.3em] neon-text -mt-1 block">HUB</span>
                </div>
              </Link>

              <h1 className="font-display text-5xl font-bold uppercase text-white leading-[0.95] mb-6 tracking-tight">
                Welcome Back,<br/>
                <span className="text-gradient animate-glow-amber">Champion.</span>
              </h1>
              <p className="text-gray-400 text-lg leading-relaxed max-w-md">
                Access your membership dashboard, book sessions, track your workouts, and manage your plan — all in one place.
              </p>
            </div>

            <div className="relative space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-neon-red/10 border border-neon-red/30 rounded-xl flex items-center justify-center text-2xl">📈</div>
                <div>
                  <p className="text-white font-bold">Track Your Progress</p>
                  <p className="text-gray-500 text-sm">Visual analytics and weekly reports</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-neon-red/10 border border-neon-red/30 rounded-xl flex items-center justify-center text-2xl">📅</div>
                <div>
                  <p className="text-white font-bold">Smart Booking</p>
                  <p className="text-gray-500 text-sm">Reserve PT and classes in seconds</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-neon-red/10 border border-neon-red/30 rounded-xl flex items-center justify-center text-2xl">🎖️</div>
                <div>
                  <p className="text-white font-bold">Rewards Program</p>
                  <p className="text-gray-500 text-sm">Earn points for every workout</p>
                </div>
              </div>
            </div>

            <p className="relative text-gray-500 text-sm border-t border-dark-border pt-6">
              By logging in, you agree to Fitness Hub's Terms of Service & Privacy Policy.<br/>
              © {new Date().getFullYear()} Fitness Hub | <span className="text-neon-red">CEO: Ahtesham Azhar</span>
            </p>
          </div>

          {/* RIGHT PANEL - FORM */}
          <div className="card-glow p-8 md:p-12 shadow-amber-sm lg:rounded-3xl">
            {/* Mobile brand heading */}
            <div className="lg:hidden flex items-center gap-3 mb-8">
              <div className="w-12 h-12 flex items-center justify-center border-2 border-neon-red rounded-xl shadow-amber-sm bg-dark-bg">
                <svg viewBox="0 0 24 24" className="w-7 h-7 text-neon-red" fill="currentColor">
                  <path d="M20.57 14.86L22 13.43 20.57 12 17 15.57 8.43 7 12 3.43 10.57 2 9.14 3.43 7.71 2 5.57 4.14 4.14 2.71 2.71 4.14l1.43 1.43L2 7.71l1.43 1.43L2 10.57 3.43 12 7 8.43 15.57 17 12 20.57 13.43 22l1.43-1.43L16.29 22l2.14-2.14 1.43 1.43 1.43-1.43-1.43-1.43L22 16.29z"/>
                </svg>
              </div>
              <div>
                <span className="font-display text-2xl font-bold tracking-wider text-white block">FITNESS HUB</span>
                <span className="text-neon-red text-xs uppercase tracking-widest">Member Portal</span>
              </div>
            </div>

            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="font-display text-3xl md:text-4xl font-bold uppercase text-white tracking-wider">
                  {isRegister ? 'Create Account' : 'Member Login'}
                </h2>
                <p className="text-gray-400 mt-2">
                  {isRegister ? 'Join 15,000+ members transforming their lives.' : 'Sign in to access your member dashboard.'}
                </p>
              </div>
            </div>

            {success && (
              <div className="mb-7 bg-neon-red/10 border border-neon-red rounded-xl p-5 flex items-center gap-4 animate-pulse-amber">
                <div className="w-10 h-10 bg-neon-red rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7"/></svg>
                </div>
                <div>
                  <p className="text-white font-bold">{isRegister ? 'Account created successfully!' : 'Login successful!'}</p>
                  <p className="text-gray-400 text-sm">Redirecting to dashboard...</p>
                </div>
              </div>
            )}

            {/* Tab switcher */}
            <div className="bg-dark-bg border border-dark-border rounded-xl p-1 mb-8 grid grid-cols-2 gap-1">
              <button
                type="button" onClick={() => !isRegister || switchMode()}
                className={`py-3 rounded-lg font-bold uppercase tracking-wide text-sm transition-all ${
                  !isRegister ? 'bg-neon-red text-white shadow-amber-sm' : 'text-gray-400 hover:text-white'
                }`}>
                Login
              </button>
              <button
                type="button" onClick={() => isRegister || switchMode()}
                className={`py-3 rounded-lg font-bold uppercase tracking-wide text-sm transition-all ${
                  isRegister ? 'bg-neon-red text-white shadow-amber-sm' : 'text-gray-400 hover:text-white'
                }`}>
                Sign Up
              </button>
            </div>

            <form onSubmit={submit} className="space-y-5">
              {isRegister && (
                <>
                  <div>
                    <label className="form-label">Full Name *</label>
                    <input type="text" name="fullName" value={formData.fullName} onChange={change}
                           placeholder="e.g. John Doe" className={`input-field ${errors.fullName ? 'border-neon-red' : ''}`}/>
                    {errors.fullName && <p className="text-neon-red text-sm mt-2">⚠ {errors.fullName}</p>}
                  </div>
                  <div>
                    <label className="form-label">Member ID / Joining Reference *</label>
                    <input type="text" name="memberId" value={formData.memberId} onChange={change}
                           placeholder="Provided at gym or FH-XXXXXX" className={`input-field ${errors.memberId ? 'border-neon-red' : ''}`}/>
                    {errors.memberId && <p className="text-neon-red text-sm mt-2">⚠ {errors.memberId}</p>}
                  </div>
                </>
              )}

              <div>
                <label className="form-label">Email Address *</label>
                <input type="email" name="email" value={formData.email} onChange={change}
                       placeholder="you@example.com" className={`input-field ${errors.email ? 'border-neon-red' : ''}`}/>
                {errors.email && <p className="text-neon-red text-sm mt-2">⚠ {errors.email}</p>}
              </div>

              <div>
                <label className="form-label">Password *</label>
                <div className="relative">
                  <input type={showPass ? 'text' : 'password'} name="password" value={formData.password} onChange={change}
                         placeholder={isRegister ? 'Minimum 8 characters' : 'Enter your password'}
                         className={`input-field pr-12 ${errors.password ? 'border-neon-red' : ''}`}/>
                  <button type="button" onClick={() => setShowPass(!showPass)}
                          className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-amber-light text-sm font-bold uppercase">
                    {showPass ? 'Hide' : 'Show'}
                  </button>
                </div>
                {errors.password && <p className="text-neon-red text-sm mt-2">⚠ {errors.password}</p>}
              </div>

              {isRegister && (
                <div>
                  <label className="form-label">Confirm Password *</label>
                  <input type={showPass ? 'text' : 'password'} name="confirmPassword" value={formData.confirmPassword} onChange={change}
                         placeholder="Re-enter password" className={`input-field ${errors.confirmPassword ? 'border-neon-red' : ''}`}/>
                  {errors.confirmPassword && <p className="text-neon-red text-sm mt-2">⚠ {errors.confirmPassword}</p>}
                </div>
              )}

              <div className={`flex flex-wrap items-center justify-between gap-4 ${isRegister ? 'pt-2' : ''}`}>
                <label className="flex items-center gap-3 cursor-pointer group">
                  <input
                    type="checkbox" name={isRegister ? 'agree' : 'remember'}
                    checked={isRegister ? formData.agree : formData.remember} onChange={change}
                    className="w-5 h-5 rounded border-dark-border bg-dark-bg text-neon-red focus:ring-amber cursor-pointer accent-amber"/>
                  <span className="text-gray-400 text-sm group-hover:text-gray-200 transition-colors">
                    {isRegister ? 'I agree to the Terms & Privacy Policy' : 'Remember me for 30 days'}
                  </span>
                </label>
                {!isRegister && (
                  <a href="#" className="text-neon-red text-sm font-semibold hover:underline">
                    Forgot Password?
                  </a>
                )}
              </div>
              {isRegister && errors.agree && <p className="text-neon-red text-sm -mt-3">⚠ {errors.agree}</p>}

              <button
                type="submit" disabled={submitting || success}
                className="btn-primary w-full !py-4 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-3 animate-pulse-amber"
              >
                {submitting ? (
                  <>
                    <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
                    </svg>
                    Processing...
                  </>
                ) : (
                  <>{isRegister ? 'Create My Account' : 'Sign In To Dashboard'} →</>
                )}
              </button>
            </form>

            {/* Divider */}
            <div className="flex items-center gap-4 my-8">
              <div className="flex-grow h-px bg-dark-border"></div>
              <span className="text-gray-500 uppercase text-xs tracking-widest">Or Continue With</span>
              <div className="flex-grow h-px bg-dark-border"></div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <button type="button" className="py-3.5 bg-dark-bg border border-dark-border rounded-xl text-gray-300 font-bold text-sm uppercase tracking-wide
                                                hover:border-amber hover:text-amber-light hover:shadow-amber-sm transition-all flex items-center justify-center gap-2">
                <span className="text-lg">G</span> Google
              </button>
              <button type="button" className="py-3.5 bg-dark-bg border border-dark-border rounded-xl text-gray-300 font-bold text-sm uppercase tracking-wide
                                                hover:border-amber hover:text-amber-light hover:shadow-amber-sm transition-all flex items-center justify-center gap-2">
                <span className="text-lg">f</span> Facebook
              </button>
            </div>

            {/* Switch */}
            <p className="text-center text-gray-400 mt-8 text-sm md:text-base">
              {isRegister ? 'Already a member?' : "Don't have a portal account yet?"}{' '}
              <button type="button" onClick={switchMode}
                      className="text-neon-red font-bold uppercase tracking-wide hover:underline">
                {isRegister ? 'Login Here' : 'Sign Up Now'}
              </button>
            </p>

            <div className="mt-8 pt-7 border-t border-dark-border text-center">
              <p className="text-gray-500 text-sm mb-3">Need help accessing your account?</p>
              <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm">
                <a href="tel:+923001234567" className="text-neon-red hover:underline">📞 Support Desk</a>
                <Link to="/contact" className="text-neon-red hover:underline">✉️ Contact Form</Link>
                <Link to="/" className="text-neon-red hover:underline">← Back to Website</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
