import { useState } from 'react';
import { Link } from 'react-router-dom';

const Booking = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    age: '',
    gender: '',
    service: '',
    trainer: '',
    date: '',
    time: '',
    goal: '',
    experience: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const services = [
    { id: 'trial', name: 'Free Trial Session', price: 'FREE', duration: '60 minutes', desc: 'A complete gym tour + 1-hour workout session with a trainer.', popular: false, icon: '🎁' },
    { id: 'personal', name: 'Personal Training', price: 'Rs. 2,500', duration: '60 minutes', desc: '1-on-1 custom training with a certified fitness expert.', popular: true, icon: '💪' },
    { id: 'group', name: 'Group Class Booking', price: 'Rs. 500', duration: '45-60 minutes', desc: 'Join our CrossFit, Yoga, HIIT, Spin, or Boxing classes.', popular: false, icon: '👥' },
    { id: 'nutrition', name: 'Nutrition Consultation', price: 'Rs. 3,000', duration: '90 minutes', desc: 'Body composition analysis + custom meal plan by Dr. Natasha.', popular: false, icon: '🥗' },
    { id: 'assessment', name: 'Fitness Assessment', price: 'Rs. 1,500', duration: '75 minutes', desc: 'Full body measurements, strength & cardio testing, goal setting.', popular: false, icon: '📊' },
    { id: 'recovery', name: 'Recovery Session', price: 'Rs. 2,000', duration: '60 minutes', desc: 'Sauna + steam + foam rolling + assisted stretching.', popular: false, icon: '🧘' },
  ];

  const trainers = [
    { id: 'any', name: 'Any Available Trainer' },
    { id: 'marcus', name: 'Marcus Steel (Strength)' },
    { id: 'elena', name: 'Elena Rodriguez (HIIT/Cardio)' },
    { id: 'david', name: 'David Knight (Personal Training)' },
    { id: 'sophia', name: 'Sophia Chen (Yoga/Mobility)' },
    { id: 'natasha', name: 'Dr. Natasha Rao (Nutrition)' },
  ];

  const timeSlots = [
    '06:00 AM', '07:00 AM', '08:00 AM', '09:00 AM', '10:00 AM',
    '11:00 AM', '12:00 PM', '02:00 PM', '03:00 PM', '04:00 PM',
    '05:00 PM', '06:00 PM', '07:00 PM', '08:00 PM', '09:00 PM',
  ];

  const goals = ['Weight Loss', 'Muscle Gain', 'General Fitness', 'Endurance / Cardio', 'Competition Prep', 'Rehabilitation / Mobility'];
  const experienceLevels = ['Beginner (0-6 months)', 'Intermediate (6 months - 2 years)', 'Advanced (2-5 years)', 'Elite (5+ years)'];

  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Enter a valid email';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.age.trim()) newErrors.age = 'Age is required';
    if (!formData.gender) newErrors.gender = 'Please select gender';
    if (!formData.service) newErrors.service = 'Please select a service';
    if (!formData.date) newErrors.date = 'Please select a date';
    if (!formData.time) newErrors.time = 'Please select a time slot';
    if (!formData.goal) newErrors.goal = 'Please select your fitness goal';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setSubmitted(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' });
    }
  };

  const today = new Date().toISOString().split('T')[0];

  if (submitted) {
    return (
      <div className="bg-dark-bg pt-20 min-h-screen flex items-center justify-center px-4">
        <div className="max-w-2xl w-full card-glow p-12 text-center shadow-amber border border-amber">
          <div className="w-24 h-24 mx-auto bg-amber/20 rounded-full flex items-center justify-center mb-8 animate-pulse-amber border-2 border-amber">
            <svg className="w-12 h-12 text-amber-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="font-display text-4xl md:text-5xl font-bold uppercase text-white mb-4 animate-glow-amber">
            Booking Confirmed!
          </h1>
          <p className="text-gray-300 text-xl mb-4">
            Thank you, <span className="text-amber-light font-bold">{formData.fullName}</span>!
          </p>
          <p className="text-gray-400 mb-8 leading-relaxed">
            Your {services.find(s => s.id === formData.service)?.name || 'session'} has been successfully booked for{' '}
            <span className="text-white font-semibold">{formData.date}</span> at{' '}
            <span className="text-white font-semibold">{formData.time}</span>.
            Our team will contact you at <span className="text-amber-light font-semibold">{formData.phone}</span> or{' '}
            <span className="text-amber-light font-semibold">{formData.email}</span> within 24 hours to confirm all details.
          </p>
          <div className="bg-dark-bg border border-dark-border rounded-xl p-6 mb-10 text-left">
            <h3 className="font-display text-xl font-bold uppercase text-amber-light mb-4 tracking-wider">Booking Summary</h3>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <p className="text-gray-500">Service:</p><p className="text-white">{services.find(s => s.id === formData.service)?.name}</p>
              <p className="text-gray-500">Trainer:</p><p className="text-white">{trainers.find(t => t.id === formData.trainer)?.name || 'Any Available'}</p>
              <p className="text-gray-500">Date:</p><p className="text-white">{formData.date}</p>
              <p className="text-gray-500">Time:</p><p className="text-white">{formData.time}</p>
              <p className="text-gray-500">Goal:</p><p className="text-white">{formData.goal}</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={() => { setSubmitted(false); setFormData({fullName:'',email:'',phone:'',age:'',gender:'',service:'',trainer:'',date:'',time:'',goal:'',experience:'',message:''}); }} className="btn-secondary">
              Book Another Session
            </button>
            <Link to="/" className="btn-primary">Back to Home</Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-dark-bg pt-20">
      {/* HEADER */}
      <section className="relative py-20 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-25"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-96 bg-amber/15 blur-[120px] rounded-full"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          <p className="text-amber-light font-semibold uppercase tracking-[0.3em] mb-4">Reserve Your Spot</p>
          <h1 className="font-display text-5xl md:text-7xl font-bold uppercase text-white mb-6">
            Book Your <span className="animate-glow-amber">Session</span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Take the first step towards a stronger, healthier you. Choose a service, pick your date, and let us take care of the rest.
          </p>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-amber-light font-semibold uppercase tracking-[0.3em] mb-3">Step 01</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold uppercase text-white tracking-wider">
              Choose Your Service
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s) => (
              <div
                key={s.id}
                onClick={() => handleChange({ target: { name: 'service', value: s.id } })}
                className={`relative card-glow p-6 cursor-pointer transition-all duration-300 ${
                  formData.service === s.id ? 'border-amber shadow-amber' : ''
                }`}
              >
                {s.popular && (
                  <div className="absolute -top-3 right-6 bg-amber text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-amber-sm">
                    Popular
                  </div>
                )}
                <div className="flex items-start justify-between mb-4">
                  <div className="w-14 h-14 bg-amber/10 border border-amber/30 rounded-xl flex items-center justify-center text-3xl">
                    {s.icon}
                  </div>
                  <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
                    formData.service === s.id ? 'bg-amber border-amber shadow-amber-sm' : 'border-dark-border'
                  }`}>
                    {formData.service === s.id && <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7"/></svg>}
                  </div>
                </div>
                <h3 className="font-display text-xl font-bold uppercase text-white mb-2 tracking-wider">{s.name}</h3>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">{s.desc}</p>
                <div className="flex items-center justify-between pt-4 border-t border-dark-border">
                  <span className="text-sm text-gray-500">⏱ {s.duration}</span>
                  <span className="font-display text-2xl font-bold amber-text">{s.price}</span>
                </div>
              </div>
            ))}
            {errors.service && <p className="text-amber-light col-span-full text-sm -mt-3">⚠ {errors.service}</p>}
          </div>
        </div>
      </section>

      {/* BOOKING FORM */}
      <section className="pb-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-amber-light font-semibold uppercase tracking-[0.3em] mb-3">Step 02</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold uppercase text-white tracking-wider">
              Fill In Your Details
            </h2>
          </div>

          <form onSubmit={handleSubmit} className="card-glow p-8 md:p-12 shadow-amber-sm">
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div>
                <label className="form-label">Full Name *</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className={`input-field ${errors.fullName ? 'border-amber' : ''}`}
                />
                {errors.fullName && <p className="text-amber-light text-sm mt-2">⚠ {errors.fullName}</p>}
              </div>
              <div>
                <label className="form-label">Email Address *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className={`input-field ${errors.email ? 'border-amber' : ''}`}
                />
                {errors.email && <p className="text-amber-light text-sm mt-2">⚠ {errors.email}</p>}
              </div>
              <div>
                <label className="form-label">Phone Number *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+92 300 1234567"
                  className={`input-field ${errors.phone ? 'border-amber' : ''}`}
                />
                {errors.phone && <p className="text-amber-light text-sm mt-2">⚠ {errors.phone}</p>}
              </div>
              <div>
                <label className="form-label">Age *</label>
                <input
                  type="number"
                  name="age"
                  min="13"
                  max="90"
                  value={formData.age}
                  onChange={handleChange}
                  placeholder="e.g. 28"
                  className={`input-field ${errors.age ? 'border-amber' : ''}`}
                />
                {errors.age && <p className="text-amber-light text-sm mt-2">⚠ {errors.age}</p>}
              </div>
            </div>

            <div className="mb-8">
              <label className="form-label mb-3 block">Gender *</label>
              <div className="grid grid-cols-3 gap-4">
                {['Male', 'Female', 'Other'].map((g) => (
                  <button
                    key={g}
                    type="button"
                    onClick={() => handleChange({ target: { name: 'gender', value: g } })}
                    className={`py-4 rounded-xl border-2 font-bold uppercase tracking-wider transition-all ${
                      formData.gender === g
                        ? 'border-amber bg-amber/10 text-white shadow-amber-sm'
                        : 'border-dark-border bg-dark-bg text-gray-400 hover:border-amber/50'
                    }`}
                  >
                    {g}
                  </button>
                ))}
              </div>
              {errors.gender && <p className="text-amber-light text-sm mt-2">⚠ {errors.gender}</p>}
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div>
                <label className="form-label">Preferred Trainer</label>
                <select
                  name="trainer"
                  value={formData.trainer}
                  onChange={handleChange}
                  className="input-field appearance-none cursor-pointer"
                >
                  {trainers.map((t) => (
                    <option key={t.id} value={t.id} className="bg-dark-card">{t.name}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="form-label">Fitness Goal *</label>
                <select
                  name="goal"
                  value={formData.goal}
                  onChange={handleChange}
                  className={`input-field appearance-none cursor-pointer ${errors.goal ? 'border-amber' : ''}`}
                >
                  <option value="" className="bg-dark-card">Select your goal</option>
                  {goals.map((g) => (
                    <option key={g} value={g} className="bg-dark-card">{g}</option>
                  ))}
                </select>
                {errors.goal && <p className="text-amber-light text-sm mt-2">⚠ {errors.goal}</p>}
              </div>
              <div>
                <label className="form-label">Experience Level</label>
                <select
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  className="input-field appearance-none cursor-pointer"
                >
                  <option value="" className="bg-dark-card">Select experience</option>
                  {experienceLevels.map((e) => (
                    <option key={e} value={e} className="bg-dark-card">{e}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="form-label">Preferred Date *</label>
                <input
                  type="date"
                  name="date"
                  min={today}
                  value={formData.date}
                  onChange={handleChange}
                  className={`input-field cursor-pointer ${errors.date ? 'border-amber' : ''}`}
                />
                {errors.date && <p className="text-amber-light text-sm mt-2">⚠ {errors.date}</p>}
              </div>
            </div>

            <div className="mb-8">
              <label className="form-label mb-3 block">Preferred Time *</label>
              <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-5 gap-2.5">
                {timeSlots.map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => handleChange({ target: { name: 'time', value: t } })}
                    className={`py-3 rounded-lg border text-sm font-semibold tracking-wide transition-all ${
                      formData.time === t
                        ? 'border-amber bg-amber/10 text-white shadow-amber-sm'
                        : 'border-dark-border bg-dark-bg text-gray-400 hover:border-amber/50 hover:text-white'
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
              {errors.time && <p className="text-amber-light text-sm mt-3">⚠ {errors.time}</p>}
            </div>

            <div className="mb-10">
              <label className="form-label">Any Message / Additional Info</label>
              <textarea
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us anything else we should know — injuries, medical conditions, specific requests, etc."
                className="input-field resize-none"
              />
            </div>

            <button
              type="submit"
              className="btn-primary w-full md:w-auto md:min-w-[300px] mx-auto block animate-pulse-amber text-lg"
            >
              Confirm Booking ✓
            </button>

            <p className="text-center text-gray-500 text-sm mt-6">
              By booking, you agree to our cancellation policy (24-hour notice required). No payment needed to book a free trial.
            </p>
          </form>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-dark-card">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-amber-light font-semibold uppercase tracking-[0.3em] mb-4">FAQ</p>
            <h2 className="section-title text-white text-center">
              Common <span className="text-gradient">Questions</span>
            </h2>
          </div>
          <div className="space-y-4">
            {[
              { q: 'Is the free trial really free?', a: 'Absolutely! The trial session includes a complete facility tour, a workout session, and a fitness consultation — with no payment or credit card required.' },
              { q: 'What should I bring to my first session?', a: 'Just comfortable workout clothes and clean sports shoes. We provide towels, water, and shower essentials at no extra cost.' },
              { q: 'Can I reschedule my booking?', a: 'Yes. Simply call or WhatsApp us at least 24 hours before your session, and we will reschedule for free. Same-day cancellations are charged at 50%.' },
              { q: 'Is there parking available?', a: 'We have a dedicated, free parking lot with 100+ spots right outside our facility. Valet is also available during peak hours.' },
              { q: 'Do I need to be fit to start?', a: 'Not at all! 70% of our members start as complete beginners. Our trainers customize every session to your exact level.' },
            ].map((faq, i) => (
              <details key={i} className="card-glow p-6 group">
                <summary className="cursor-pointer font-display text-lg md:text-xl font-bold uppercase tracking-wide text-white flex justify-between items-center">
                  <span>{faq.q}</span>
                  <span className="text-amber-light text-2xl group-open:rotate-45 transition-transform ml-4">+</span>
                </summary>
                <p className="text-gray-400 mt-4 leading-relaxed border-t border-dark-border pt-4">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Booking;
