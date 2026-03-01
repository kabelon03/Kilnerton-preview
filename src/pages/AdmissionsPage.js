import { motion } from 'framer-motion';
import { CheckCircle2, FileText, Calendar, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const AdmissionsPage = () => {
  const steps = [
    {
      icon: <FileText className="w-8 h-8" />,
      title: 'Submit Application',
      description: 'Complete and submit the online application form with all required documents.',
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: 'Schedule Visit',
      description: 'Arrange a school tour to meet our staff and see our facilities.',
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Interview',
      description: 'Attend a brief interview with our admissions team and your child.',
    },
    {
      icon: <CheckCircle2 className="w-8 h-8" />,
      title: 'Enrollment',
      description: 'Receive your admission decision and complete enrollment procedures.',
    },
  ];

  const requirements = [
    'Birth certificate (certified copy)',
    'Previous school reports (if applicable)',
    'Immunization records',
    'Proof of residence',
    'Recent passport-sized photograph',
    'Completed application form',
    'Application fee payment',
  ];

  return (
    <div data-testid="admissions-page" className="mt-20">
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
              Admissions
            </h1>
            <p className="text-xl text-slate-700 leading-relaxed mb-8">
              We welcome families from all backgrounds to join our vibrant learning community. 
              Start your child's journey with us today.
            </p>
            <Link
              to="/contact"
              data-testid="contact-admissions-cta"
              className="inline-flex items-center bg-[#FFC947] text-slate-900 hover:bg-[#ffb01f] rounded-full px-8 py-4 text-lg font-semibold transition-all hover:scale-105 shadow-lg"
            >
              Contact Admissions Office
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Application Process */}
      <section data-testid="application-process-section" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#1B3C73] mb-4 tracking-tight">
              Application Process
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Follow these simple steps to apply for admission to Kilnerton Primary School.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                data-testid={`step-${index}`}
                className="relative bg-white p-8 rounded-2xl border border-blue-100 hover:border-blue-300 transition-all hover:shadow-xl group"
              >
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-[#FFC947] rounded-full flex items-center justify-center text-slate-900 font-bold text-xl shadow-lg">
                  {index + 1}
                </div>
                <div className="w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center text-[#1B3C73] mb-5 group-hover:bg-[#FFC947] group-hover:text-slate-900 transition-colors">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold text-[#1B3C73] mb-3">{step.title}</h3>
                <p className="text-slate-600 leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section data-testid="requirements-section" className="py-16 md:py-24 bg-gradient-to-b from-blue-50/50 to-white">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-[#1B3C73] mb-6 tracking-tight">
                Required Documents
              </h2>
              <p className="text-lg text-slate-700 leading-relaxed mb-8">
                Please ensure you have the following documents ready when applying. All documents 
                should be certified copies unless otherwise stated.
              </p>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <ul className="space-y-4">
                  {requirements.map((req, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle2 className="w-6 h-6 text-[#FFC947] flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700 text-lg">{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-[#1B3C73]">
                <h3 className="text-2xl font-bold text-[#1B3C73] mb-4">Age Requirements</h3>
                <p className="text-slate-700 text-lg leading-relaxed">
                  Children must turn 6 years old by 30 June of the year they enter Grade 1. 
                  For other grades, please contact our admissions office for specific requirements.
                </p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-[#FFC947]">
                <h3 className="text-2xl font-bold text-[#1B3C73] mb-4">Application Deadline</h3>
                <p className="text-slate-700 text-lg leading-relaxed">
                  Applications for the upcoming academic year open in March and close in August. 
                  Late applications may be considered based on availability.
                </p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-[#1B3C73]">
                <h3 className="text-2xl font-bold text-[#1B3C73] mb-4">Tuition & Fees</h3>
                <p className="text-slate-700 text-lg leading-relaxed">
                  For information about tuition fees, payment plans, and financial assistance, 
                  please contact our admissions office or visit the school in person.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#1B3C73]">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Have Questions?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Our admissions team is here to help you through every step of the process.
            </p>
            <Link
              to="/contact"
              data-testid="cta-contact"
              className="inline-flex items-center bg-[#FFC947] text-slate-900 hover:bg-[#ffb01f] rounded-full px-8 py-4 text-lg font-semibold transition-all hover:scale-105 shadow-lg"
            >
              Get in Touch
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AdmissionsPage;