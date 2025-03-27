import { useState, useEffect } from "react";
import { Title } from "./Title.jsx";
import { skills } from "../constants/skills.js";
import { Skill } from "./Skill.jsx";

const Skills = () => {
  const [activeSkill, setActiveSkill] = useState(null);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    const checkTouchDevice = () => {
      setIsTouchDevice(('ontouchstart' in window) || (navigator.maxTouchPoints > 0));
    };
    checkTouchDevice();
    window.addEventListener('resize', checkTouchDevice);
    return () => window.removeEventListener('resize', checkTouchDevice);
  }, []);

  const handleSkillInteraction = (skill) => {
    if (isTouchDevice) {
      setActiveSkill(activeSkill?.id === skill.id ? null : skill);
    } else {
      setActiveSkill(skill);
    }
  };

  const handleSkillLeave = () => {
    if (!isTouchDevice) {
      setActiveSkill(null);
    }
  };

  return (
    <section className="section skills" id="skills">
      <Title title="skills" subTitle="" />
      <div className="section-center skills-center">
        <div className="skills-container">
          <div className="skills-grid">
            {skills.map((props) => (
              <Skill 
                key={props.id} 
                {...props} 
                isActive={activeSkill?.id === props.id}
                onClick={() => handleSkillInteraction(props)}
                onMouseEnter={() => handleSkillInteraction(props)}
                onMouseLeave={handleSkillLeave}
              />
            ))}
          </div>
          <div className="skill-description">
            {activeSkill ? (
              <div className="description-content">
                {activeSkill.description.split('\n').map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
              </div>
            ) : (
              <p className="description-placeholder">
                {isTouchDevice ? "toque em um card para ler" : "passe o cursor do mouse no card para ler"}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;