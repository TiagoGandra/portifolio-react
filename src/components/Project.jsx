export const Project = (props) => {
  const { img, date, title, text, icon, href } = props;
  return (
    <article className="tour-card">
      <div className="tour-img-container">
        <img src={img} className="tour-img" alt="" />
      </div>
      <div className="tour-info">
        <div className="tour-title">
          <h4>{title}</h4>
        </div>
        <p>{text}</p>
        <div className="tour-footer">
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
