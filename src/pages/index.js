import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import "../components/myStyles.css"


import dylan1 from '../images/dylan1.png'

const IndexPage = () => (
  <Layout>
  <div>
      <h1 className="center-header">About Me</h1>

      <p>Hi, I'm Dylan! I live in Wellington, New Zealand, and am currently a fourth-year Software Engineering Student at Victoria University.</p>

      <p>In my spare time, I like to read, play the piano, or dance Salsa or Bachata.</p>
      <p>I also spend my spare time programming and learning about new technologies or tools, or simply going to a local Hackathon or Conference. Some events I've been especially proud of attending were <a href="http://www.scaleconf.co.nz/2018/">ScaleConf 2018</a> and <a href="https://data.govt.nz/events/dataland-2018/">Dataland 2018</a>; where we won third place overall with a prize for best presentation engagement. </p> 

      <p>I like reading and could talk for hours about the new and interesting things I learn. One of my goals for 2019 was to read 32 books. I'm about 5 books through so far! Some of my favorites so far include <a href="https://forestsangha.org/teachings/books/treasures-of-the-buddha-s-teaching?language=English">Treatures of the Buddha's Teachings</a>, <a href="https://en.wikipedia.org/wiki/Mr._Mercedes">Mr. Mercedes by Stephen King</a>, and <a href="https://www.goodreads.com/book/show/34684622-leonardo-da-vinci">Leonardo da Vinci by Walter Isaacson</a>.</p> 
      <p>I like composing music in my spare time. Check out a few of the songs on my <a href="https://soundcloud.com/dylan-kumar">Soundcloud</a>.</p>
  
      <br />
      <hr />

      <h2 className="center-header">Get in Touch</h2>
      
      <p>I love meeting new people! Feel free to <a href="mailto:dylan.kumar@icloud.com">email me</a> at dylan.kumar@icloud.com if you want to chat, work together or just hang out.</p>

      <p>You can also check out my <a href="https://github.com/dknz2008">Github</a> or <a href="https://www.linkedin.com/in/dylan-kumar-326a4455/">LinkedIn</a>.</p>

      <img src={dylan1} alt="Dylan-img1" className=""/>
  </div>
</Layout>
)

export default IndexPage
