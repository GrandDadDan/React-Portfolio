import React from 'react'
import { getImageUrl } from '../../utils'

export const About = () => {
  return <section>
    <h2>About</h2> 
    <div><img src={getImageUrl("aboutImage.png")} width= {400} alt="about" /></div>
    <ul>
        <li><img src={getImageUrl("htmlImage.png")} width={100} alt="" />
        <div>
        <h3>Frontend Developer</h3>
        <p>I am a self-taught frontend developer with freelancing experience in building responsive and optimized sites</p>
        </div>
            </li>
        <li><img src={getImageUrl("serverImage.png")} width={100} alt="" />
        <div>
        <h3>Backend Developer</h3>
        <p></p>
        </div>
            </li>
        <li><img src={getImageUrl("cssImage.png")} width={100} alt="" /></li>
    </ul>
  </section>
}

