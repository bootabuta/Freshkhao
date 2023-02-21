import React from 'react'
import styles from '../../styles/Header.module.css'
import Link from 'next/link'
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
          <span>Freshkhao</span>
      </div>

      <div className={styles.items}>
        

      <span className={styles.button}>
          <Link href='/'>
            
              <KeyboardArrowDownIcon className={styles.icons}/>
              Partner with us
            
          </Link>
        </span> 

        
        <span className={styles.button}>
          <Link href='/'>
            
              <HomeIcon className={styles.icons}/>
              Sign up or login
            
          </Link>
        </span> 


        <span className={styles.button}>
          <Link href='/'>
            
              <MenuIcon className={styles.icons}/>
              Menu
            
          </Link>
        </span>             
      </div>
    </div>
  )
}

export default Header
