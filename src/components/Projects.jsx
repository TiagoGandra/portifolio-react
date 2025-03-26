import { Title } from "./Title.jsx";
import { projects } from "../constants/projects.js";
import { Project } from "./Project.jsx";

const Projects = () => {
  return (
    <>
      <section className="section" id="projects">
        <Title title="Projects" subTitle="" />

        <div className="section-center featured-center">
          {projects.map((props) => {
            return <Project key={props.id} {...props} />;
          })}
        </div>
      </section>
    </>
  );
};

export default Projects;
