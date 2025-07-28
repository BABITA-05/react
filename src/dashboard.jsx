import './styles.css'
import DashboardBanner from './components/dashboard_banner.jsx'
import CommonTitles  from './components/common_titles.jsx'
import CommonOurProgramsCard from './components/common_our_programs_card.jsx'
import CommonOurValuesCard from './components/common_ourvalues_card';
import CommonCoursesCard from './components/common_courses_card.jsx';




function Dashboard() {
    return (
        <main>
           <DashboardBanner/>
           <CommonTitles title={"OUR VALUES"} 
           description={"Guiding principles that shape our academic community and inspire excellence"}/>
           <CommonTitles title={"OUR PROGRAMS"}
           description={"Not just any programs, we provide the excellent teaching-learning experience to "} />




           <div className='our-programs'>
              <CommonOurProgramsCard
             title={"CSIT"}
             description={"Advance your career with degrees and programs at Shikshyalaya College, where academic excellence meets practical skills."}

             imageUrl={"https://media.edusanjal.com/gallery/shikshyalaya_6.jpg"}
             />


             <CommonOurProgramsCard
             title={"BBA"}
             description={"Shikshyalaya College is committed to providing a student-centered learning experience, supported by state-of-the-art facilities and a curriculum that integrates practical exposure with academic excellence."}
             imageUrl={"https://shikshyalayacollege.edu.np/wp-content/uploads/2024/08/Banner-About.png"}
             />

            </div>
            <div className='our-values-grid'>
            <CommonOurValuesCard
            iconUrl={"https://shikshyalayacollege.edu.np/wp-content/uploads/2024/08/excellence.png"}
            title={"Innovation and Creativity"}/>
            <CommonOurValuesCard
            iconUrl={"https://shikshyalayacollege.edu.np/wp-content/uploads/2024/08/excellence.png"}
            title={"Innovation and Creativity"}/>
            <CommonOurValuesCard
            iconUrl={"https://shikshyalayacollege.edu.np/wp-content/uploads/2024/08/excellence.png"}
            title={"Innovation and Creativity"}/>
            <CommonOurValuesCard
            
            iconUrl={"https://shikshyalayacollege.edu.np/wp-content/uploads/2024/08/excellence.png"}
            title={"Innovation and Creativity"}/>
            <CommonOurValuesCard
            iconUrl={"https://shikshyalayacollege.edu.np/wp-content/uploads/2024/08/excellence.png"}
            title={"Innovation and Creativity"}/>
            <CommonOurValuesCard
            iconUrl={"https://shikshyalayacollege.edu.np/wp-content/uploads/2024/08/excellence.png"}
            title={"Innovation and Creativity"}/>
            <CommonOurValuesCard
            iconUrl={"https://shikshyalayacollege.edu.np/wp-content/uploads/2024/08/excellence.png"}
            title={"Innovation and Creativity"}/>
              <CommonOurValuesCard
            iconUrl={"https://shikshyalayacollege.edu.np/wp-content/uploads/2024/08/excellence.png"}
            title={"Innovation and Creativity"}/>
            <CommonOurValuesCard
            iconUrl={"https://shikshyalayacollege.edu.np/wp-content/uploads/2024/08/excellence.png"}
            title={"Innovation and Creativity"}/>
            <CommonOurValuesCard
            iconUrl={"https://shikshyalayacollege.edu.np/wp-content/uploads/2024/08/excellence.png"}
            title={"Innovation and Creativity"}/>
            </div>


            


        </main>
    )
}

export default Dashboard