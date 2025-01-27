import React from 'react'
import { getImageUrl } from '../../utils'
import styles from "./About.module.css"

export const About = () => {
  return <section className={styles.container} id="about">
    <h2 className={styles.title}>About</h2> 
    <div className={styles.content}>
        <img src={getImageUrl("aboutImage.png")} 
        width= {400} 
        alt="about"
        className={styles.aboutImage} />
    <ul className={styles.aboutItems}>
        <li className={styles.aboutItem}>
            <img src={getImageUrl("htmlImage.png")} width={100} alt="" />
        <div className={styles.aboutItemText}>
        <h3>Frontend Developer</h3>
        <p>Self taught in building responsive and optimized frontend websites.</p>
        </div>
            </li>
        <li className={styles.aboutItem}>
            <img src={getImageUrl("serverImage.png")} width={100} alt="" />
        <div className={styles.aboutItemText}> 
        <h3>Backend Developer</h3>
        <p>Self taught in backend development using APIs and databases systems.</p>
        </div>
            </li >
        <li className={styles.aboutItem}>
           
            <img src={getImageUrl("cssImage.png")} width={100} alt="" />
            <div className={styles.aboutItemText}>
            <h3>UI Design</h3>
            <p>Strong attention to detail in designing beautiful websites though CSS and Bootstrap, and the creativity of motion graphic design.</p>
            </div>
            </li>
    </ul>
    </div>
  </section>
}

