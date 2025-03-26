export const Project = (props) => {
  const { img, date, title, text, icon, href } = props;
  return (
    <article className="project-card">
      <div className="project-img-container">
        <img src={img} className="project-img" alt="" />
      </div>
      <div className="project-info">
        <div className="project-title">
          <h4>{title}</h4>
        </div>
        <p>{text}</p>
        <div className="project-footer">
          <p>
            <span>
              <i className={icon}></i>
              <a className="btn" href={href} target="_blank" rel="noreferrer">
                See more
              </a>
            </span>
          </p>
          <p>{date}</p>
        </div>
      </div>
    </article>
  );
};
