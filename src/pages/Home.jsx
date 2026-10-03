import { Link } from 'react-router-dom';

const Home = () => {
  const stats = [
    { number: '15K+', label: 'Active Members' },
    { number: '50+', label: 'Expert Trainers' },
    { number: '24/7', label: 'Open Access' },
    { number: '100+', label: 'Programs' },
  ];

  const programs = [
    {
      title: 'Strength Training',
      desc: 'Build raw power and muscle mass with comprehensive strength programs featuring free weights, machines, and compound movements.',
      icon: '💪',
      features: ['Free Weights Area', 'Power Racks', 'Smith Machines', 'Progressive Overload'],
    },
    {
      title: 'Cardio & Endurance',
      desc: 'Boost stamina and burn calories with state-of-the-art cardio equipment and high-intensity interval training sessions.',
      icon: '🏃',
      features: ['Treadmills & Ellipticals', 'HIIT Classes', 'Spin Studio', 'Rowing Machines'],
    },
    {
      title: 'Personal Training',
      desc: 'One-on-one coaching tailored to your specific goals with certified trainers who push you beyond your limits.',
      icon: '🎯',
      features: ['Custom Workout Plans', 'Nutrition Guidance', 'Progress Tracking', 'Flexible Scheduling'],
    },
    {
      title: 'Group Classes',
      desc: 'Join energetic community classes including CrossFit, Yoga, Zumba, Boxing, and more with expert instructors.',
      icon: '👥',
      features: ['Yoga & Pilates', 'CrossFit Box', 'Dance Fitness', 'Martial Arts'],
    },
    {
      title: 'Nutrition Plans',
      desc: 'Fuel gains with personalized meal plans designed by certified nutritionists based on body type and goals.',
      icon: '🥗',
      features: ['Meal Prep Guides', 'Macros Calculation', 'Supplements Advice', 'Weekly Check-ins'],
    },
    {
      title: 'Recovery Zone',
      desc: 'Recover faster and prevent injuries with dedicated recovery area featuring steam, sauna, and massage therapy.',
      icon: '🧘',
      features: ['Steam & Sauna', 'Foam Rolling Area', 'Stretching Zone', 'Massage Therapy'],
    },
  ];

  const trainers = [
    { name: 'Marcus Steel', role: 'Head Trainer - Strength', exp: '12 Years Experience', img: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?w=500&h=600&fit=crop' },
    { name: 'Elena Rodriguez', role: 'Cardio & HIIT Specialist', exp: '8 Years Experience', img: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?w=500&h=600&fit=crop' },
    { name: 'David Knight', role: 'Personal Training Lead', exp: '15 Years Experience', img: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=500&h=600&fit=crop' },
    { name: 'Sophia Chen', role: 'Yoga & Mobility Coach', exp: '10 Years Experience', img: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=500&h=600&fit=crop' },
  ];

  const testimonials = [
    {
      name: 'Ahmed Khan',
      role: 'Member since 2023',
      text: 'Lost 25kg in 6 months! Trainers genuinely care about progress. Best investment I ever made in myself.',
      rating: 5,
    },
    {
      name: 'Sarah Williams',
      role: 'Member since 2022',
      text: 'Fitness Hub completely changed my lifestyle. Community is amazing and 24/7 access fits my schedule perfectly.',
      rating: 5,
    },
    {
      name: 'Rizwan Bhatti',
      role: 'Member since 2024',
      text: 'From 98kg to 78kg with proper guidance. Nutrition plan and PT sessions were a complete game changer.',
      rating: 5,
    },
  ];

  const pricing = [
    {
      name: 'Basic',
      price: '2,999',
      period: '/month',
      desc: 'Perfect for beginners starting their fitness journey',
      features: ['Gym Floor Access', 'Cardio Equipment', 'Locker Room Access', 'Mobile App Access', 'Fitness Assessment'],
      highlight: false,
    },
    {
      name: 'Pro',
      price: '5,999',
      period: '/month',
      desc: 'Most popular choice for serious athletes',
      features: ['Everything in Basic', 'All Group Classes', 'Sauna & Steam Access', '2 PT Sessions/Month', 'Nutrition Consultation'],
      highlight: true,
    },
    {
      name: 'Elite',
      price: '9,999',
      period: '/month',
      desc: 'Full package with unlimited personal attention',
      features: ['Everything in Pro', 'Unlimited PT Sessions', 'Custom Meal Plans', 'Priority Booking', 'Recovery Zone', 'Guest Passes'],
      highlight: false,
    },
  ];

  return (
    <div className="bg-dark-bg">
      {/* HERO SECTION - COMPACT, ABOVE THE FOLD */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden pt-16">
        <div className="absolute inset-0 bg-grid-pattern opacity-40"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&h=1080&fit=crop)' }}
        ></div>
        <div className="absolute top-1/4 -right-20 w-80 h-80 bg-amber/15 rounded-full blur-[110px]"></div>
        <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-amber/10 rounded-full blur-[110px]"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-8">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-5">
              <div className="inline-flex items-center gap-2 border border-amber/40 bg-amber/10 px-3 py-1.5 rounded-full animate-pulse-amber">
                <span className="w-2 h-2 bg-amber rounded-full animate-pulse"></span>
                <span className="text-amber-light text-xs font-semibold uppercase tracking-wider">Now Taking New Members</span>
              </div>

              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold uppercase leading-[0.92] tracking-tight">
                <span className="text-white block">Push Your</span>
                <span className="text-gradient block animate-glow-amber">Limits</span>
                <span className="text-white block">Beyond</span>
                <span className="amber-text block">Extreme.</span>
              </h1>

              <p className="text-gray-400 text-base md:text-lg max-w-xl leading-relaxed">
                Join <span className="text-white font-semibold">Fitness Hub</span> and transform your body with world-class equipment, expert trainers, and a community that pushes you to become the strongest version of yourself.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link to="/booking" className="btn-primary text-center animate-pulse-amber">
                  Book Free Trial
                </Link>
                <Link to="/about" className="btn-secondary text-center">
                  Explore More
                </Link>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-5 border-t border-dark-border">
                {stats.map((stat) => (
                  <div key={stat.label} className="text-center sm:text-left">
                    <div className="font-display text-2xl md:text-3xl font-bold amber-text">{stat.number}</div>
                    <div className="text-gray-500 text-xs uppercase tracking-wide mt-0.5">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
 
            <div className="relative hidden lg:block">
              <div className="relative z-10 animate-float">
                <img 
                  src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=700&h=900&fit=crop" 
                  alt="Fitness Athlete"
                  className="rounded-2xl shadow-amber border border-amber/30 w-full object-cover h-[440px]"
                />
                <div className="absolute -bottom-4 -left-4 bg-dark-card border border-amber rounded-xl p-3.5 shadow-amber-sm">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-amber/20 rounded-full flex items-center justify-center text-xl">🏆</div>
                    <div>
                      <p className="text-white font-bold text-lg">#1 Rated Gym</p>
                      <p className="text-gray-400 text-xs">5 Years Running</p>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 bg-dark-card border border-amber rounded-xl p-3.5 shadow-amber-sm">
                  <div className="flex items-center gap-1">
                    {[1,2,3,4,5].map(i => <span key={i} className="text-amber-light text-base">★</span>)}
                  </div>
                  <p className="text-gray-400 text-xs mt-1">4.9 / 5.0 (5,000+)</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-dark-bg to-transparent"></div>
      </section>

      {/* PROGRAMS */}
      <section className="py-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-amber-light font-semibold uppercase tracking-[0.3em] mb-3 text-sm">What We Offer</p>
            <h2 className="section-title text-white text-center">
              Programs That <span className="text-gradient">Deliver Results</span>
            </h2>
            <p className="section-subtitle mb-0">
              Beginner taking first steps or seasoned athlete chasing PRs — we have the perfect program for you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {programs.map((prog, idx) => (
              <div key={idx} className="card-glow p-5 group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-amber/5 rounded-full blur-2xl group-hover:bg-amber/10 transition-all duration-500"></div>
                
                <div className="relative">
                  <div className="w-12 h-12 bg-amber/10 border border-amber/30 rounded-xl flex items-center justify-center text-2xl mb-4
                                group-hover:shadow-amber-sm group-hover:border-amber transition-all duration-300">
                    {prog.icon}
                  </div>
                  <h3 className="font-display text-xl font-bold uppercase text-white mb-2 tracking-wider">
                    {prog.title}
                  </h3>
                  <p className="text-gray-400 mb-4 text-sm leading-relaxed">{prog.desc}</p>
                  <ul className="space-y-1.5">
                    {prog.features.map((f, i) => (
                      <li key={i} className="flex items-center gap-2.5 text-gray-300 text-sm">
                        <span className="w-4.5 h-4.5 bg-amber/20 rounded-full flex items-center justify-center text-amber-light text-xs flex-shrink-0">✓</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT / TRANSFORMATION BANNER */}
      <section className="py-16 relative overflow-hidden clip-slant-reverse bg-dark-card">
        <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div className="relative">
              <div className="grid grid-cols-2 gap-3">
                <img src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=400&h=500&fit=crop" alt="Gym" className="rounded-xl h-52 w-full object-cover border border-dark-border"/>
                <img src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=400&h=500&fit=crop" alt="Training" className="rounded-xl h-52 w-full object-cover border border-dark-border mt-8"/>
                <img src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=400&h=500&fit=crop" alt="Weights" className="rounded-xl h-52 w-full object-cover border border-dark-border -mt-6"/>
                <img src="https://images.unsplash.com/photo-1576678927484-cc907957088c?w=400&h=500&fit=crop" alt="Class" className="rounded-xl h-52 w-full object-cover border border-dark-border"/>
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-amber rounded-2xl flex flex-col items-center justify-center shadow-amber animate-pulse-amber">
                <span className="font-display text-4xl font-bold text-white">10+</span>
                <span className="text-white/80 uppercase tracking-wide text-xs text-center px-2">Years Excellence</span>
              </div>
            </div>

            <div>
              <p className="text-amber-light font-semibold uppercase tracking-[0.3em] mb-3 text-sm">About Fitness Hub</p>
              <h2 className="section-title text-white text-left mb-4">
                More Than Just A <span className="text-gradient">Gym.</span>
              </h2>
              <p className="text-gray-400 text-base mb-4 leading-relaxed">
                Founded under the vision of CEO <span className="text-white font-semibold">Ahtesham Azhar</span>, Fitness Hub was built on the belief that fitness should be accessible, effective, and life-changing. We don't just help you lift weights — we build confidence, discipline, and resilience.
              </p>
              <p className="text-gray-400 text-base mb-6 leading-relaxed">
                Over a decade, we've transformed thousands of lives through science-backed training, personalized nutrition, and a community that feels like family. Every rep, every drop of sweat, every milestone — we're right there with you.
              </p>

              <div className="space-y-3 mb-6">
                {['State-of-the-art 20,000 sq. ft. facility', 'Top-certified trainers with 10+ years experience', 'Proven transformation track record'].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-7 h-7 bg-amber rounded-lg flex items-center justify-center text-white font-bold flex-shrink-0 mt-0.5 text-sm">{i+1}</div>
                    <p className="text-gray-300 pt-0.5 text-sm">{item}</p>
                  </div>
                ))}
              </div>

              <Link to="/about" className="btn-secondary inline-block">
                Learn More About Us →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* TRAINERS */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-amber-light font-semibold uppercase tracking-[0.3em] mb-3 text-sm">Meet The Team</p>
            <h2 className="section-title text-white text-center">
              Expert <span className="text-gradient">Trainers</span>
            </h2>
            <p className="section-subtitle mb-0">
              Certified professionals who live and breathe fitness. They don't just train you — they inspire you.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {trainers.map((t, idx) => (
              <div key={idx} className="group relative overflow-hidden rounded-2xl border border-dark-border">
                <img src={t.img} alt={t.name} className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"/>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                <div className="absolute inset-0 bg-amber/0 group-hover:bg-amber/15 transition-all duration-500"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-3 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="w-10 h-1 bg-amber mb-3 group-hover:w-16 transition-all duration-500"></div>
                  <h3 className="font-display text-xl font-bold text-white uppercase tracking-wider">{t.name}</h3>
                  <p className="text-amber-light text-xs font-semibold uppercase tracking-wide">{t.role}</p>
                  <p className="text-gray-400 text-xs mt-1">{t.exp}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-16 bg-dark-card relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-amber/5 blur-[100px] rounded-full"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-10">
            <p className="text-amber-light font-semibold uppercase tracking-[0.3em] mb-3 text-sm">Success Stories</p>
            <h2 className="section-title text-white text-center">
              Real People. <span className="text-gradient">Real Results.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {testimonials.map((t, idx) => (
              <div key={idx} className="card-glow p-6">
                <div className="flex gap-0.5 mb-4">
                  {[...Array(t.rating)].map((_, i) => <span key={i} className="text-amber-light text-base">★</span>)}
                </div>
                <p className="text-gray-300 text-sm leading-relaxed italic mb-5">"{t.text}"</p>
                <div className="flex items-center gap-3 pt-4 border-t border-dark-border">
                  <div className="w-10 h-10 bg-gradient-to-br from-amber to-amber-dark rounded-full flex items-center justify-center text-white font-bold">
                    {t.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm">{t.name}</p>
                    <p className="text-gray-500 text-xs">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-amber-light font-semibold uppercase tracking-[0.3em] mb-3 text-sm">Membership Plans</p>
            <h2 className="section-title text-white text-center">
              Choose Your <span className="text-gradient">Path</span>
            </h2>
            <p className="section-subtitle mb-0">
              Flexible plans matching your commitment level and fitness goals. No hidden fees. Cancel anytime.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-5 items-stretch">
            {pricing.map((plan, idx) => (
              <div key={idx} className={`relative rounded-2xl p-6 border-2 transition-all duration-500 flex flex-col ${
                plan.highlight 
                  ? 'border-amber bg-dark-card shadow-amber transform md:-translate-y-3' 
                  : 'border-dark-border bg-dark-bg hover:border-amber/50'
              }`}>
                {plan.highlight && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-amber text-white px-5 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-amber-sm">
                    Most Popular
                  </div>
                )}
                <h3 className="font-display text-2xl font-bold uppercase tracking-wider text-white mb-1">{plan.name}</h3>
                <p className="text-gray-400 text-sm mb-5">{plan.desc}</p>
                <div className="mb-5 pb-5 border-b border-dark-border">
                  <span className="text-gray-500 text-xl">Rs. </span>
                  <span className="font-display text-5xl font-bold amber-text">{plan.price}</span>
                  <span className="text-gray-500 text-lg">{plan.period}</span>
                </div>
                <ul className="space-y-2.5 mb-6 flex-grow">
                  {plan.features.map((f, i) => (
                    <li key={i} className="flex items-center gap-2.5 text-gray-300 text-sm">
                      <span className="text-amber-light text-base flex-shrink-0">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link to="/booking" className={plan.highlight ? 'btn-primary w-full text-center' : 'btn-secondary w-full text-center'}>
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-amber/15 via-amber/8 to-amber/15"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=1920&h=600&fit=crop)' }}
        ></div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold uppercase text-white mb-5 leading-tight">
            Ready to <span className="animate-glow-amber">Transform?</span>
          </h2>
          <p className="text-gray-300 text-lg mb-7 max-w-2xl mx-auto">
            Your fitness journey starts with one decision. Book your free trial today — 100% no obligation.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/booking" className="btn-primary text-center animate-pulse-amber">
              Book Free Trial Session
            </Link>
            <Link to="/contact" className="btn-secondary text-center">
              Contact Us Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
