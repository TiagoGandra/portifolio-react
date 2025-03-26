import { Title } from "./Title.jsx";
import { skills } from "../constants/skills.js";
import { Skill } from "./Skill.jsx";

const Skills = () => {
  return (
    <>
      <section className="section skills" id="skills">
        <Title title="skills" subTitle="" />
        <div className="section-center skills-center">
          {skills.map((props) => {
            return <Skill key={props.id} {...props} />;
          })}
        </div>
      </section>
    </>
  );
};
export default Skills;
