import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import { Mail, User } from 'lucide-react';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const StaffPage = () => {
  const [staff, setStaff] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchStaff();
  }, []);

  const fetchStaff = async () => {
    try {
      const response = await axios.get(`${API}/staff`);
      setStaff(response.data);
    } catch (error) {
      console.error('Error fetching staff:', error);
    } finally {
      setLoading(false);
    }
  };

  // Placeholder staff for demonstration
  const placeholderStaff = [
    {
      id: '1',
      name: 'Mrs. Jane Smith',
      position: 'Principal',
      bio: 'Dedicated educator with over 20 years of experience in primary education.',
      image_url: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=srgb&fm=jpg&q=85',
      email: 'j.smith@kilnertonprimary.co.za',
    },
    {
      id: '2',
      name: 'Mr. John Davis',
      position: 'Deputy Principal',
      bio: 'Passionate about fostering a positive and inclusive school culture.',
      image_url: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?crop=entropy&cs=srgb&fm=jpg&q=85',
      email: 'j.davis@kilnertonprimary.co.za',
    },
    {
      id: '3',
      name: 'Ms. Sarah Johnson',
      position: 'Grade 1 Teacher',
      bio: 'Specializes in early childhood education and literacy development.',
      image_url: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?crop=entropy&cs=srgb&fm=jpg&q=85',
      email: 's.johnson@kilnertonprimary.co.za',
    },
    {
      id: '4',
      name: 'Mr. Michael Brown',
      position: 'Grade 3 Teacher',
      bio: 'Experienced educator with a focus on mathematics and science.',
      image_url: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?crop=entropy&cs=srgb&fm=jpg&q=85',
      email: 'm.brown@kilnertonprimary.co.za',
    },
    {
      id: '5',
      name: 'Mrs. Emily Wilson',
      position: 'Grade 5 Teacher',
      bio: 'Passionate about creative teaching methods and student engagement.',
      image_url: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?crop=entropy&cs=srgb&fm=jpg&q=85',
      email: 'e.wilson@kilnertonprimary.co.za',
    },
    {
      id: '6',
      name: 'Mr. David Martinez',
      position: 'Physical Education',
      bio: 'Sports enthusiast dedicated to promoting health and teamwork.',
      image_url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=srgb&fm=jpg&q=85',
      email: 'd.martinez@kilnertonprimary.co.za',
    },
  ];

  const displayStaff = staff.length > 0 ? staff : placeholderStaff;

  return (
    <div data-testid="staff-page" className="mt-20">
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
              Our Staff
            </h1>
            <p className="text-xl text-slate-700 leading-relaxed">
              Meet the dedicated educators who inspire, guide, and support our students every day.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Staff Grid */}
      <section data-testid="staff-grid" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="h-96 bg-slate-100 rounded-2xl animate-pulse" />
              ))}
            </div>
          ) : displayStaff.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {displayStaff.map((member, index) => (
                <motion.div
                  key={member.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  data-testid={`staff-card-${index}`}
                  className="bg-white rounded-2xl border border-slate-100 overflow-hidden hover:shadow-2xl transition-all group"
                >
                  <div className="h-72 bg-gradient-to-br from-blue-100 to-blue-50 relative overflow-hidden">
                    {member.image_url ? (
                      <img
                        src={member.image_url}
                        alt={member.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <User className="w-24 h-24 text-[#1B3C73] opacity-50" />
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-[#1B3C73] mb-2">{member.name}</h3>
                    <p className="text-[#FFC947] font-semibold mb-3">{member.position}</p>
                    {member.bio && (
                      <p className="text-slate-600 leading-relaxed mb-4 line-clamp-3">{member.bio}</p>
                    )}
                    {member.email && (
                      <a
                        href={`mailto:${member.email}`}
                        className="inline-flex items-center text-[#1B3C73] hover:text-[#FFC947] transition-colors text-sm font-medium"
                      >
                        <Mail className="w-4 h-4 mr-2" />
                        Contact
                      </a>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="w-24 h-24 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6">
                <User className="w-12 h-12 text-[#1B3C73]" />
              </div>
              <h3 className="text-2xl font-bold text-[#1B3C73] mb-3">No Staff Information Available</h3>
              <p className="text-slate-600 text-lg">Check back soon!</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default StaffPage;