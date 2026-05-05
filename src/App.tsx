import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Droplets, 
  Sparkles, 
  ShieldCheck, 
  Clock, 
  Phone, 
  Mail, 
  MapPin, 
  ArrowRight, 
  Menu, 
  X,
  Star,
  Quote,
  ChevronDown
} from 'lucide-react';

// --- Constants ---
const CONTACT = {
  phone: "551-815-2143",
  email: "haganjack02@gmail.com",
  location: "Midland Park, NJ"
};

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-dark/80 backdrop-blur-xl py-4 border-b border-white/5' : 'bg-transparent py-8'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-brand rounded-xl flex items-center justify-center shadow-lg shadow-brand/20">
            <Droplets className="text-white" size={24} />
          </div>
          <div className="leading-none">
            <span className="block font-display font-bold text-xl tracking-tight uppercase">Dirty Works</span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-brand font-bold">Window Washing</span>
          </div>
        </div>

        <div className="hidden lg:flex items-center gap-8">
          {['Experience', 'Services', 'Process', 'Reviews'].map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`} className="text-sm font-medium text-white/70 hover:text-brand transition-colors">
              {link}
            </a>
          ))}
          <a href={`tel:${CONTACT.phone}`} className="btn-primary">
            <Phone size={18} />
            Free Estimate
          </a>
        </div>

        <button className="lg:hidden text-white p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-dark border-b border-white/10 overflow-hidden"
          >
            <div className="p-8 flex flex-col gap-6">
              {['Experience', 'Services', 'Process', 'Reviews'].map((link) => (
                <a key={link} href={`#${link.toLowerCase()}`} className="text-2xl font-display font-bold" onClick={() => setIsMenuOpen(false)}>
                  {link}
                </a>
              ))}
              <hr className="border-white/5" />
              <div className="flex flex-col gap-4">
                <a href={`tel:${CONTACT.phone}`} className="flex items-center gap-3 text-brand font-bold">
                  <Phone size={20} /> {CONTACT.phone}
                </a>
                <a href={`mailto:${CONTACT.email}`} className="flex items-center gap-3 text-white/50">
                  <Mail size={20} /> {CONTACT.email}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand/10 blur-[150px] rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand/5 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/2" />
        <img 
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=2070" 
          alt="Luxury Home Exterior"
          className="w-full h-full object-cover opacity-30 grayscale brightness-50"
          referrerPolicy="no-referrer"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           animate={{ opacity: 1, scale: 1 }}
           className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full mb-8"
        >
          <Sparkles className="text-brand" size={16} />
          <span className="text-xs font-bold uppercase tracking-widest text-brand">Residential Exterior Experts</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-6xl md:text-[7rem] font-display font-extrabold leading-[0.85] mb-8 tracking-tighter"
        >
          DIRTY <br />
          <span className="text-gradient">WORKS.</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl md:text-2xl text-white/50 max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Specialized exterior window washing for Midland Park's finest homes. Over 3 years of delivering the streak-free shine your property deserves.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a href={`tel:${CONTACT.phone}`} className="btn-primary py-5 px-12 text-lg">
            Book Now <ArrowRight size={20} />
          </a>
          <button className="btn-secondary py-5 px-12 text-lg">
            View Our Work
          </button>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-20 flex justify-center animate-bounce"
        >
          <ChevronDown className="text-white/20" size={32} />
        </motion.div>
      </div>
    </section>
  );
};

