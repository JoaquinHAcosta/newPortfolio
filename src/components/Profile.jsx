import profilePic from '../assets/profile-pic.png'
import profileCV from '../assets/resume-jha.pdf'
import linkedinIcon from '../assets/linkedin.png'
import gitHubIcon from '../assets/github.png'

const Profile = () => {

    const openCV = () => {
        window.open(profileCV)
    }
  return (
    <section id='profile'>
        <div className='section__pic-container'>
            <img src={profilePic} alt="Profile picture" />
        </div>
        <div className='section__text'>
            <p className='section__text__p1'>Hello, I'm</p>
            <h1 className='title'>Joaquin Acosta</h1>
            <p className='section__text__p2'>Fullstack Developer</p>
            <div className='btn-container'>
                <button 
                    className='btn btn-color-2' 
                    onClick={openCV}
                >Download CV</button>
            
                <button 
                    className='btn btn-color-1'
                    onClick={location.href='./#contact'}
                >Contact Info</button>
            
            </div>
            <div id='socials-container'>
                <img src={linkedinIcon} alt="My Linkedin Profile" 
                className='icon'
                onClick={() => {location.href='https://www.linkedin.com/in/stratozoma/'}}/>
            
                <img src={gitHubIcon} alt="My Github Profile" 
                className='icon'
                onClick={() => {location.href='https://github.com/JoaquinHAcosta'}}/>
            </div>
        </div>
    </section>
  )
}

export default Profile