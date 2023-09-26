import aboutPic from '../assets/about-pic.jpg'
import experienceIcon from '../assets/experience.png'
import arrowIcon from '../assets/arrow.png'

const About = () => {
  return (
    <section id='about'>
        <p className='section__text__p1'>Get To Know More</p>
        <h1 className='title'>About Me</h1>
        <div className='section-container'>
            <div className='section__pic-container'>
                <img src={aboutPic} alt="Profile picture" className='about-pic' />
            </div>
            <div className='about-details-containers'>
                <div className='about-containers'>
                    <div className='details-container'>
                        <img src={experienceIcon} alt="" className='icon'/>
                        <h3>Experience</h3>
                        <p>1 year <br /> Fullstack Development</p>
                    </div>
                    <div className='details-container'>
                        <img src={experienceIcon} alt="" className='icon'/>
                        <h3>Education</h3>
                        <p>Fullstack Developer<br /> Henry Bootcamp</p>
                    </div>
                </div>
                <div className='text-container'>
                    <p>
                    👨‍🎓 Young student passionate about Full Stack Web Programming, driven by an insatiable thirst for knowledge and challenges. My versatility, commitment and constant search for quality define my approach to work.
                    <br /><br />
                    Strengths that I consider notable in me:
                    <br />
                    📚 Hunger for knowledge: I always seek to learn and improve, staying updated on technologies and trends.
                    <br />
                    🤝 Team adaptability: My versatility allows me to collaborate effectively with different personalities and roles.
                    <br />
                    💪 Determination and ambition: My commitment and loyalty to the goals I set drive my potential.
                    <br /><br />
                    My passion and dedication, backed by my focus on continuous learning and constant improvement, set me apart as a developer looking to make a difference. 🚀
                    </p>
                </div>
            </div>
        </div>
        <img src={arrowIcon} alt="Arrow icon" className='icon arrow' onClick={() => location.href='./#experience'}/>
    </section>
  )
}

export default About