import React from 'react'
import { getImageUrl } from '../../utils'
import styles from "./Contact.module.css"

export const Contact = () => {
  return (
    <footer id='contact' className={styles.container}>
        <div className={styles.text}>
            <h2>Contact</h2>
        <p>Feel free to reach out!</p>
        </div>
        <ul className={styles.links}>
            <li className={styles.link}>
                <img src={getImageUrl("gmail.png")} alt="Email Icon" className={styles.img}/>
                <a href="mailto:dpengmarais99@gmail.com">dpengmarais99@gmail.com</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl("github.png")} alt="LinkedIn Icon" className={styles.img}/>
                <a href="https://github.com/GrandDadDan">github.com/GrandDadDan</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl("linkedin.png")} alt="Email Icon" className={styles.img}/>
                <a href="https://www.linkedin.com/in/daniel-marais-oct">linkedin.com/daniel-marais</a>
            </li>
        </ul>

    </footer>
  )
}
