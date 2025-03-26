export const Skill = (props) => {
  const { icon, title, isImage } = props;
  return (
    <article className="service">
      <div className="service-info">
        <h4 className="service-title">{title}</h4>
      </div>
      <span className="service-icon">
        {isImage ? (
          <img src={icon} alt={title} className="service-icon-img" />
        ) : (
          <i className={icon}></i>
        )}
      </span>
    </article>
  );
};
