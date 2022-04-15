import React from "react";
import styles from '../SearchBar/SearchBar.module.css'

export default function SearchBar({ handleChange }){

    return (
        <div>
            <input className={styles.search}
             type={'text'}
             placeholder='    Search your Pokemon...'
             autoComplete='off'
             onChange={(e)=> handleChange(e)}
             
              />
        </div>
    )
}