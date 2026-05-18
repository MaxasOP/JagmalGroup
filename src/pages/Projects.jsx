import { Link } from 'react-router-dom';
import { ArrowRight, Building2, Warehouse, Utensils, Settings } from 'lucide-react';
import Footer from '../components/Footer';
import SEO from '../components/SEO';

const Projects = () => {
  const projects = [
    {
      title: 'Jagmal Hotels',
      description: 'Luxury hospitality destinations built for comfort, service, and memorable guest experiences.',
      icon: Building2,
      path: '/hotels',
    },
    {
      title: 'Jagmal Logistics',
      description: 'Industrial parks and warehousing infrastructure supporting modern commerce.',
      icon: Warehouse,
      path: '/logistics',
    },
    {
      title: 'Jagmal Hospitality',
      description: 'Dining and lifestyle experiences designed around quality and atmosphere.',
      icon: Utensils,
      path: '/hospitality',
    },
    {
      title: 'Jagmal Precast & 3D Printing',
      description: 'Construction innovation through precast systems and digital fabrication.',
      icon: Settings,
      path: '/precast',
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      <SEO
        title="Services"
        description="Explore Jagmal Group services across hotels, logistics, hospitality, and construction innovation."
        path="/projects"
      />

      <section className="relative overflow-hidden bg-slate-950 py-20 md:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.18),transparent_38%),linear-gradient(180deg,rgba(15,23,42,0.9),rgba(2,6,23,1))]" />
        <div className="relative mx-auto max-w-6xl px-4 md:px-8">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm uppercase tracking-[0.35em] text-[#d4af37]">Services</p>
            <h1 className="text-5xl font-semibold tracking-tight text-white md:text-7xl" style={{ fontFamily: 'Playfair Display, serif' }}>
              A clear path into every vertical.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-slate-300 md:text-xl" style={{ fontFamily: 'Manrope, sans-serif' }}>
              This hub gives Google and visitors one obvious place to understand the group structure and move into each business line.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {projects.map((project) => {
              const Icon = project.icon;
              return (
                <Link
                  key={project.path}
                  to={project.path}
                  className="group rounded-2xl border border-slate-800 bg-slate-900/80 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#d4af37]/50 hover:bg-slate-900"
                >
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-[#d4af37]/10 text-[#d4af37]">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h2 className="text-2xl font-semibold text-white" style={{ fontFamily: 'Playfair Display, serif' }}>
                    {project.title}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-slate-300">{project.description}</p>
                  <div className="mt-6 inline-flex items-center text-sm font-medium text-[#d4af37]">
                    Learn more <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Projects;