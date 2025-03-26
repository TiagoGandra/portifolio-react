export const Skill = (props) => {
  const { icon, title, isImage } = props;
  return (
    <article className="skill">
      <div className="skill-info">
        <h4 className="skill-title">{title}</h4>
      </div>
      <span className="skill-icon">
        {isImage ? (
          <img src={icon} alt={title} className="skill-icon-img" />
        ) : (
          <i className={icon}></i>
        )}
      </span>
    </article>
  );
};
