
export const Tour = (props) => {
    const { img, date, title, text, icon, location, duration, price} = props;
    return (
        <article className="tour-card">
            <div className="tour-img-container">
            <img src={img} className="tour-img" alt="" />
            <p className="tour-date">{date}</p>
            </div>
            <div className="tour-info">
            <div className="tour-title">
                <h4>{title}</h4>
            </div>
            <p>{text}</p>
            <div className="tour-footer">
                <p>
                <span><i className={icon}></i></span>{location}</p>
                <p>{duration}</p>
                <p>{price}</p>
            </div>
            </div>
        </article>
    )
}