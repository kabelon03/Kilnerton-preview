import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import { Calendar, Tag } from 'lucide-react';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const NewsEventsPage = () => {
  const [newsEvents, setNewsEvents] = useState([]);
  const [filter, setFilter] = useState('all');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchNewsEvents();
  }, [filter]);

  const fetchNewsEvents = async () => {
    setLoading(true);
    try {
      const url = filter === 'all' ? `${API}/news-events` : `${API}/news-events?category=${filter}`;
      const response = await axios.get(url);
      setNewsEvents(response.data);
    } catch (error) {
      console.error('Error fetching news events:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div data-testid="news-events-page" className="mt-20">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-b from-blue-50/50 to-white">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-black text-[#1B3C73] mb-6 leading-none tracking-tight">
              News & Events
            </h1>
            <p className="text-xl text-slate-700 leading-relaxed">
              Stay informed about the latest happenings, achievements, and upcoming events at 
              Kilnerton Primary School.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter */}
      <section className="py-8 bg-white border-b border-slate-200">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="flex flex-wrap justify-center gap-4">
            <button
              data-testid="filter-all"
              onClick={() => setFilter('all')}
              className={`px-6 py-3 rounded-full font-medium transition-all ${
                filter === 'all'
                  ? 'bg-[#1B3C73] text-white shadow-md'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              All
            </button>
            <button
              data-testid="filter-news"
              onClick={() => setFilter('news')}
              className={`px-6 py-3 rounded-full font-medium transition-all ${
                filter === 'news'
                  ? 'bg-[#1B3C73] text-white shadow-md'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              News
            </button>
            <button
              data-testid="filter-event"
              onClick={() => setFilter('event')}
              className={`px-6 py-3 rounded-full font-medium transition-all ${
                filter === 'event'
                  ? 'bg-[#1B3C73] text-white shadow-md'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              Events
            </button>
          </div>
        </div>
      </section>

      {/* News & Events Grid */}
      <section data-testid="news-events-grid" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="h-96 bg-slate-100 rounded-2xl animate-pulse" />
              ))}
            </div>
          ) : newsEvents.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {newsEvents.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  data-testid={`news-event-card-${index}`}
                  className="group overflow-hidden rounded-2xl bg-white border border-slate-100 hover:shadow-2xl transition-all"
                >
                  <div className="h-56 bg-gradient-to-br from-blue-100 to-blue-50 relative overflow-hidden">
                    {item.image_url ? (
                      <img
                        src={item.image_url}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        {item.category === 'event' ? (
                          <Calendar className="w-16 h-16 text-[#1B3C73] opacity-50" />
                        ) : (
                          <Tag className="w-16 h-16 text-[#1B3C73] opacity-50" />
                        )}
                      </div>
                    )}
                    <div className="absolute top-4 right-4 bg-[#FFC947] text-slate-900 px-3 py-1 rounded-full text-xs font-semibold uppercase">
                      {item.category}
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-sm text-slate-500 mb-3 flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      {item.date}
                    </p>
                    <h3 className="text-xl font-bold text-[#1B3C73] mb-3 line-clamp-2">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed line-clamp-4">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="w-24 h-24 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6">
                <Calendar className="w-12 h-12 text-[#1B3C73]" />
              </div>
              <h3 className="text-2xl font-bold text-[#1B3C73] mb-3">
                No {filter === 'all' ? 'News or Events' : filter === 'news' ? 'News' : 'Events'} Available
              </h3>
              <p className="text-slate-600 text-lg">Check back soon for updates!</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default NewsEventsPage;