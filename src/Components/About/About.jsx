import React from 'react'
import './About.css'

const About = () => {
  return (
    <div className='about'>
        <div className="about-title">
            <h2>About Me</h2>
            <div className="about-section">
                <div className="about-para">
                    <p>I am a versatile Full-Stack Web Developer and UI/UX Designer specializing in building high-performance, user-centric web applications. My technical expertise spans front-end development with HTML5, CSS3, JavaScript, React.js, Next.js, and Angular, as well as back-end development using Node.js and Spring Boot. I am also proficient in CMS platforms such as WordPress (Divi, Elementor) and Webflow, creating dynamic, responsive, and visually appealing websites. With strong skills in UI/UX design, I conduct user research, wireframing, prototyping, and testing to deliver intuitive and accessible digital experiences. I also optimize websites for SEO and performance, ensuring fast-loading, discoverable, and scalable solutions.</p>
                    <p>My professional experience includes a hands-on Web Developer Internship, collaborating with clients like HD Camera USA, Closet Envee, and Golden Lush, gaining practical insights in project delivery and client communication. Passionate about continuous learning and emerging technologies, I aim to combine technical excellence, design sensibility, and user-focused solutions to build impactful digital products.</p>
                </div>
                <div className="about-skills">
                    <div className="skills-left">
                        <h3>Skills</h3>
                    </div>
                    <div className="skills-right">
                        <div className="about-skill"><p>React</p><hr style={{width:"80%"}}/></div>
                        <div className="about-skill"><p>Angular</p><hr style={{width:"80%"}}/></div>
                        <div className="about-skill"><p>Node.js</p><hr style={{width:"70%"}}/></div>
                        <div className="about-skill"><p>Spring Boot</p><hr style={{width:"60%"}}/></div>
                        <div className="about-skill"><p>Word Press</p><hr style={{width:"90%"}}/></div>
                        <div className="about-skill"><p>Webflow</p><hr style={{width:"80%"}}/></div>    
                    </div>
                 </div>              
                </div>
                <div className="about-work-experiences">
                    <h3>Professional Experience</h3>
                    <div className="professional-experience">
                        <div className="experience-left">
                            <h4>Web Developer Intern</h4>
                            <h5>Web Market Florida SEO, USA | Remote</h5>
                        </div>
                        <div className="experience-right">
                            <h4>01. 2025 to 07. 2025</h4>
                            <div className="experience-point"><li><p>Developed multiple websites using <span>WordPress</span>, leveraging <span>Divi and Elementor </span>theme builders to create responsive, user-friendly interfaces.</p></li></div>
                            <div className="experience-point"><li><p>Enhanced proficiency in <span>HTML, CSS, JavaScript, and PHP</span> to implement custom design and functionality</p></li></div>
                            <div className="experience-point"><li><p>Acquired knowledge in <span>SEO</span> best practices to improve site visibility and search rankings.</p></li></div>
                            <div className="experience-point"><li><p>Focused on website performance optimization, including understanding and improving <span>LCP (Largest Contentful Paint) and CLS (Cumulative Layout Shift)</span> metrics for better user experience and Core Web Vitals compliance.</p></li></div>
                        </div>
                    </div>
                </div>
                <div className="about-education">
                    <h3>Education</h3>
                    <div className="education">
                    <div className="education-left">
                        <h4>Bachelor of Science (Hons) in Computer Sciences.</h4>
                        <h5>Sabaragamuwa University of Sri Lanka</h5>
                    </div>
                    <div className="education-right">
                        <h4>2020 to 2025</h4>
                    </div>
                    </div>
                </div>
            </div>
        </div>

  )
}

export default About