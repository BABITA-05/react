import '../styles.css'
function CommonOurProgramsCard({title, description, imageUrl}){
    return(
        <div className='our-programs-card'>
            <img src={imageUrl} alt={title} />

            <div className='our-programs-card-content'>
                <div className='our-programs-card-content-title'>
                  {title}
                </div>
                <div className='our-programs-card-content-description'>
                    {description}
                </div>
            </div>

        </div>
    );
}
export default CommonOurProgramsCard