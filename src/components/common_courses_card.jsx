import '../styles.css'
function CommonCoursesCard({imageUrl,title,description,year}){
    return (
        <div className='our-courses-card'>
            <img src={imageUrl} alt={title}></img>
            <div className='our-courses-card-content'>
                <div className='our-courses-card-content-title'>
                    {title}
                </div>
                <div className='our-courses-card-content-description'>
                    {description}
                </div>
                <div className='our-courses-card-content-year'>
                    {year}
                </div>
            </div>

        </div>
    );
}
export default CommonCoursesCard;