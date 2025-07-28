import '../styles.css'
function CommonOurValuesCard({ iconUrl, title }) {
    return (
        <div className="our-values-card">
            <img className="icon" src={iconUrl} alt={title} />
            <div className="text">{title}
            </div>
            </div>
            );
}
            export default CommonOurValuesCard;