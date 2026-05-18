import { useState } from 'react';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Label } from '../components/ui/label';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { toast } from 'sonner';

import Footer from '../components/Footer';
import SEO from '../components/SEO';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('https://formspree.io/f/xkozgjgd', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success('Message sent successfully! We\'ll get back to you soon.');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        toast.error('Failed to send message. Please try again.');
      }
    } catch (error) {
      toast.error('An error occurred. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen pt-20">
      <SEO
        title="Contact Jagmal Group | Enquiries & Partnerships"
        description="Get in touch with Jagmal Group for partnerships, enquiries, and business opportunities."
        path="/contact"
      />
      {/* Hero Banner */}
      <section
        className="relative h-[60vh] flex items-center justify-center overflow-hidden"
        data-testid="contact-hero-section"
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
            data-testid="contact-page-heading"
          >
            Get in <span className="text-[#d4af37]">Touch</span>
          </h1>
          <p
            className="text-xl md:text-2xl text-slate-200 leading-relaxed"
            style={{ fontFamily: 'Manrope, sans-serif' }}
          >
            We'd Love to Hear From You
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 md:py-32 bg-slate-950" data-testid="contact-form-section">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16">
            {/* Contact Info */}
            <div>
              <h2
                className="text-4xl md:text-5xl font-semibold text-white mb-8 tracking-tight"
                style={{ fontFamily: 'Playfair Display, serif' }}
                data-testid="contact-info-heading"
              >
                Contact Information
              </h2>
              <p
                className="text-lg text-slate-300 leading-relaxed mb-12"
                style={{ fontFamily: 'Manrope, sans-serif' }}
              >
                Have questions or want to learn more about Jagmal Group? Reach out to us and we'll respond as soon as possible.
              </p>

              <div className="space-y-8">
                <Card className="p-6 border border-slate-800 bg-slate-900">
                  <div className="flex items-start">
                    <div className="p-3 rounded-full bg-[#d4af37]/10 mr-4">
                      <Mail className="h-6 w-6 text-[#d4af37]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-white mb-2">
                        Email
                      </h3>
                      <p className="text-slate-400">info@jagmalgroup.com</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 border border-slate-800 bg-slate-900">
                  <div className="flex items-start">
                    <div className="p-3 rounded-full bg-[#d4af37]/10 mr-4">
                      <Phone className="h-6 w-6 text-[#d4af37]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-white mb-2">
                        Phone
                      </h3>
<p className="text-slate-400">+91 9839921921</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 border border-slate-800 bg-slate-900">
                  <div className="flex items-start">
                    <div className="p-3 rounded-full bg-[#d4af37]/10 mr-4">
                      <MapPin className="h-6 w-6 text-[#d4af37]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-white mb-2">
                        Headquarters
                      </h3>
                      <p className="text-slate-400">Mumbai</p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            {/* Contact Form */}
            <Card
              className="p-8 md:p-10 border border-slate-800 bg-slate-900"
              data-testid="contact-form-card"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-white">
                    Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="mt-2"
                    data-testid="contact-form-name-input"
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-white">
                    Email
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="mt-2"
                    data-testid="contact-form-email-input"
                  />
                </div>

                <div>
                  <Label htmlFor="subject" className="text-white">
                    Subject
                  </Label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="mt-2"
                    data-testid="contact-form-subject-input"
                  />
                </div>

                <div>
                  <Label htmlFor="message" className="text-white">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="mt-2"
                    data-testid="contact-form-message-input"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#d4af37] hover:bg-[#b8961f] text-white py-6 text-lg rounded-full transition-all duration-300 hover:scale-105"
                  data-testid="contact-form-submit-button"
                >
                  {loading ? 'Sending...' : 'Send Message'}
                  <Send className="ml-2 h-5 w-5" />
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Contact;

