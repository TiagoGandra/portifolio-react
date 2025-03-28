export const Project = (props) => {
  const { img, date, title, text, icon, href } = props;
  return (
    <article className="project-card">
      <div className="project-img-container">
        <img src={img} className="project-img" alt={title} />
      </div>
      <div className="project-info">
        <div className="project-title">
          <h4>{title}</h4>
        </div>
        <p className="project-text">{text}</p>
        <div className="project-footer">
          <p className="project-link">
            <span>
              <i className={icon}></i>
              <a className="btn-projects" href={href} target="_blank" rel="noreferrer">
                See more
              </a>
            </span>
          </p>
          <p className="project-date">{date}</p>
        </div>
      </div>
    </article>
  );
};