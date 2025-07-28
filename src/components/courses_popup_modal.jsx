import '../styles.css';
function CoursePopUpModal({ isModalOpen,setModelOpen }) {
    if (!isModalOpen) return null;
    return (
        <div className='modal-overlay'>
            <div className='modal-box'>
                <button className='modal-close' onClick={()=>setModelOpen(false)}>X</button>
                <h2 className='modal-title'>Alert!!</h2>
                <div className='modal-content'>Hello this is an example of popup model</div>
            </div>
        </div>
    );
}
export default CoursePopUpModal;