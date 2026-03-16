import MainLayout from "@/layouts/MainLayout";
import BrutalCard from "@/components/BrutalCard";

const Contact = () => {
  return (
    <MainLayout>
      <div className="p-4 md:p-8 lg:p-12">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-8">
            Contact.
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <BrutalCard delay={0}>
              <h2 className="text-xl font-black uppercase mb-4">Get in Touch</h2>
              <p className="text-sm font-medium mb-6">
                Interested in working together or have a project in mind? Drop me a message.
              </p>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="text-[10px] font-bold uppercase tracking-widest block mb-1">Name</label>
                  <input
                    type="text"
                    className="w-full border-[2px] border-foreground bg-card px-4 py-2 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-accent-blue"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="text-[10px] font-bold uppercase tracking-widest block mb-1">Email</label>
                  <input
                    type="email"
                    className="w-full border-[2px] border-foreground bg-card px-4 py-2 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-accent-blue"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="text-[10px] font-bold uppercase tracking-widest block mb-1">Message</label>
                  <textarea
                    rows={4}
                    className="w-full border-[2px] border-foreground bg-card px-4 py-2 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-accent-blue resize-none"
                    placeholder="Your message..."
                  />
                </div>
                <button
                  type="submit"
                  className="brutal-card-yellow border-[2px] border-foreground px-6 py-2 text-xs font-black uppercase tracking-wide"
                >
                  Send Message ↗
                </button>
              </form>
            </BrutalCard>

            <BrutalCard variant="blue" delay={0.1}>
              <h2 className="text-xl font-black uppercase mb-4">Links</h2>
              <div className="space-y-4">
                {[
                  { label: "LinkedIn", url: "#" },
                  { label: "GitHub", url: "#" },
                  { label: "Dribbble", url: "#" },
                  { label: "Email", url: "mailto:hello@vshrestha.com" },
                ].map((link) => (
                  <a
                    key={link.label}
                    href={link.url}
                    className="block border-[2px] border-current px-4 py-3 text-sm font-black uppercase tracking-wide hover:translate-x-1 transition-transform"
                  >
                    {link.label} →
                  </a>
                ))}
              </div>
            </BrutalCard>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Contact;
