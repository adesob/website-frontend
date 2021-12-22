import React from 'react'
import {Link} from 'react-router-dom'

const SplashInfo = (props) => {
    return (
        <div className = "infoBx">
              <div className = "cont" id = "cont1">
                <div id = "pBox">
                  <p> I'm currently in my final year studying Electrical Engineering and Computer Science. 
                    I love bridging hardware and software to develop impactful products—take a look at some of <Link to="/projects" id = "links" onClick = {() => { 
                                                                    props.projectsClick(); 
                                                                    props.statChange();
                                                                    }}><span>my work!</span></Link> 
                    &nbsp;Currently taking a&nbsp;

                    <a href="https://www.amazon.ca/Software-Architecture-Practice-Len-Bass/dp/0136886094/ref=sr_1_1?gclid=Cj0KCQiAk4aOBhCTARIsAFWFP9Ezr2na1XEocJp_v_XdTShN9l6h7-NoHYGyEb2DOMcZqE-yB8dKaFUaAtnQEALw_wcB&hvadid=208428820284&hvdev=c&hvlocphy=1002077&hvnetw=g&hvqmt=e&hvrand=8563369389995131112&hvtargid=kwd-299647313439&hydadcr=16109_9598899&keywords=software+architecture+in+practice&qid=1640131793&sr=8-1" 
                    id = "links" target = "_blank">
                      <span>deeper dive</span>

                    </a>
                    &nbsp;into software developement and taking on more software inclined projects (like this site). 
                    Click the links below if you'd like know more about me, my work and what I'm up to—or if you'd like to connect and chat!
                  </p>
                </div>  
              </div>
                  
              <div className = "cont" id = "cont2">
                  <div id = "imgBox">
                      <img  id = 'img' src = "illus.svg"></img>
                    </div>
                  </div>
              <div className="cont" id = "cont3"> 
                  <a href="https://ca.linkedin.com/in/adesobodu" id = "linkedin-av" target = "_blank"><i className="fa fa-linkedin" aria-hidden="true"></i></a>
                  <div id="linkedin" className="hidden">LinkedIn</div>

                  <a href="https://github.com/adesob" id = "github-av" target = "_blank"><i className="fa fa-github" aria-hidden="true"></i></a>
                  <div id="github" className="hidden">Github</div> 

                  <a href="resume-website-placeholder.pdf" id = "resume-av" target = "_blank"><i className="fa fa-address-card" aria-hidden="true"></i></a>
                  <div id="resume" className="hidden">Resume</div>

                  <Link to="/projects" id = "projects-av" onClick = {() => { 
                                                                    props.projectsClick(); 
                                                                    props.statChange();
                                                                    }}><i className="fa fa-code-fork" aria-hidden="true"></i></Link>
                  <div id="projects" className="hidden">Projects</div>
              </div>
        </div>
    )
}

export default SplashInfo
