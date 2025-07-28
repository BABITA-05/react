import './styles.css'
import CommonTitles from './components/common_titles';
import CommonCourses from './components/common_courses_card';
import CoursePopUpModal from './components/courses_popup_modal';
import{useState} from 'react';

function Courses() {
    const[isModalOpen,setModalOpen]=useState(false);
    return (
        <main>
            <CommonTitles title={"Courses"} description={"Not just any programs we provide the excellent teaching learning experience to prepare you in your career."} />
            <div className='courses-banner'>
                <CommonCourses imageUrl={"https://www.collegenp.com/uploads/2024/09/Shikshyalaya-College-Logo.png"}
                    title={"B.Sc.CSIT"}
                    description={"college"}
                    year={"2"}
                    semester={"2"} />
                <CommonCourses imageUrl={"https://www.collegenp.com/uploads/2024/09/Shikshyalaya-College-Logo.png"}
                    title={"BBA"}
                    description={"education"}
                    year={"4"}
                    semester={"8"} />
                <CommonCourses imageUrl={"https://www.collegenp.com/uploads/2024/09/Shikshyalaya-College-Logo.png"}
                    title={"MBA"}
                    description={"education"}
                    year={"2"}
                    semester={"4"} />

            </div>
            <button onClick={()=>setModalOpen(true)}>Click to Open Popup</button>
            <CoursePopUpModal isModalOpen={isModalOpen} setModelOpen={setModalOpen}/>
        </main>
    )
}
export default Courses;