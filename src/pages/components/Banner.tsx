import React from 'react'
import styles from '../../styles/Banner.module.css'
import Image from 'next/image'

const Banner = () => {
  return (
    <div className={styles.container}>
        <div className={styles.one}>Banner
          <img src="burger.png" className={styles.burger_1} />
        </div>

        <div className={styles.three}>
          <h1>Restaurant food, takeaway and <br/>groceries. Delivered.</h1>
          <br/>
          <h4>Enter a postcode to see what we deliver</h4>
          <input type="text"/>
          <h5>Log in for your recent addresses.</h5> 
            
         </div>



        <div className={styles.two}>
            <img src="burger.png" className={styles.burger} />
            
        </div>
    </div>
  )
}

export default Banner
