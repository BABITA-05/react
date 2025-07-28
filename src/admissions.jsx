

import AdmissionsPopUpModal from './components/admissions_popup_model';
import './styles.css'
import { useState } from 'react';

function Admissions() {
    const [admissions, setAdmissions] = useState(0)
    const [isModalOpen, setModalOpen] = useState(false);
    const increment = () => {
        setAdmissions(admissions + 1);
    }
    function decrement() {

        setAdmissions(admissions - 1);
    }
    return (
        <main>
            <h1>Admission Page</h1>
            <h2>No of Admissions:{admissions}</h2>
            <button onClick={increment}>Increase</button>

            <button onClick={decrement}>Decrease</button>
            <button onClick={() => setModalOpen(true)}>View Student Detail</button>
            <AdmissionsPopUpModal isModalOpen={isModalOpen} setModelOpen={setModalOpen} />
        </main>
    )
}
export default Admissions;