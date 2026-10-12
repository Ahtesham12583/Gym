import { Link } from 'react-router-dom';
import ahteshamProfile from '../assets/ahtesham-profile.jpg';
const About = () => {
  const milestones = [
    { year: '2014', title: 'The Beginning', desc: 'Fitness Hub founded by Ahtesham Azhar with a single 2,000 sq. ft. facility and a vision to revolutionize fitness.' },
    { year: '2017', title: 'First Expansion', desc: 'Expanded to 10,000 sq. ft., added dedicated CrossFit zone and group class studios.' },
    { year: '2020', title: 'Digital Revolution', desc: 'Launched our mobile app with virtual training during the pandemic, serving 5,000+ members online.' },
    { year: '2023', title: 'State-of-the-Art Facility', desc: 'Moved to our current 25,000 sq. ft. flagship location with premium equipment and recovery zone.' },
    { year: '2026', title: 'Community Milestone', desc: 'Crossed 15,000 active members. Recognized as the #1 rated gym in the region for 5 consecutive years.' },
  ];

  const values = [
    { icon: '🎯', title: 'Excellence', desc: 'We never compromise on quality. Every trainer, every machine, every class is handpicked to deliver results.' },
    { icon: '🤝', title: 'Community', desc: 'Fitness is better together. We foster a supportive environment where every member feels like family.' },
    { icon: '🔥', title: 'Discipline', desc: 'Results come from consistency. We teach habits that last a lifetime, not just temporary fixes.' },
    { icon: '💡', title: 'Innovation', desc: 'From equipment to training methods, we stay ahead of the curve with the latest in fitness science.' },
  ];

  const team = [
    { name: 'Ahtesham Azhar', role: 'Founder & CEO', desc: 'Visionary leader with 15+ years in the fitness industry. Former competitive athlete turned entrepreneur.', img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=500&h=600&fit=crop' },
    { name: 'Marcus Steel', role: 'Head Trainer', desc: 'ISSA & NSCA Certified. Specializes in strength & conditioning for competitive athletes.', img: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?w=500&h=600&fit=crop' },
    { name: 'Dr. Natasha Rao', role: 'Head of Nutrition', desc: 'PhD in Sports Nutrition. Creates customized meal plans backed by metabolic testing.', img: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=500&h=600&fit=crop' },
    { name: 'David Knight', role: 'Personal Training Lead', desc: '15+ years training celebrities and athletes. Ace Certified Personal Trainer.', img: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=500&h=600&fit=crop' },
  ];

  const facilities = [
    { icon: '🏋️', name: 'Free Weights Area', size: '5,000 sq. ft.' },
    { icon: '🏃', name: 'Cardio Theatre', size: '3,000 sq. ft.' },
    { icon: '🥊', name: 'CrossFit Box', size: '4,000 sq. ft.' },
    { icon: '🧘', name: 'Yoga & Pilates Studio', size: '2,500 sq. ft.' },
    { icon: '💪', name: 'Machine Floor', size: '4,500 sq. ft.' },
    { icon: '🧖', name: 'Recovery & Spa Zone', size: '2,000 sq. ft.' },
    { icon: '🍎', name: 'Juice Bar & Cafe', size: '1,200 sq. ft.' },
    { icon: '🚿', name: 'Locker Rooms', size: '2,800 sq. ft.' },
  ];

  return (
    <div className="bg-dark-bg pt-20">
      {/* HERO */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-15"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1605296867304-46d5465a13f1?w=1920&h=800&fit=crop)' }}
        ></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber/15 blur-[120px] rounded-full"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-4xl mx-auto">
            <p className="text-amber-light font-semibold uppercase tracking-[0.3em] mb-4 inline-flex items-center gap-2">
              <span className="w-8 h-px bg-amber"></span>
              Our Story
              <span className="w-8 h-px bg-amber"></span>
            </p>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold uppercase text-white mb-6 leading-tight">
              Building <span className="text-gradient animate-glow-amber">Champions</span><br/>
              Since 2014
            </h1>
            <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              From a single gym with a dream to a 25,000 sq. ft. fitness empire. This is the story of Fitness Hub — built on sweat, passion, and the unwavering vision of one man.
            </p>
          </div>
        </div>
      </section>

      {/* CEO / FOUNDER SECTION - COMPACT, EQUAL HEIGHTS */}
      <section className="py-14 bg-dark-card relative overflow-hidden">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-amber/8 blur-[120px] rounded-full"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-5 gap-8 items-stretch">
            {/* IMAGE CARD - matches text height automatically via items-stretch */}
            <div className="lg:col-span-2 relative">
              <div className="relative h-full min-h-[420px]">
                <div className="absolute -top-3 -left-3 w-full h-full border-2 border-amber rounded-2xl"></div>
               <img 
  src={ahteshamProfile}
  alt="Ahtesham Azhar - CEO"
  className="relative rounded-2xl w-full h-full min-h-[420px] object-cover object-top shadow-amber-sm border border-amber/30"
/>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-amber text-white p-4 rounded-xl shadow-amber animate-pulse-amber">
                <p className="font-display text-3xl font-bold leading-none">15+</p>
                <p className="uppercase text-xs tracking-wider mt-1">Years Leading</p>
              </div>
            </div>

            {/* TEXT BLOCK - same height as image */}
            <div className="lg:col-span-3 flex flex-col justify-center">
              <span className="inline-block bg-amber/10 text-amber-light px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider border border-amber/30 mb-4 w-fit">
                Meet Our Leader
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold uppercase text-white mb-1">
                Ahtesham Azhar
              </h2>
              <p className="amber-text text-base font-bold uppercase tracking-widest mb-5">
                Founder & Chief Executive Officer
              </p>

              <div className="space-y-3 text-gray-300 text-sm leading-relaxed mb-5">
                <p>
                  <span className="text-white text-4xl font-display float-left mr-2.5 leading-none -mt-0.5">A</span>
                  htesham Azhar didn't just open a gym — he built a movement. A former national-level powerlifter, Ahtesham experienced firsthand how the right training environment can transform not just bodies, but lives. After retiring from competitive sports in 2013, he made it his mission to create a space where science met sweat — where every member, from absolute beginners to elite athletes, felt at home.
                </p>
                <p>
                  What started as a humble 2,000 sq. ft. facility with just 3 trainers and 50 members is now a 25,000 sq. ft. flagship gym serving 15,000+ active members. Ahtesham's philosophy: <span className="text-amber-light font-semibold">no shortcuts, no excuses — just consistent hard work backed by proper science.</span>
                </p>
                <p>
                  "Fitness isn't about being perfect. It's about being better than you were yesterday. Every single day. That's the culture at Fitness Hub, and I'm proud to lead a team that genuinely cares about every member."
                </p>
                <p className="text-amber-light font-bold italic">— Ahtesham Azhar</p>
              </div>

              <div className="grid grid-cols-3 gap-3 mb-5">
                {[
                  { n: '15K+', l: 'Members Trained' },
                  { n: '50+', l: 'Trainers Mentored' },
                  { n: '10+', l: 'Industry Awards' },
                ].map((s, i) => (
                  <div key={i} className="bg-dark-bg border border-dark-border rounded-lg p-3 text-center">
                    <p className="font-display text-2xl font-bold amber-text">{s.n}</p>
                    <p className="text-gray-400 text-[11px] uppercase tracking-wide mt-0.5">{s.l}</p>
                  </div>
                ))}
              </div>

              <div>
                <Link to="/contact" className="btn-primary inline-block">
                  Connect With Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION VISION VALUES */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-amber-light font-semibold uppercase tracking-[0.3em] mb-3 text-sm">Our Foundation</p>
            <h2 className="section-title text-white text-center">
              Mission, Vision & <span className="text-gradient">Values</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-5 mb-16">
            {[
              {
                label: 'Our Mission',
                icon: '🚀',
                desc: 'To empower 1 million people to take control of their health and fitness through accessible, science-backed training and lifelong habits.',
                color: 'from-amber/20 to-transparent',
              },
              {
                label: 'Our Vision',
                icon: '👁️',
                desc: 'To become the most trusted fitness destination globally, setting the benchmark for quality training, member experience, and community culture.',
                color: 'from-amber/10 via-amber/5 to-transparent',
              },
              {
                label: 'Our Promise',
                icon: '🤝',
                desc: 'To stand by every member from day one until they hit their goals — and then push them further than they ever thought possible.',
                color: 'from-transparent to-amber/20',
              },
            ].map((item, idx) => (
              <div key={idx} className={`relative card-glow p-6 overflow-hidden`}>
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} pointer-events-none`}></div>
                <div className="relative">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="font-display text-xl font-bold uppercase text-white mb-3 tracking-wider">
                    {item.label}
                  </h3>
                  <p className="text-gray-400 leading-relaxed text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v, idx) => (
              <div key={idx} className="card-glow p-5 text-center group">
                <div className="w-14 h-14 mx-auto bg-amber/10 border border-amber/30 rounded-xl flex items-center justify-center text-2xl mb-4
                              group-hover:shadow-amber-sm group-hover:border-amber transition-all duration-500">
                  {v.icon}
                </div>
                <h3 className="font-display text-lg font-bold uppercase text-white mb-2 tracking-wider">{v.title}</h3>
                <p className="text-gray-400 leading-relaxed text-sm">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="py-16 bg-dark-card relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-10">
            <p className="text-amber-light font-semibold uppercase tracking-[0.3em] mb-3 text-sm">The Journey</p>
            <h2 className="section-title text-white text-center">
              Our <span className="text-gradient">Milestones</span>
            </h2>
            <p className="section-subtitle mb-0">12 years of growth, grit, and thousands of transformations.</p>
          </div>

          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-amber via-amber/50 to-amber"></div>

            {milestones.map((m, idx) => (
              <div key={idx} className={`relative flex items-center mb-10 ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 bg-amber rounded-full shadow-amber-sm border-4 border-dark-card z-10"></div>
                
                <div className={`w-full md:w-1/2 pl-14 md:pl-0 ${idx % 2 === 0 ? 'md:pr-10' : 'md:pl-10'}`}>
                  <div className="card-glow p-5">
                    <div className="font-display text-3xl font-bold amber-text mb-1">{m.year}</div>
                    <h3 className="font-display text-xl font-bold uppercase text-white mb-1.5 tracking-wider">{m.title}</h3>
                    <p className="text-gray-400 leading-relaxed text-sm">{m.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FACILITIES / SIZE */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-amber-light font-semibold uppercase tracking-[0.3em] mb-3 text-sm">25,000 Sq. Ft. Facility</p>
            <h2 className="section-title text-white text-center">
              Explore Our <span className="text-gradient">Space</span>
            </h2>
            <p className="section-subtitle mb-0">Every square foot designed to optimize your training experience.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {facilities.map((f, idx) => (
              <div key={idx} className="card-glow p-4 flex items-start gap-3 group">
                <div className="w-11 h-11 bg-dark-bg border border-dark-border rounded-lg flex items-center justify-center text-2xl flex-shrink-0
                              group-hover:border-amber group-hover:shadow-amber-sm transition-all duration-300">
                  {f.icon}
                </div>
                <div>
                  <h3 className="text-white font-bold uppercase tracking-wide mb-0.5 text-sm">{f.name}</h3>
                  <p className="text-amber-light font-semibold text-xs">{f.size}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="py-16 bg-dark-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-amber-light font-semibold uppercase tracking-[0.3em] mb-3 text-sm">Leadership</p>
            <h2 className="section-title text-white text-center">
              The Team Behind <span className="text-gradient">Hub</span>
            </h2>
            <p className="section-subtitle mb-0">Certified experts with decades of combined experience.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {team.map((m, idx) => (
              <div key={idx} className="card-glow overflow-hidden group">
                <div className="relative overflow-hidden">
                  <img src={m.img} alt={m.name} className="w-full h-64 object-cover object-top transition-transform duration-700 group-hover:scale-110"/>
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-card via-transparent to-transparent"></div>
                  {idx === 0 && (
                    <div className="absolute top-3 left-3 bg-amber text-white px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-amber-sm">
                      CEO
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="font-display text-lg font-bold uppercase text-white tracking-wider mb-0.5">{m.name}</h3>
                  <p className="text-amber-light text-xs font-semibold uppercase tracking-wide mb-2">{m.role}</p>
                  <p className="text-gray-400 text-xs leading-relaxed">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-amber/15 via-amber/5 to-amber/15"></div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          <h2 className="font-display text-3xl md:text-5xl font-bold uppercase text-white mb-5">
            Be Part Of Our <span className="animate-glow-amber">Story</span>
          </h2>
          <p className="text-gray-300 text-lg mb-7 max-w-2xl mx-auto">
            Join the Fitness Hub family today and write your own success story. We can't wait to meet you.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/booking" className="btn-primary animate-pulse-amber">Book Free Trial</Link>
            <Link to="/contact" className="btn-secondary">Get In Touch</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
