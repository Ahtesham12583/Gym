import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!formData.name.trim()) e.name = 'Name is required';
    if (!formData.email.trim()) e.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) e.email = 'Enter a valid email';
    if (!formData.phone.trim()) e.phone = 'Phone is required';
    if (!formData.subject.trim()) e.subject = 'Subject is required';
    if (!formData.message.trim()) e.message = 'Message is required';
    else if (formData.message.trim().length < 10) e.message = 'Message should be at least 10 characters';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const submit = (e) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    }
  };

  const change = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) setErrors({ ...errors, [e.target.name]: '' });
  };

  const contactCards = [
    { icon: '📍', title: 'Visit Our Gym', lines: ['123 Fitness Street,', 'Downtown, Main City,', 'Postal Code 54000'], glow: 'shadow-amber' },
    { icon: '📞', title: 'Call Us', lines: ['+92 300 1234567 (Main)', '+92 301 9876543 (Support)', 'WhatsApp: +92 300 1234567'], glow: 'shadow-amber' },
    { icon: '✉️', title: 'Email Us', lines: ['info@fitnesshub.com', 'support@fitnesshub.com', 'ceo@fitnesshub.com'], glow: 'shadow-amber' },
    { icon: '⏰', title: 'Opening Hours', lines: ['Monday - Sunday: 24/7', 'Reception Desk: 5AM - 12AM', 'Trainers: 6AM - 10PM'], glow: 'shadow-amber' },
  ];

  const departments = [
    { name: 'General Inquiries', email: 'info@fitnesshub.com', response: 'Response within 24 hours' },
    { name: 'Membership Support', email: 'members@fitnesshub.com', response: 'Response within 12 hours' },
    { name: 'Corporate / Group Packages', email: 'corporate@fitnesshub.com', response: 'Response within 48 hours' },
    { name: "CEO's Office (Ahtesham Azhar)", email: 'ceo@fitnesshub.com', response: 'Response within 3-5 business days' },
  ];

  const socials = [
    { label: 'Facebook', handle: '@fitnesshubofficial'},
    { label: 'Instagram', handle: '@fitnesshub'},
    { label: 'YouTube', handle: 'Fitness Hub'},
    { label: 'LinkedIn', handle: 'Fitness Hub Pvt Ltd'},
    { label: 'TikTok', handle: '@fitnesshubpk'},
    { label: 'Twitter/X', handle: '@fitnesshub'},
  ];

  return (
    <div className="bg-dark-bg pt-20">
      {/* HEADER */}
      <section className="relative py-20 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-25"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[400px] bg-amber/15 blur-[120px] rounded-full"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          <p className="text-amber-light font-semibold uppercase tracking-[0.3em] mb-4">Get In Touch</p>
          <h1 className="font-display text-5xl md:text-7xl font-bold uppercase text-white mb-6">
            Contact <span className="animate-glow-amber">Us</span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Questions? Feedback? Partnership inquiries? We'd love to hear from you. Reach out through any channel below and our team will get back promptly.
          </p>
        </div>
      </section>

      {/* CONTACT CARDS */}
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {contactCards.map((c, i) => (
              <div key={i} className={`card-glow p-8 text-center group`}>
                <div className={`w-16 h-16 mx-auto bg-amber/10 border-2 border-amber/30 rounded-2xl flex items-center justify-center text-4xl mb-5
                              group-hover:shadow-amber group-hover:border-amber transition-all duration-500`}>
                  {c.icon}
                </div>
                <h3 className="font-display text-xl font-bold uppercase text-white mb-4 tracking-wider">{c.title}</h3>
                {c.lines.map((line, j) => (
                  <p key={j} className="text-gray-400 text-sm leading-relaxed">{line}</p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FORM + MAP */}
      <section className="py-16 bg-dark-card relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-15"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-5 gap-10">
            {/* FORM */}
            <div className="lg:col-span-3">
              <div className="card-glow p-8 md:p-10 shadow-amber-sm border-amber/30">
                <div className="mb-8">
                  <p className="text-amber-light font-semibold uppercase tracking-[0.3em] mb-2 text-sm">Send Message</p>
                  <h2 className="font-display text-3xl md:text-4xl font-bold uppercase text-white tracking-wider">
                    Drop Us A <span className="text-gradient">Line</span>
                  </h2>
                </div>

                {submitted && (
                  <div className="mb-8 bg-amber/10 border border-amber rounded-xl p-5 flex items-center gap-4 animate-pulse-amber">
                    <div className="w-10 h-10 bg-amber rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7"/></svg>
                    </div>
                    <div>
                      <p className="text-white font-bold">Message sent successfully!</p>
                      <p className="text-gray-400 text-sm">Our team will reach out to you within 24 hours.</p>
                    </div>
                  </div>
                )}

                <form onSubmit={submit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="form-label">Your Name *</label>
                      <input type="text" name="name" value={formData.name} onChange={change}
                             placeholder="John Doe" className={`input-field ${errors.name ? 'border-amber' : ''}`}/>
                      {errors.name && <p className="text-amber-light text-sm mt-2">⚠ {errors.name}</p>}
                    </div>
                    <div>
                      <label className="form-label">Email Address *</label>
                      <input type="email" name="email" value={formData.email} onChange={change}
                             placeholder="you@example.com" className={`input-field ${errors.email ? 'border-amber' : ''}`}/>
                      {errors.email && <p className="text-amber-light text-sm mt-2">⚠ {errors.email}</p>}
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="form-label">Phone Number *</label>
                      <input type="tel" name="phone" value={formData.phone} onChange={change}
                             placeholder="+92 300 1234567" className={`input-field ${errors.phone ? 'border-amber' : ''}`}/>
                      {errors.phone && <p className="text-amber-light text-sm mt-2">⚠ {errors.phone}</p>}
                    </div>
                    <div>
                      <label className="form-label">Subject *</label>
                      <select name="subject" value={formData.subject} onChange={change}
                              className={`input-field appearance-none cursor-pointer ${errors.subject ? 'border-amber' : ''}`}>
                        <option value="" className="bg-dark-card">Select a subject</option>
                        <option className="bg-dark-card">Membership Inquiry</option>
                        <option className="bg-dark-card">Trial Session</option>
                        <option className="bg-dark-card">Personal Training</option>
                        <option className="bg-dark-card">Corporate Package</option>
                        <option className="bg-dark-card">General Feedback</option>
                        <option className="bg-dark-card">Partnership Proposal</option>
                        <option className="bg-dark-card">Other</option>
                      </select>
                      {errors.subject && <p className="text-amber-light text-sm mt-2">⚠ {errors.subject}</p>}
                    </div>
                  </div>
                  <div>
                    <label className="form-label">Your Message *</label>
                    <textarea name="message" rows="6" value={formData.message} onChange={change}
                              placeholder="Tell us how we can help you today..."
                              className={`input-field resize-none ${errors.message ? 'border-amber' : ''}`}></textarea>
                    {errors.message && <p className="text-amber-light text-sm mt-2">⚠ {errors.message}</p>}
                  </div>
                  <button type="submit" className="btn-primary animate-pulse-amber !w-full md:!w-auto md:!min-w-[250px]">
                    Send Message →
                  </button>
                </form>
              </div>
            </div>

            {/* DEPARTMENTS + MAP */}
            <div className="lg:col-span-2 space-y-8">
              <div className="card-glow p-8">
                <h3 className="font-display text-2xl font-bold uppercase text-white mb-6 tracking-wider
                              border-l-4 border-amber pl-4">
                  Reach Specific Departments
                </h3>
                <div className="space-y-4">
                  {departments.map((d, i) => (
                    <div key={i} className="bg-dark-bg border border-dark-border rounded-xl p-5 hover:border-amber/50 transition-colors">
                      <p className="text-white font-bold mb-1">{d.name}</p>
                      <p className="text-amber-light font-medium text-sm mb-1">{d.email}</p>
                      <p className="text-gray-500 text-xs uppercase tracking-wide">{d.response}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="card-glow p-4 overflow-hidden">
                <div className="relative w-full h-80 rounded-lg overflow-hidden bg-dark-bg">
                  <img 
                    src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=600&h=400&fit=crop"
                    alt="Location Map"
                    className="w-full h-full object-cover opacity-50"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-transparent to-transparent"></div>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                    <div className="relative">
                      <div className="absolute inset-0 bg-amber rounded-full animate-ping opacity-75"></div>
                      <svg className="w-12 h-12 text-amber-light relative" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                      </svg>
                    </div>
                    <p className="text-white font-bold mt-3 bg-dark-bg/90 backdrop-blur px-4 py-2 rounded-lg text-sm">
                      Fitness Hub HQ
                    </p>
                  </div>
                </div>
                <div className="flex justify-between items-center p-4 pt-5">
                  <div>
                    <p className="text-white font-bold">Fitness Hub — Main Branch</p>
                    <p className="text-gray-500 text-sm">123 Fitness Street, Downtown</p>
                  </div>
                  <a href="https://maps.google.com" target="_blank" rel="noreferrer"
                     className="text-amber-light text-sm font-bold uppercase tracking-wide hover:underline">
                    Open Maps →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SOCIAL + COMMUNITY */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-amber-light font-semibold uppercase tracking-[0.3em] mb-4">Join The Community</p>
            <h2 className="section-title text-white text-center">
              Follow Our <span className="text-gradient">Journey</span>
            </h2>
            <p className="section-subtitle">
              Daily fitness tips, transformation stories, workout reels and behind-the-scenes action from the Hub.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
            {socials.map((s, i) => (
              <a key={i} href="#" className={`card-glow p-6 flex items-center gap-5 group ${s.color}`}>
                <div className="w-14 h-14 bg-dark-bg border-2 border-dark-border rounded-xl flex items-center justify-center
                              text-white font-bold uppercase tracking-wider
                              group-hover:border-amber group-hover:shadow-amber-sm transition-all duration-300">
                  {s.label.slice(0,2)}
                </div>
                <div className="flex-grow">
                  <p className="text-white font-bold uppercase tracking-wide">{s.label}</p>
                  <p className="text-gray-400 text-sm">{s.handle}</p>
                </div>
                <span className="text-amber-light text-2xl opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300">→</span>
              </a>
            ))}
          </div>

          <div className="relative card-glow overflow-hidden p-10 md:p-14 text-center bg-gradient-to-br from-neon-red/10 via-dark-card to-dark-bg">
            <div className="absolute -top-10 -right-10 w-60 h-60 bg-amber/20 rounded-full blur-3xl"></div>
            <div className="relative">
              <div className="text-5xl mb-6">💬</div>
              <h3 className="font-display text-3xl md:text-4xl font-bold uppercase text-white mb-4 tracking-wider">
                Still Have <span className="animate-glow-amber">Questions?</span>
              </h3>
              <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
                WhatsApp us directly for instant replies during business hours. Our support team is online and ready to help!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="https://wa.me/923001234567" target="_blank" rel="noreferrer" className="btn-primary animate-pulse-amber inline-flex items-center justify-center gap-3">
                  <span className="text-xl">💬</span> WhatsApp Us Now
                </a>
                <a href="tel:+923001234567" className="btn-secondary inline-flex items-center justify-center gap-3">
                  <span className="text-xl">📞</span> Call Us Directly
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
