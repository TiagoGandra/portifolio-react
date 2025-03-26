import { Title } from "./Title.jsx";
import { skills } from "../constants/skills.js";
import { Skill } from "./Skill.jsx";

const Skills = () => {
  return (
    <>
      <section className="section services" id="services">
        <Title title="skills" subTitle="" />
        <div className="section-center services-center">
          {skills.map((props) => {
            return <Skill key={props.id} {...props} />;
          })}
        </div>
      </section>
    </>
  );
};
export default Skills;
