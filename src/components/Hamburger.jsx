import { useState } from 'react'

const Hamburger = () => {

    const [ toggle, setToggle ] = useState(false)

    const toggleMenu = () => {
        setToggle(!toggle)
    }

    

    return (
        <nav id='hamburger-nav'>
            <div className='logo'>Joaquin Acosta</div>
            <div className='hamburger-menu'>
                <div className='hamburger-icon' onClick={toggleMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div className='menu-links'>
                    <li>
                        <a href="#experience" onClick={toggleMenu}>Experience</a>
                    </li>
                    <li>
                        <a href="#projects" onClick={toggleMenu}>Projects</a>
                    </li>
                    <li>
                        <a href="#contact" onClick={toggleMenu}>Contact</a>
                    </li>
                </div>
            </div>
        </nav>
    )
}

export default Hamburger