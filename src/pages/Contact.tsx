import MainLayout from "@/layouts/MainLayout";
import BrutalCard from "@/components/BrutalCard";
import Marquee from "@/components/Marquee";
import { motion } from "framer-motion";
import { useState } from "react";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  return (
    <MainLayout>
      <Marquee items={["Get In Touch", "Let's Collaborate", "Say Hello", "Hire Me"]} />
      <div className="p-4 md:p-8 lg:p-12">
        <div className="max-w-7xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl lg:text-9xl font-black uppercase tracking-[-0.04em] font-display leading-[0.85] mb-12"
          >
            Let's<br />
            <span style={{ WebkitTextStroke: '3px hsl(var(--foreground))', color: 'transparent' }}>
              Talk.
            </span>
          </motion.h1>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-5">
            {/* Form */}
            <BrutalCard delay={0} className="md:col-span-3">
              {submitted ? (
                <div className="py-12 text-center">
                  <span className="text-5xl mb-4 block">✅</span>
                  <h2 className="text-xl font-black uppercase font-display mb-2">Message Sent!</h2>
                  <p className="text-sm text-muted-foreground">I'll get back to you soon.</p>
                </div>
              ) : (
                <>
                  <h2 className="text-sm font-black uppercase tracking-wider font-display mb-6">Send a Message</h2>
                  <form className="space-y-5" onSubmit={async (e) => { 
                    e.preventDefault(); 
                    setLoading(true);
                    // Simulate API call
                    await new Promise(resolve => setTimeout(resolve, 2000));
                    setLoading(false);
                    setSubmitted(true); 
                  }}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-[10px] font-bold uppercase tracking-[0.2em] font-display block mb-2 text-muted-foreground">Name</label>
                        <input
                          type="text"
                          required
                          className="w-full border-[3px] border-foreground bg-card px-4 py-3 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-accent"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label className="text-[10px] font-bold uppercase tracking-[0.2em] font-display block mb-2 text-muted-foreground">Email</label>
                        <input
                          type="email"
                          required
                          className="w-full border-[3px] border-foreground bg-card px-4 py-3 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-accent"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="text-[10px] font-bold uppercase tracking-[0.2em] font-display block mb-2 text-muted-foreground">Subject</label>
                      <input
                        type="text"
                        className="w-full border-[3px] border-foreground bg-card px-4 py-3 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-accent"
                        placeholder="Project inquiry"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] font-bold uppercase tracking-[0.2em] font-display block mb-2 text-muted-foreground">Message</label>
                      <textarea
                        rows={5}
                        required
                        className="w-full border-[3px] border-foreground bg-card px-4 py-3 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-accent resize-none"
                        placeholder="Tell me about your project..."
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={loading}
                      className="border-[3px] border-foreground px-8 py-3 text-xs font-black uppercase tracking-wider font-display hover:translate-x-1 hover:translate-y-1 transition-transform disabled:opacity-50 disabled:cursor-not-allowed"
                      style={{ backgroundColor: 'hsl(var(--accent-yellow))' }}
                    >
                      {loading ? 'Sending...' : 'Send Message ↗'}
                    </button>
                  </form>
                </>
              )}
            </BrutalCard>

            {/* Side info */}
            <div className="md:col-span-2 space-y-5">
              <BrutalCard variant="blue" delay={0.1}>
                <h2 className="text-sm font-black uppercase tracking-wider font-display mb-5">Quick Links</h2>
                <div className="space-y-2">
                  {[
                    { label: "LinkedIn", url: "#", icon: "💼" },
                    { label: "GitHub", url: "#", icon: "🐙" },
                    { label: "Dribbble", url: "#", icon: "🏀" },
                    { label: "Email", url: "mailto:hello@vshrestha.com", icon: "📧" },
                  ].map((link) => (
                    <a
                      key={link.label}
                      href={link.url}
                      className="flex items-center gap-3 border-[2px] border-current px-4 py-3 text-sm font-bold uppercase tracking-wider font-display hover:translate-x-1 transition-transform"
                    >
                      <span>{link.icon}</span>
                      {link.label} →
                    </a>
                  ))}
                </div>
              </BrutalCard>

              <BrutalCard variant="yellow" delay={0.2}>
                <h2 className="text-sm font-black uppercase tracking-wider font-display mb-3">Availability</h2>
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-3 h-3 rounded-full animate-pulse" style={{ backgroundColor: 'hsl(var(--accent-green))' }} />
                  <span className="text-xs font-bold uppercase font-display">Open to work</span>
                </div>
                <p className="text-xs font-medium leading-relaxed">
                  Currently accepting freelance projects, internship opportunities, and collaboration requests.
                </p>
              </BrutalCard>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Contact;
