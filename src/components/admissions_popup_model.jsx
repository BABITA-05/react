import '../styles.css';
function AdmissionsPopUpModal({ isModalOpen,setModelOpen }) {
    if (!isModalOpen) return null;
    return (
        <div className='modal-overlay'>
            <div className='modal-box'>
                <button className='modal-close' onClick={()=>setModelOpen(false)}>X</button>
                <h2 className='add-title'>Aayushma Kafle</h2>
                <div className='add-content'>
                    <p>Course:CSIT</p>
                    <p>College:Shiksyalaya</p>
                    <p>Batch:2081</p>
                    <p>Section:A</p>
                    </div>
            </div>
        </div>
    );
}
export default AdmissionsPopUpModal;