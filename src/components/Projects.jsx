import { projects } from '../data/projects'
import arrowIcon from '../assets/arrow.png'

const Projects = () => {
  return (
    <section id='projects'>
        <p className='section__text__p1'>Browse My Recent</p>
        <h1 className='title'>Projects</h1>
        <div className='experience-details-container'>
            <div className='about-containers'>
                {projects.map((project, index) => {
                    return (
                        <div key={index} className='details-container color-container'>
                            <div className='article-container'>
                                <img src={project.image} alt={project.name} className='project-img'/>
                            </div>
                            <h2 className='experience-sub-title project-title'>
                                {project.name}
                            </h2>
                            <div className='btn-container'>
                                <button className='btn btn-color-2 project-btn' 
                                    onClick={() => {location.href=project.linkGithub}}>
                                    Github
                                </button>
                                <button className='btn btn-color-2 project-btn' 
                                    onClick={() => {location.href=project.linkDemo}}>
                                    Live Demo
                                </button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
        <img src={arrowIcon} alt="Arrow icon" className='icon arrow' onClick={() => location.href='./#projects'}/>
    </section>
  )
}

export default Projects