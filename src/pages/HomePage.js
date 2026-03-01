import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, Users, Award, Calendar } from 'lucide-react';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const HomePage = () => {
  const [newsEvents, setNewsEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchNewsEvents();
  }, []);

  const fetchNewsEvents = async () => {
    try {
      const response = await axios.get(`${API}/news-events`);
      setNewsEvents(response.data.slice(0, 4));
    } catch (error) {
      console.error('Error fetching news events:', error);
    } finally {
      setLoading(false);
    }
  };

  const features = [
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: 'Quality Education',
      description: 'Comprehensive curriculum designed to nurture academic excellence and critical thinking.',
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Experienced Staff',
      description: 'Dedicated and qualified educators committed to every child\'s success and well-being.',
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Holistic Development',
      description: 'Sports, arts, and extra-curricular activities to develop well-rounded individuals.',
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: 'Modern Facilities',
      description: 'State-of-the-art classrooms, library, computer labs, and sports facilities.',
    },
  ];

  return (
    <div data-testid="homepage" className="mt-20">
      {/* Hero Section */}
      <section
        data-testid="hero-section"
        className="relative h-[600px] md:h-[700px] flex items-center overflow-hidden"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('/images/WhatsApp-Image-2020-02-06-at-12.57.14-2.jpeg')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-900/60 to-transparent" />
        
        <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-none tracking-tight">
              Welcome to<br />
              <span className="text-[#FFC947]">Kilnerton Primary</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-50 mb-8 leading-relaxed">
              Empowering young minds through excellence in education, integrity, and compassion.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/admissions"
                data-testid="cta-admissions"
                className="inline-flex items-center justify-center bg-[#FFC947] text-slate-900 hover:bg-[#ffb01f] rounded-full px-8 py-4 text-lg font-semibold transition-all hover:scale-105 shadow-lg"
              >
                Apply Now
                <ArrowRight className="ml-2" size={20} />
              </Link>
              <Link
                to="/about"
                data-testid="cta-learn-more"
                className="inline-flex items-center justify-center border-2 border-white text-white hover:bg-white hover:text-[#1B3C73] rounded-full px-8 py-4 text-lg font-semibold transition-all"
              >
                Learn More
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Welcome Section */}
      <section data-testid="welcome-section" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-[#1B3C73] mb-6 tracking-tight">
                Building Bright Futures Together
              </h2>
              <p className="text-base md:text-lg text-slate-700 leading-relaxed mb-6">
                Formerly known as Laerskool Nellie Swart, Kilnerton Primary School has a rich heritage 
                of providing quality education to the community. We are committed to creating a nurturing 
                environment where every child can thrive academically, socially, and emotionally.
              </p>
              <p className="text-base md:text-lg text-slate-700 leading-relaxed mb-6">
                Our dedicated team of educators works tirelessly to inspire a love of learning, foster 
                creativity, and instill values that prepare our students for success in an ever-changing world.
              </p>
              <Link
                to="/about"
                data-testid="about-link"
                className="inline-flex items-center text-[#1B3C73] font-semibold hover:text-[#FFC947] transition-colors"
              >
                Discover Our Story
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="/images/1490c40a-c5ed-418b-a3c0-5df1569c9197-2-768x1024.jpg"
                alt="Students learning"
                className="rounded-2xl shadow-2xl w-full"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section data-testid="features-section" className="py-16 md:py-24 bg-gradient-to-b from-blue-50/50 to-white">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#1B3C73] mb-4 tracking-tight">
              Why Choose Us
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              We provide a comprehensive educational experience that goes beyond academics.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                data-testid={`feature-card-${index}`}
                className="bg-white p-8 rounded-2xl border border-blue-100 hover:border-blue-300 transition-all hover:shadow-xl group"
              >
                <div className="w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center text-[#1B3C73] mb-5 group-hover:bg-[#FFC947] group-hover:text-slate-900 transition-colors">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-[#1B3C73] mb-3">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* News & Events Section */}
      <section data-testid="news-section" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#1B3C73] mb-3 tracking-tight">
                Latest News & Events
              </h2>
              <p className="text-lg text-slate-600">Stay updated with what's happening at our school</p>
            </div>
            <Link
              to="/news-events"
              data-testid="view-all-news"
              className="hidden md:inline-flex items-center text-[#1B3C73] font-semibold hover:text-[#FFC947] transition-colors"
            >
              View All
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>

          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="h-64 bg-slate-100 rounded-2xl animate-pulse" />
              ))}
            </div>
          ) : newsEvents.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {newsEvents.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  data-testid={`news-card-${index}`}
                  className="group overflow-hidden rounded-2xl bg-white border border-slate-100 hover:shadow-xl transition-all"
                >
                  <div className="h-48 bg-gradient-to-br from-blue-100 to-blue-50 relative overflow-hidden">
                    {item.image_url && (
                      <img
                        src={item.image_url}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    )}
                    <div className="absolute top-4 right-4 bg-[#FFC947] text-slate-900 px-3 py-1 rounded-full text-xs font-semibold uppercase">
                      {item.category}
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-sm text-slate-500 mb-2">{item.date}</p>
                    <h3 className="text-lg font-semibold text-[#1B3C73] mb-2 line-clamp-2">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 text-sm line-clamp-3">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-slate-600">No news or events available at the moment. Check back soon!</p>
            </div>
          )}

          <div className="text-center mt-8 md:hidden">
            <Link
              to="/news-events"
              data-testid="view-all-news-mobile"
              className="inline-flex items-center text-[#1B3C73] font-semibold hover:text-[#FFC947] transition-colors"
            >
              View All
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section data-testid="cta-section" className="py-20 bg-[#1B3C73] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#FFC947] rounded-full filter blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#FFC947] rounded-full filter blur-3xl" />
        </div>
        <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Join Our Community?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Take the first step towards your child's bright future. Learn about our admissions process today.
            </p>
            <Link
              to="/admissions"
              data-testid="cta-bottom-admissions"
              className="inline-flex items-center bg-[#FFC947] text-slate-900 hover:bg-[#ffb01f] rounded-full px-8 py-4 text-lg font-semibold transition-all hover:scale-105 shadow-lg"
            >
              Start Your Application
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;