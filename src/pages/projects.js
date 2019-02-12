import React from 'react'
import Layout from '../components/layout'
import "../components/myStyles.css"

import dataland1 from '../images/dataland1.png'
import dataland2 from '../images/dataland2.jpg'
import pxljam1 from '../images/pxljam1.png'
import deathkrawl1 from '../images/deathkrawl1.png'
import ramsons1 from '../images/ramsons1.png'

const ProjectsPage = () => (
    <Layout>
        <div>
            <h1 className="center-header">Projects</h1>
            <p>For many years I have loved taking part in local events to develop software with others and to learn new technologies and skills outside of work and school.</p>
            
            <br />
            <hr />
            
            <h3 className="center-header">Dataland 2018</h3>

            {/* <div class="img-inline">
                <img src={dataland1} alt="dataland-img1" className="dataland-img"/>
                <img src={dataland2} alt="dataland-img2" className="dataland-img"/>
            </div> */}



            <p>Worked in a team of five to analyse data and develop an Android App during <a href="https://datalandnz.github.io/">Dataland 2018</a>, a 48 hour Hackathon hosted at the Ministry of Internal Affairs, Wellington. <b>Third place winner overall</b>, as well as award for most <b>engaging presentation</b>. </p>
            <p>We tackled the problem provided by the NZTA; to design an app or tool with the goal of reducing the massive road toll in New Zealand.</p> 
            <p>We created a passive app that alerts drivers when a road is a potential risk. This worked by passively notifying the driver when a potentially risky road has been entered through sound, providing a Visual Risk map to show previous crashes close to you, and daily push notifications with driving tips and roll toll statistics.</p>

            <div class="row">
                <img src={dataland1} alt="dataland-img1" className="column-1"/>
                <img src={dataland2} alt="dataland-img2" className="column"/>
            </div>

            <br />
            <hr />

            <h3 className="center-header">PxlJam 2017</h3>  

            <p>Worked in a team of five people to develop a 2D game with Unity using C# scripting for <a href="https://pxljam.nz/">PxlJam</a>, a 48-hour game making competition. (6pm Friday 15th – Sunday 17th September 2017)</p>
            
            <p>The game won an <b>award for the most polished game</b>.</p>
             
            <p><a href="https://procrat.github.io/orpheus/">OMG, you can play it online!</a></p>

            <p><a href="https://github.com/Procrat/orpheus">Github</a></p>

            <img src={pxljam1} alt="pxljam-img1" className="full-width-img"/>

            <br />
            <hr />

            <h3 className="center-header">DeathKrawl</h3>

            <p>Worked in a team of five to develop a Java-based Dungeon Crawler game (2017). The game implements design patterns such as Builder, Factory, State and MVC. </p>

            <p><a href="https://github.com/HarrisonBacordo/DeathKrawl">Github</a></p>

            <img src={deathkrawl1} alt="deathkrawl-img1" className="full-width-img"/>

            <br />
            <hr />

            <h3 className="center-header">BluJam</h3>
            <p>Worked in a team of 4 to create speedrunning platformer game during <a href="https://blujam.nz/">BluJam</a> 2017; a 48-hour game making competition. (6pm Friday 21st - Sunday 23th April 2017) </p>
            
            <p><a href="https://github.com/Bobbybill123/BlueShift">Github</a></p>

            <br />
            <hr />

            <h3 className="center-header">Web Development - Ramsons Fashion</h3>

            <p>Developed Website for relatives that own Indian clothing store (Jan 2016). You can find it <a href="http://www.ramsonsfashions.com/index.html">here</a>.</p> 
            
            <img src={ramsons1} alt="ramsons-img1" className="full-width-img"/>

        </div>
    </Layout>
)


export default ProjectsPage;

    