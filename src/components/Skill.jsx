export const Skill = ({ 
  icon, 
  title, 
  isImage, 
  isActive, 
  onClick, 
  onMouseEnter, 
  onMouseLeave 
}) => {
  return (
    <div 
      className={`skill-card ${isActive ? 'active' : ''}`}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="skill-icon-container">
        {isImage ? (
          <img src={icon} alt={title} className="skill-icon" />
        ) : (
          <i className={icon}></i>
        )}
      </div>
      <span className="skill-title">{title}</span>
    </div>
  );
};