const ExperiencePanel = () => {
  return (
    <section id="experience" className="py-24 relative z-10 -mt-20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="glass-card flex items-start gap-6">
          <div className="w-14 h-14 rounded-2xl bg-brand/20 flex flex-shrink-0 items-center justify-center text-brand">
            <Clock size={32} />
          </div>
          <div>
            <h3 className="text-2xl mb-2">3+ Years</h3>
            <p className="text-white/40 text-sm">Professional expertise in glass restoration and maintenance.</p>
          </div>
        </div>

        <div className="glass-card flex items-start gap-6">
          <div className="w-14 h-14 rounded-2xl bg-brand/20 flex flex-shrink-0 items-center justify-center text-brand">
            <ShieldCheck size={32} />
          </div>
          <div>
            <h3 className="text-2xl mb-2">Midland Park Local</h3>
            <p className="text-white/40 text-sm">Fully insured and rooted in the heart of our community.</p>
          </div>
        </div>

        <div className="glass-card flex items-start gap-6">
          <div className="w-14 h-14 rounded-2xl bg-brand/20 flex flex-shrink-0 items-center justify-center text-brand">
            <Star size={32} />
          </div>
          <div>
            <h3 className="text-2xl mb-2">5-Star Standard</h3>
            <p className="text-white/40 text-sm">Every pane is inspected twice. Zero streaks, guaranteed.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const list = [
    { title: "Exterior Detailing", desc: "Premium hand-finished exterior cleaning for residential estates.", icon: <Sparkles size={32} /> },
    { title: "Pure Water Tech", desc: "Chemical-free deionized water system for a streak-free exterior finish.", icon: <Droplets size={32} /> },
    { title: "Hard Water Removal", desc: "Specialized treatment for mineral deposits on outside glass surfaces.", icon: <ShieldCheck size={32} /> }
  ];

  return (
    <section id="services" className="py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <span className="text-brand font-bold uppercase tracking-widest text-sm mb-4 block">Our Operations</span>
            <h2 className="text-5xl md:text-7xl mb-12 uppercase leading-none font-extrabold">Exterior <br />Residence <br /><span className="text-brand">Specialists.</span></h2>
            <div className="space-y-10">
              {list.map((s, i) => (
                <div key={i} className="flex gap-8 group">
                  <div className="text-brand/50 group-hover:text-brand transition-colors transform group-hover:scale-110 duration-300">
                    {s.icon}
                  </div>
                  <div>
                    <h4 className="text-2xl mb-2">{s.title}</h4>
                    <p className="text-white/40 max-w-sm">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-12">
               <a href={`tel:${CONTACT.phone}`} className="btn-secondary w-fit inline-flex">
                 Consult Jack <ArrowRight size={18} />
               </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-brand/20 blur-3xl opacity-30 rounded-full" />
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="relative rounded-[40px] overflow-hidden aspect-[4/5] border border-white/10"
            >
               <img 
                 src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80&w=1200" 
                 alt="Residential Window Detail"
                 className="w-full h-full object-cover"
                 referrerPolicy="no-referrer"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent" />
               <div className="absolute bottom-10 left-10 right-10">
                  <div className="glass-card py-6 flex items-center justify-between">
                     <div>
                        <p className="text-xs font-bold text-brand uppercase tracking-widest mb-1">Service Goal</p>
                        <p className="text-lg font-display">Flawless Exterior Views</p>
                     </div>
                     <Droplets className="text-brand" size={40} />
                  </div>
               </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Process = () => {
  const steps = [
    { title: "Consultation", desc: "On-site assessment of your home's exterior glass and window frames." },
    { title: "Filtration", desc: "Preparation of multi-stage deionized water for a streak-free drying." },
    { title: "Exterior Wash", desc: "Safe agitation and pure-water rinse for all outside window surfaces." },
    { title: "Final Buff", desc: "Detailing of frames and sill to ensure perfection before we leave." }
  ];

  return (
    <section id="process" className="py-32 bg-white/5 border-y border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl mb-6">THE <span className="text-gradient">OUTSIDE</span> EDGE</h2>
          <p className="text-white/40 max-w-xl mx-auto">Engineered clarity for residential homes in Midland Park.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map((step, i) => (
            <div key={i} className="relative p-10 border border-white/5 group hover:bg-white/5 transition-all duration-300">
               <span className="text-[120px] font-display font-black text-white/5 absolute -top-10 -left-4 group-hover:text-brand/10 transition-colors">{i+1}</span>
               <div className="relative z-10 transition-transform group-hover:translate-x-2">
                 <h4 className="text-2xl mb-4 font-bold tracking-tight">{step.title}</h4>
                 <p className="text-white/40 text-sm">{step.desc}</p>
               </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Reviews = () => {
  const testimonials = [
    { name: "Rebecca H.", role: "Homeowner", text: "Jack and his partner are awesome, he did an amazing job with low prices. Our windows look amazing." },
    { name: "Lemuel T.", role: "Local Resident", text: "Jack and his partner are amazing, they did my windows in the area, and they look great." },
    { name: "Mark W.", role: "Customer", text: "Jack and his partner did an excellent job on my windows. They charged me at a low price and did great work, they may be young, but they really know what they are doing." }
  ];

  return (
    <section id="reviews" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div>
            <h2 className="text-5xl md:text-7xl font-display uppercase tracking-tighter">CLIENT <br /><span className="text-brand">VOICE.</span></h2>
          </div>
          <div className="flex items-center gap-4 bg-brand/10 px-6 py-4 rounded-full border border-brand/20">
             <div className="flex gap-1">
                {[1,2,3,4,5].map(s => <Star key={s} size={20} fill="#3B82F6" className="text-brand" />)}
             </div>
             <span className="font-bold">4.9/5 Average</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="glass-card relative"
            >
              <Quote className="text-brand/20 absolute bottom-8 right-8" size={60} />
              <p className="text-xl text-white/80 mb-10 leading-relaxed italic">"{t.text}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center font-bold text-brand uppercase text-sm">
                  {t.name[0]}
                </div>
                <div>
                  <p className="font-bold text-lg">{t.name}</p>
                  <p className="text-xs uppercase tracking-widest text-brand font-bold">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CTA = () => {
  return (
    <section className="py-40 bg-dark relative overflow-hidden flex items-center justify-center px-6">
       <div className="absolute inset-0 opacity-10 blur-3xl">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand rounded-full" />
       </div>
       
       <div className="relative z-10 text-center max-w-4xl">
          <h2 className="text-6xl md:text-[8rem] font-display font-extrabold mb-12 tracking-tighter leading-none">READY FOR <br /><span className="text-gradient">PERFECTION?</span></h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
             <a href={`tel:${CONTACT.phone}`} className="btn-primary py-6 px-16 text-xl">
               Call {CONTACT.phone}
             </a>
             <a href={`mailto:${CONTACT.email}`} className="btn-secondary py-6 px-16 text-xl">
               Email Jack
             </a>
          </div>
          <p className="mt-10 text-white/30 uppercase tracking-[0.3em] font-bold text-sm">Serving Midland Park & Surrounding Areas</p>
       </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-dark pt-24 pb-12 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-brand rounded-xl flex items-center justify-center">
              <Droplets className="text-white" size={24} />
            </div>
            <div className="leading-none">
              <span className="block font-display font-bold text-2xl tracking-tight uppercase">Dirty Works</span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-brand font-bold">Window Washing</span>
            </div>
          </div>
          <p className="text-white/40 max-w-md text-lg leading-relaxed mb-8">
            Premium clarity for the selective property owner. We specialize in the science of clean, ensuring your view is never compromised by streaks or grime.
          </p>
          <div className="flex gap-6">
            {['Instagram', 'Facebook', 'LinkedIn'].map(s => (
              <a key={s} href="#" className="font-bold text-xs uppercase tracking-widest text-white/60 hover:text-brand transition-colors">{s}</a>
            ))}
          </div>
        </div>

        <div>
          <h5 className="font-display text-xl text-white mb-8 uppercase tracking-widest font-bold">Location</h5>
          <div className="space-y-4 text-white/40">
             <div className="flex items-start gap-3">
                <MapPin className="text-brand shrink-0" size={20} />
                <p>Midland Park, NJ</p>
             </div>
             <p className="text-xs mt-4">Proudly serving Bergen County.</p>
          </div>
        </div>

        <div>
          <h5 className="font-display text-xl text-white mb-8 uppercase tracking-widest font-bold">Contact</h5>
          <div className="space-y-4">
             <a href={`tel:${CONTACT.phone}`} className="flex items-center gap-3 text-white/40 hover:text-brand transition-colors">
                <Phone className="text-brand shrink-0" size={20} />
                {CONTACT.phone}
             </a>
             <a href={`mailto:${CONTACT.email}`} className="flex items-center gap-3 text-white/40 hover:text-brand transition-colors">
                <Mail className="text-brand shrink-0" size={20} />
                {CONTACT.email}
             </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-widest text-white/20 font-bold">
        <p>© 2024 Dirty Works Window Washing. Licensed & Insured.</p>
        <div className="flex gap-8">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-dark overflow-x-hidden selection:bg-brand selection:text-white">
      <Navbar />
      
      <main>
        <Hero />
        <ExperiencePanel />
        <Services />
        <Process />
        <Reviews />
        <CTA />
      </main>

      <Footer />
    </div>
  );
}
