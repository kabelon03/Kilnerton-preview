import { motion } from 'framer-motion';
import { Target, Heart, Award, Users } from 'lucide-react';

const AboutPage = () => {
  const values = [
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Excellence',
      description: 'We strive for the highest standards in education and personal development.',
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Compassion',
      description: 'We foster a caring and inclusive environment where every child feels valued.',
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Integrity',
      description: 'We instill honesty, responsibility, and ethical behavior in all our students.',
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Community',
      description: 'We build strong partnerships between students, parents, and educators.',
    },
  ];

  return (
    <div data-testid="about-page" className="mt-20">
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
              About Our School
            </h1>
            <p className="text-xl text-slate-700 leading-relaxed">
              Kilnerton Primary School is dedicated to nurturing young minds and building a foundation 
              for lifelong learning and success.
            </p>
          </motion.div>
        </div>
      </section>

      {/* History */}
      <section data-testid="history-section" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.unsplash.com/photo-1762088776943-28a9fbadcec4?crop=entropy&cs=srgb&fm=jpg&q=85"
                alt="School building"
                className="rounded-2xl shadow-2xl w-full"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-[#1B3C73] mb-6 tracking-tight">
                Our History
              </h2>
              <p className="text-base md:text-lg text-slate-700 leading-relaxed mb-4">
                Formerly known as Laerskool Nellie Swart, our school has proudly served the community 
                for many years. Recently rebranded as Kilnerton Primary School, we continue to honor 
                our legacy while embracing innovation and progress.
              </p>
              <p className="text-base md:text-lg text-slate-700 leading-relaxed mb-4">
                Throughout our history, we have maintained our commitment to providing quality education 
                that prepares students for the challenges and opportunities of tomorrow.
              </p>
              <p className="text-base md:text-lg text-slate-700 leading-relaxed">
                Our name may have changed, but our dedication to excellence, our values, and our 
                passion for education remain as strong as ever.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section data-testid="mission-vision-section" className="py-16 md:py-24 bg-gradient-to-b from-blue-50/50 to-white">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white p-10 rounded-2xl shadow-lg border-t-4 border-[#1B3C73]"
            >
              <h3 className="text-3xl font-bold text-[#1B3C73] mb-4">Our Mission</h3>
              <p className="text-lg text-slate-700 leading-relaxed">
                To provide a nurturing and stimulating learning environment that empowers every child 
                to reach their full potential academically, socially, and emotionally. We are committed 
                to fostering a love of learning, critical thinking, and strong character in all our students.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-10 rounded-2xl shadow-lg border-t-4 border-[#FFC947]"
            >
              <h3 className="text-3xl font-bold text-[#1B3C73] mb-4">Our Vision</h3>
              <p className="text-lg text-slate-700 leading-relaxed">
                To be a leading primary school that inspires excellence, innovation, and integrity. 
                We envision a community where every child is valued, supported, and equipped with 
                the knowledge and skills to thrive in an ever-changing world.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section data-testid="values-section" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#1B3C73] mb-4 tracking-tight">
              Our Core Values
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              These principles guide everything we do at Kilnerton Primary School.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                data-testid={`value-card-${index}`}
                className="bg-white p-8 rounded-2xl border border-blue-100 hover:border-blue-300 transition-all hover:shadow-xl group text-center"
              >
                <div className="w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center text-[#1B3C73] mb-5 mx-auto group-hover:bg-[#FFC947] group-hover:text-slate-900 transition-colors">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-[#1B3C73] mb-3">{value.title}</h3>
                <p className="text-slate-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Principal's Message */}
      <section data-testid="principal-message-section" className="py-16 md:py-24 bg-gradient-to-b from-blue-50/50 to-white">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white p-8 md:p-12 rounded-2xl shadow-lg"
          >
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="md:w-1/3">
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=srgb&fm=jpg&q=85"
                  alt="Principal"
                  className="w-48 h-48 rounded-2xl object-cover shadow-lg mx-auto"
                />
                <div className="text-center mt-4">
                  <h4 className="text-xl font-bold text-[#1B3C73]">Mrs. Jane Smith</h4>
                  <p className="text-slate-600">Principal</p>
                </div>
              </div>
              <div className="md:w-2/3">
                <h3 className="text-3xl font-bold text-[#1B3C73] mb-4">Principal's Message</h3>
                <p className="text-lg text-slate-700 leading-relaxed mb-4">
                  "Welcome to Kilnerton Primary School! It is my privilege to lead this wonderful 
                  community of learners, educators, and families. Our school is more than just a 
                  place of learning—it is a home where children grow, discover their passions, and 
                  develop the skills they need to succeed."
                </p>
                <p className="text-lg text-slate-700 leading-relaxed">
                  "We are committed to providing each child with personalized attention, challenging 
                  academics, and a supportive environment. Together with our dedicated staff and 
                  engaged parents, we are building bright futures, one child at a time."
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;