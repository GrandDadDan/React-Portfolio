import React from 'react'
import { getImageUrl } from '../../utils';
import styles from './Hero.module.css';

export const Hero = () => {
  return <section className={styles.container}>
    <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Daniel!</h1>
        <p className={styles.description}>Postgraduate student, motion graphics designer, and freelance fullstack developer with 2 years exerperience using React and Node.JS</p>
        <a href="mailto:dpengmarais99@gmail.com" className={styles.contactBtn}>Email Me</a>
    </div>
    <img src={getImageUrl("heroImage.png")} alt="Hero"  className={styles.heroImg}/>
    <div className={styles.topBlur}/>
    <div className={styles.bottomBlur}/>
  </section>;
  
}

