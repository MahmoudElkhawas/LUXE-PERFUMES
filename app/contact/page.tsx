'use client';

import Link from 'next/link';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { Mail, Phone, MapPin, Send, ArrowRight } from 'lucide-react';
import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      <section className="relative pt-24 md:pt-32 pb-12 md:pb-20 px-4 md:px-8 bg-muted/30 overflow-hidden">
        <div className="max-width-container relative z-10">
          <div className="flex items-center gap-2 text-xs md:text-sm text-accent mb-6">
            <ArrowRight size={16} />
            <span>Get in Touch</span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-primary mb-6 leading-tight">
            We&apos;d Love to Hear From You
          </h1>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl">
            Have questions about our fragrances or need personalized recommendations? Our expert team is here to help you discover your perfect scent.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 px-4 md:px-8">
        <div className="max-width-container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="p-6 md:p-8 border border-border rounded-lg hover:border-accent hover:shadow-lg transition-all duration-300 group">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                <Mail size={24} className="text-accent" />
              </div>
              <h3 className="text-lg md:text-xl font-medium text-primary mb-2">Email Us</h3>
              <p className="text-accent font-medium mb-2">hello@luxeperfumes.com</p>
              <p className="text-sm text-muted-foreground">We respond within 24 hours</p>
            </div>

            <div className="p-6 md:p-8 border border-border rounded-lg hover:border-accent hover:shadow-lg transition-all duration-300 group">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                <Phone size={24} className="text-accent" />
              </div>
              <h3 className="text-lg md:text-xl font-medium text-primary mb-2">Call Us</h3>
              <p className="text-accent font-medium mb-2">+1 (555) 123-4567</p>
              <p className="text-sm text-muted-foreground">Mon-Fri, 9am-6pm EST</p>
            </div>

            <div className="p-6 md:p-8 border border-border rounded-lg hover:border-accent hover:shadow-lg transition-all duration-300 group">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                <MapPin size={24} className="text-accent" />
              </div>
              <h3 className="text-lg md:text-xl font-medium text-primary mb-2">Visit Us</h3>
              <p className="text-accent font-medium mb-2">123 Luxury Avenue</p>
              <p className="text-sm text-muted-foreground">New York, NY 10001</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 px-4 md:px-8 bg-muted/20">
        <div className="max-width-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-light text-primary mb-8">
                Send Us a Message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-primary mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white border border-border rounded-lg text-primary placeholder-muted-foreground focus:outline-none focus:border-accent transition-colors"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-primary mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white border border-border rounded-lg text-primary placeholder-muted-foreground focus:outline-none focus:border-accent transition-colors"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-primary mb-2">
                    Subject
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white border border-border rounded-lg text-primary focus:outline-none focus:border-accent transition-colors cursor-pointer"
                  >
                    <option value="">Select a subject...</option>
                    <option value="product">Product Inquiry</option>
                    <option value="recommendation">Fragrance Recommendation</option>
                    <option value="order">Order Status</option>
                    <option value="feedback">Feedback</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-primary mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-white border border-border rounded-lg text-primary placeholder-muted-foreground focus:outline-none focus:border-accent transition-colors resize-none"
                    placeholder="Tell us about your inquiry..."
                  />
                </div>

                <button
                  type="submit"
                  className={`w-full py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 text-white uppercase tracking-wider ${
                    submitted
                      ? 'bg-accent/80'
                      : 'bg-accent hover:bg-accent/90 hover:shadow-lg'
                  }`}
                >
                  <Send size={18} />
                  {submitted ? 'Message Sent Successfully!' : 'Send Message'}
                </button>
              </form>
            </div>

            <div className="space-y-12">
              <div>
                <h3 className="text-2xl md:text-3xl font-light text-primary mb-6">
                  Why Connect With Us?
                </h3>
                <ul className="space-y-4">
                  <li className="flex gap-4">
                    <span className="text-accent text-xl font-light mt-1">✓</span>
                    <div>
                      <h4 className="text-primary font-medium mb-1">Expert Consultations</h4>
                      <p className="text-muted-foreground text-sm">Our fragrance experts provide personalized recommendations tailored to your preferences.</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="text-accent text-xl font-light mt-1">✓</span>
                    <div>
                      <h4 className="text-primary font-medium mb-1">24/7 Support</h4>
                      <p className="text-muted-foreground text-sm">Reach out anytime with questions about orders, products, or recommendations.</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="text-accent text-xl font-light mt-1">✓</span>
                    <div>
                      <h4 className="text-primary font-medium mb-1">Free Samples</h4>
                      <p className="text-muted-foreground text-sm">Request free fragrance samples to find your signature scent before purchasing.</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="text-accent text-xl font-light mt-1">✓</span>
                    <div>
                      <h4 className="text-primary font-medium mb-1">Loyalty Rewards</h4>
                      <p className="text-muted-foreground text-sm">Join our VIP program and enjoy exclusive discounts and early access to new collections.</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="p-6 md:p-8 bg-white rounded-lg border border-border">
                <h3 className="text-xl font-medium text-primary mb-4">Business Hours</h3>
                <div className="space-y-3 text-muted-foreground">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span className="font-medium text-primary">9:00 AM - 6:00 PM EST</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span className="font-medium text-primary">10:00 AM - 4:00 PM EST</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="font-medium text-primary">Closed</span>
                  </div>
                </div>
              </div>

              <Link
                href="/shop"
                className="inline-flex items-center gap-2 text-accent hover:text-accent/80 font-medium transition-colors group"
              >
                Explore Our Collection
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
