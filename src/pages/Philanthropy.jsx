import Footer from '../components/Footer';
import SEO from '../components/SEO';

const Philanthropy = () => {
  return (
    <div className="min-h-screen pt-20">
      <SEO
        title="Jagmal Philanthropy | Community Support & Relief"
        description="Read about Jagmal Group's philanthropy efforts and community support initiatives."
        path="/philanthropy"
      />
      {/* Hero Banner */}
      <section
        className="relative h-[60vh] flex items-center justify-center overflow-hidden"
        data-testid="philanthropy-hero-section"
      >
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url('/images/corporate-abstract.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-slate-950/80"></div>
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1
            className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight leading-none"
            style={{ fontFamily: 'Playfair Display, serif' }}
            data-testid="philanthropy-page-heading"
          >
            <span className="text-[#d4af37]">Philanthropy</span>
          </h1>
          <p
            className="text-xl md:text-2xl text-slate-200 leading-relaxed"
            style={{ fontFamily: 'Manrope, sans-serif' }}
          >
            Building What Endures Through Community Support & Relief
          </p>
        </div>
      </section>

      {/* Arail Tent City Section */}
      <section className="py-20 md:py-24 bg-slate-950" data-testid="arail-section">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-[#d4af37] mb-4 font-medium">Mahakumbh 2025</p>
              <h2
                className="text-4xl md:text-5xl font-semibold text-white mb-6 tracking-tight"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Arail Tent City Kumbh Cottage
              </h2>
              <p
                className="text-lg text-slate-300 leading-relaxed mb-6"
                style={{ fontFamily: 'Manrope, sans-serif' }}
              >
                In an unprecedented feat of determination, we constructed the world's largest temporary tent city of 750 cottages from scratch in just 15 days.
              </p>              <p
                className="text-lg text-slate-300 leading-relaxed mb-6"
                style={{ fontFamily: 'Manrope, sans-serif' }}
              >
                Strategically situated just 5 kilometers from Sangam, the tent city provided convenient access to the sacred confluence while maintaining a peaceful, organized environment for pilgrims.
              </p>              <p
                className="text-lg text-slate-300 leading-relaxed mb-6"
                style={{ fontFamily: 'Manrope, sans-serif' }}
              >
                During Mahakumbh 2025, Jagmal Group established the Arail Tent City Kumbh Cottage — a temporary tent city of 750 cottages that provided shelter, meals, sanitation and first-aid support to over 80,000 pilgrims. The initiative was coordinated with local authorities and volunteers to deliver safe, dignified accommodation and essential services at scale.
              </p>
              <p
                className="text-lg text-slate-300 leading-relaxed mb-6"
                style={{ fontFamily: 'Manrope, sans-serif' }}
              >
                This effort reflects the Group's commitment to community wellbeing and emergency support, mobilizing resources quickly to assist large public gatherings and vulnerable populations. Every pilgrim received:
              </p>
              <ul className="text-lg text-slate-300 leading-relaxed space-y-2 mb-6" style={{ fontFamily: 'Manrope, sans-serif' }}>
                <li className="flex items-start gap-3">
                  <span className="text-[#d4af37] mt-1">✓</span>
                  <span>Safe, dignified accommodation in 750 cottages</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#d4af37] mt-1">✓</span>
                  <span>Regular meals and sanitation facilities</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#d4af37] mt-1">✓</span>
                  <span>First-aid and medical support</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#d4af37] mt-1">✓</span>
                  <span>Coordination with local authorities and volunteers</span>
                </li>
              </ul>
            </div>
            <div className="relative">
              <div className="space-y-4">
                <div>
                  <img src="/images/kumbh.webp" alt="Mahakumbh 2025 - Largest Human Gathering" className="rounded-xl w-full h-64 object-cover shadow-xl" />
                  <p className="text-sm text-[#d4af37] mt-3 text-center font-medium uppercase tracking-wide">Mahakumbh 2025 — The Largest Human Gathering on Earth</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <img src="/images/Arail.jpeg" alt="Arail Tent City Kumbh Cottage 1" className="rounded-xl w-full h-56 object-cover shadow-xl" />
                  <img src="/images/ArailT.jpeg" alt="Arail Tent City Kumbh Cottage 2" className="rounded-xl w-full h-56 object-cover shadow-xl" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Commitment Section */}
      <section className="py-20 md:py-24 bg-slate-900" data-testid="commitment-section">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <div className="text-center mb-12">
            <h2
              className="text-4xl md:text-5xl font-semibold text-white mb-6 tracking-tight"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Our Commitment to Community
            </h2>
            <p
              className="text-lg text-slate-300 leading-relaxed max-w-3xl mx-auto"
              style={{ fontFamily: 'Manrope, sans-serif' }}
            >
              Jagmal Group believes in giving back to the communities we serve. Through strategic philanthropy and emergency relief efforts, we aim to create lasting positive impact.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="p-8 rounded-xl bg-slate-950 border border-slate-800">
              <div className="w-12 h-12 rounded-full bg-[#d4af37]/10 flex items-center justify-center text-[#d4af37] font-bold text-lg mb-4">1</div>
              <h3 className="text-xl font-semibold text-white mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>
                Quick Response
              </h3>
              <p className="text-slate-300 leading-relaxed" style={{ fontFamily: 'Manrope, sans-serif' }}>
                We mobilize resources rapidly during emergencies and large public events to provide essential support and services.
              </p>
            </div>
            <div className="p-8 rounded-xl bg-slate-950 border border-slate-800">
              <div className="w-12 h-12 rounded-full bg-[#d4af37]/10 flex items-center justify-center text-[#d4af37] font-bold text-lg mb-4">2</div>
              <h3 className="text-xl font-semibold text-white mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>
                Dignity First
              </h3>
              <p className="text-slate-300 leading-relaxed" style={{ fontFamily: 'Manrope, sans-serif' }}>
                Every initiative ensures safe, dignified treatment of beneficiaries with quality infrastructure and care.
              </p>
            </div>
            <div className="p-8 rounded-xl bg-slate-950 border border-slate-800">
              <div className="w-12 h-12 rounded-full bg-[#d4af37]/10 flex items-center justify-center text-[#d4af37] font-bold text-lg mb-4">3</div>
              <h3 className="text-xl font-semibold text-white mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>
                Scale & Impact
              </h3>
              <p className="text-slate-300 leading-relaxed" style={{ fontFamily: 'Manrope, sans-serif' }}>
                Leveraging our infrastructure expertise to support large-scale community projects and public gatherings.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Philanthropy;
