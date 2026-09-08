import SectionHeading from '../components/SectionHeading';
import SkillCard from '../components/SkillCard';
import { skillCategories } from '../data/skills';

export default function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-heading">
      <div className="section-container">
        <SectionHeading
          label="Technical Expertise"
          title="Skills & Technologies"
          subtitle="A categorized overview of the technologies, frameworks and tools I work with."
          align="center"
        />

        {/* skills-grid defined in CSS: 1 col → 2 col → 3 col, align-items: start */}
        <div className="skills-grid">
          {skillCategories.map((category, i) => (
            <SkillCard key={category.id} category={category} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
