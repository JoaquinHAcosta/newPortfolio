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
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia ipsam cumque vero laborum aliquid dicta nihil! Magni, explicabo perspiciatis odit omnis cupiditate neque minima amet fugiat. Tempora, mollitia temporibus? Magni architecto delectus fugit saepe officia eligendi velit libero eius! Veritatis.</p>
                </div>
            </div>
        </div>
        <img src={arrowIcon} alt="Arrow icon" className='icon arrow' onClick={() => location.href='./#experience'}/>
    </section>
  )
}

export default About