import React from 'react'
import Layout from '../components/layout'

import soil1 from '../images/soil1.png';
import soil2 from '../images/soil2.png';
import soil3 from '../images/soil3.png';
import soil4 from '../images/soil4.png';
import soil5 from '../images/soil5.png';
import soil6 from '../images/soil6.png';
import soil7 from '../images/soil7.png';
import soil8 from '../images/soil8.png';
import opt from '../images/opt.gif';
import bus_factor from '../images/bus_factor.png';
import "../components/myStyles.css"

const PreviousWork = () => (
    <Layout>
        <div>
            <h1 className="center-header">Work Experience</h1>
            <hr />
            <h2 className="center-header">FarmIQ - Intern Junior Software Developer</h2>
            <h4 className="center-header">November to February 2019</h4>


            <div class="row">
                <img src={soil1} alt="soil-img1" className="column-4"/>
                <img src={soil2} alt="soil-img2" className="column-4"/>
                <img src={soil3} alt="soil-img3" className="column-4"/>
                <img src={soil4} alt="soil-img4" className="column-4"/>
            </div>

            {/* <img src={soil1} alt="soil-img1" className="soil-img"/>
            <img src={soil2} alt="soil-img2" className="soil-img"/>
            <img src={soil3} alt="soil-img3" className="soil-img"/>
            <img src={soil4} alt="soil-img4" className="soil-img"/> */}

            <p>My internship at FarmIQ involved developing a <a href="https://developers.google.com/web/progressive-web-apps/">Progressive Web App</a> using <a href="https://angular.io/">Angular 7</a>, with <a href="https://ngrx.io/">NGRX </a>(Redux inspired state management). The purpose of the app was to provide a platform where farmers could create, manage, and track creating <a href="https://www.landcareresearch.co.nz/publications/books/visual-soil-assessment-field-guide/download-field-guide">Visual Soil Assessments.</a> </p> 
            <p>Map functionality was implemented using <a href="https://openlayers.org/">OpenLayers</a> to display the outline of each paddock on the Farm, visually selecting paddocks, and placing markers. Backend created using Microsoft SQL Server, and Java Spring to perform REST calls to the FarmIQ server. Basic unit testing with Jasmine and Karma and E2E tests with Protractor. </p>
            <p>Offline Progressive Web App functionality was implemented using <a href="https://angular.io/guide/service-worker-intro">Angular Service Workers</a> with an <a href="https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API">IndexedDB</a> database to cache soil assessments on the user's device. I also developed another backend using MongoDB, Express, and GraphQL to store and query information on a server for practice. This backend was not completed or used but provided me with a valuable learning experience.</p>
            
            <p>Worked in an Agile team of four interns, utilizing fortnightly sprints, Kanban boards, and various planning sessions to ensure targets were being met. </p>
            
            <p>Towards the end of the internship, I gave a company-wide presentation to over 30 people, showing off our app and its functionality.</p>

            <div class="row">
                <img src={soil5} alt="soil-img5" className="column-4"/>
                <img src={soil6} alt="soil-img6" className="column-4"/>
                <img src={soil7} alt="soil-img7" className="column-4"/>
                <img src={soil8} alt="soil-img8" className="column-4"/>
            </div>

            <br />
            <hr />

            <h2 className="center-header">The Bus Factor</h2>
            <h4 className="center-header">March to November 2018</h4>
            <img src={bus_factor} alt="bus factor" className="full-width-img"/>
            <p>Open source project utilizing object detection techniques through OpenCV in Python and real-time machine learning classifiers such as YOLO to detect buses that run red lights. The Software is used on <a href="https://thebusfactor.party/">the Bus Factor podcast </a> run by staff at ZX Security.</p>
            <p>For more information on how it works, <a href="https://github.com/thebusfactor/p11/wiki/AI-Documentation">click here</a></p>

            <p><a href="https://github.com/thebusfactor/p11">Github</a></p>

            <img src={opt} alt="object detection" className="full-width-img"/>

            <br />
            <hr />

            <h2 className="center-header">Victoria University of Wellington – Summer Scholarship</h2>
            <h4 className="center-header">November 2017 to March 2018 – 400 hours</h4>
            <p>Assembling data-sets regarding blockchain technologies, (e.g. Bitcoin, Ethereum), by creating web scrapers/crawlers, parsers and preprocessing units in Python. </p>
            <p><a href="https://github.com/VUW-FAIR/blockchains_web_scraping">Github</a></p>

            <br />
            <hr />

            <h2 className="center-header">Victoria University of Wellington – Tutor (ENGR123)</h2>
            <h4 className="center-header">14th of July to 6th November 2017</h4>
            <p>Lab demonstrator and tutor for the course: <a href="https://www.victoria.ac.nz/courses/engr/123/2019/offering?crn=27044">Engineering Mathematics with Logic and Statistics</a>. Assisting students with questions and explaining lab material.</p>


        </div>
    </Layout>
)

export default PreviousWork;

    