
export const Service = (props) => {
    const { icon, title, text, isImage} = props;
    return (
        <article className="service" >
            <span className="service-icon">
                {isImage ? (
                    <img src={icon} alt={title} className="service-icon-img" />
                ) : (
                    <i className={icon}></i>
                )}
            </span>
            <div className="service-info">
            <h4 className="service-title">{title}</h4>
            <p className="service-text">{text}</p>
            </div>
        </article>
    )
}