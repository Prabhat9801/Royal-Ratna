import { motion } from 'framer-motion';
import { Palette, Trees, Users, Zap, Pizza } from 'lucide-react';

const features = [
  { icon: <Palette size={40} />, title: 'Artsy Decor', desc: 'Beautiful interiors with fairy lights and artistic touches.' },
  { icon: <Trees size={40} />, title: 'Outdoor Garden', desc: 'Relax in our lush green outdoor seating area.' },
  { icon: <Users size={40} />, title: 'Social Hub', desc: 'The perfect place for group hangouts and family gatherings.' },
  { icon: <Zap size={40} />, title: 'Fast Service', desc: 'Prompt service to ensure you never have to wait long.' },
  { icon: <Pizza size={40} />, title: 'Diverse Menu', desc: 'From Italian to Mumbai street food, we have it all.' }
];

const WhyChooseUs = () => {
  return (
    <section className="section-light">
      <div className="container">
        <div className="text-center">
          <h2 className="section-title">Why Visit The Living Room</h2>
          <div className="title-underline mx-auto" style={{ marginInline: 'auto' }}></div>
          <p className="section-subtitle">
            Experience the perfect blend of arts, comfort, and Raipur's most loved flavors.
          </p>
        </div>
        
        <div className="features-grid">
          {features.map((feature, i) => (
            <motion.div 
              className="feature-card" 
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
            >
              <div className="feature-icon">{feature.icon}</div>
              <h4 className="feature-title">{feature.title}</h4>
              <p className="feature-desc">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
