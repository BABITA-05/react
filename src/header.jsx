import './styles.css'

function Header() {
    return (
        <div>
            <header>
                <div className='title'>SHIKSHYALAYA</div>
                <nav className="menu">
                    <a href='/'>Home</a>
                    <a href='/courses'>Courses</a>
                    <a href='/admissions'>Admissions</a>
                    <a href='#'>About</a>
                    <a href='#'>Contact</a>
                </nav>
                <div className='logout'>
                    <button>Logout</button>
                </div>
            </header>
        </div>
    );
}

export default Header