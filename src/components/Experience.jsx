import checkMarkIcon from '../assets/checkmark.png'
import { techsFront, techsBack } from '../data/techs'
import arrowIcon from '../assets/arrow.png'

const Experience = () => {
  return (
    <section id='experience'>
        <p className='section__text__p1'>Explore My</p>
        <h1 className='title'>Experience</h1>
        <div className='experience-details-container'>
            <div className='about-containers'>
                <div className='details-container'>
                    <h2 className='experience-sub-title'>Frontend Development</h2>
                    <div className='article-container'>
                        {techsFront.map((tech, index) => {
                            return (
                                <article key={index}>
                                    <img src={checkMarkIcon} alt="Experience icon"
                                    className='icon' />
                                    <div>
                                        <h3>{tech.name}</h3>
                                        <p>{tech.skillLvl}</p>
                                    </div>
                                </article>
                            )
                        })}
                    </div>
                </div>
                <div className='details-container'>
                    <h2 className='experience-sub-title'>Backend Development</h2>
                    <div className='article-container'>
                        {techsBack.map((tech, index) => {
                            return (
                                <article key={index}>
                                    <img src={checkMarkIcon} alt="Experience icon"
                                    className='icon' />
                                    <div>
                                        <h3>{tech.name}</h3>
                                        <p>{tech.skillLvl}</p>
                                    </div>
                                </article>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
        <img src={arrowIcon} alt="Arrow icon" className='icon arrow' onClick={location.href='./#projects'}/>
    </section>
  )
}

export default Experience