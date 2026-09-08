import { motion } from 'framer-motion';
import {
  Code, Monitor, Server, Database, Cloud, Network, Users,
  Terminal, Globe, Layers, GitBranch, Cpu
} from 'lucide-react';
import { colorMap } from '../data/skills';

const iconComponents = {
  Code, Monitor, Server, Database, Cloud, Network, Users,
  Terminal, Globe, Layers, GitBranch, Cpu,
};

export default function SkillCard({ category, index }) {
  const colors = colorMap[category.color] || colorMap.blue;
  const IconComp = iconComponents[category.icon] || Code;

  return (
    <motion.div
      className="glass-card p-5"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: 'easeOut' }}
    >
      <div className="skill-card-inner">
        {/* Header: icon + title — fixed layout, no wrap */}
        <div className="skill-card-header">
          <div
            className={`skill-card-icon ${colors.bg} border ${colors.border}`}
            aria-hidden="true"
          >
            <IconComp size={17} className={colors.text} />
          </div>
          <h3 className="skill-card-title">{category.title}</h3>
        </div>

        {/* Badge list */}
        <div className="skill-badge-list">
          {category.skills.map((skill, i) => (
            <motion.span
              key={skill.name}
              className={`skill-badge ${colors.badge}`}
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.08 + i * 0.04 }}
              whileHover={{ y: -2, transition: { duration: 0.15 } }}
            >
              {skill.name}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
