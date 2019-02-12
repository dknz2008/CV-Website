import React from 'react'
import Layout from '../components/layout'
import "../components/myStyles.css"

import angular1 from '../images/angular1.png'
import react1 from '../images/react1.png'
import java1 from '../images/java1.jpg'
import python1 from '../images/python1.png'

import reactnative1 from '../images/react-native1.png'
import ionic1 from '../images/ionic1.jpg'

import node1 from '../images/nodejs1.jpg'
import express1 from '../images/express1.png'
import graphql1 from '../images/graphql1.png'
import mongodb1 from '../images/mongodb1.png'


const SkillsPage = () => (
    <Layout>
        <div>

            <h1 className="center-header">Skills</h1>
            <hr />
            <h2 className="center-header">Web Development</h2>
            <hr />  

            <div className="cc">
                <h3 className="">Angular</h3>
                <img src={angular1} alt="angular-img1" className="skills-img-sm"/>
            </div>

            <p>Over my 2018-2019 Summer, I was an Intern software developer at FarmIQ. I worked in a team to develop a progressive Web App in Angular 7. I also utilized NGRX/@store (Redux inspired) state management and NGRX/@effects (side effects library) for learning purposes.</p>

            <br />
            <hr />   
            
            <div className="cc">
                <h3 className="">React</h3>
                <img src={react1} alt="react-img1" className="skills-img-sm"/>
            </div>
            <p>In my spare time, I've built websites in React. I learned this from Udemy courses as well as developing a marketplace app during SWEN325 (React Native). I've also used vanilla Redux for React.</p>
            <p>This website is built using <a href="https://www.gatsbyjs.org/">Gatsby</a> (which is a static site generator built on React).</p>

            <br />
            <hr />   

            <h2 className="center-header">Languages</h2>
            <hr />  

            <div className="cc">
                {/* <h3 className="">Java</h3> */}
                <img src={java1} alt="java-img1" className="skills-img-sm"/>
            </div>
            <p>From 2015 I've been learning Java and have heavily utilized it through University and personal projects. Java is the language both taught used the most through my time at University and I enjoy programming in it.</p>
            <p>Notable libraries include UI libraries: Java Swing, JavaFX, and Gradle for managing builds. I also used Spring Boot during my contribution to Open Source Project <a href="https://github.com/FAForever/downlords-faf-client">downlords-faf-client</a>. You can view my Essay on the system architecture at the bottom of this <a href="https://github.com/FAForever/downlords-faf-client/wiki/Application-Design">page</a>.</p>


            <br />
            <hr /> 

            <div className="cc">
                <img src={python1} alt="python-img1" className="skills-img-sm"/>
            </div>

            <p>My Summer Scholarship during 2017 involved me creating web crawlers in Python. I also used Python during 2018 with Machine Learning tasks during courses COMP307, COMP309, as well as during the Bus Factor Open Source Project. You can check these out under my Work Experience. I feel fairly comfortable with Python. </p>

            <br />
            <hr /> 

            <h3 className="center-header">Web based App Development</h3>
            <hr />  

            <div class="cc">
                <img src={ionic1} alt="ionic-img1" className="skills-img-sm"/>
                <img src={reactnative1} alt="reactnative-img1" className="skills-img-sm"/>
            </div>

            <p>During <a href="https://www.victoria.ac.nz/courses/swen/325/2018/offering?crn=30041">Software Development for Mobile Platforms: SWEN325</a> at Victoria University, I created three apps. Two of them were in <a href="https://ionicframework.com/">Ionic</a>, one in <a href="https://facebook.github.io/react-native/">React Native</a>. Overall I achieved an <b>A</b> Grade for the course. </p>

            <br />
            <hr /> 

            <h3 className="center-header">Backend Development</h3>
            <hr />  

            <div class="img-inline">
                <img src={mongodb1} alt="mongodb1-img1" className="skills-img-sm"/>
                <img src={node1} alt="node-img1" className="skills-img-sm"/>
                <img src={express1} alt="express-img1" className="skills-img-sm"/>
                <img src={graphql1} alt="graphql1-img1" className="skills-img-sm"/>

            </div>

            <p>I've dabbled in backend development in JavaScript and made a backend during my Internship and spare time. </p>

            <p>I also created a website that used a MySQL backend with PHP back in the day (2015), so I understand how it works.</p>

            <br />
            <hr /> 

            <h3 className="center-header">Other Skills</h3>
            <hr />  
            <p>Machine Learning (COMP307, COMP309), C Programming Language (NWEN241/NWEN243), IndexedDB, OpenLayers, Keras, OpenCV.</p>

        </div>
    </Layout>
)


export default SkillsPage;

    