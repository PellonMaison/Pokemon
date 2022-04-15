import React from "react";
import { Link } from "react-router-dom";
import styles from '../Landing/Landing.module.css'

export default function Landing() {
    return (
        <div className={styles.landing}>
        <div className={styles.img} >
            <h1 className={styles.head}>Welcome to my Pokemon World!</h1>
            <Link to='/home'>
                <button className={styles.btn}>
                    Enter
                </button>
            </Link>
        </div>
        </div>
    )
}