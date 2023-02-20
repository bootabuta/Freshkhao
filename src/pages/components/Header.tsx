import React from 'react'
import styles from '../../styles/Header.module.css'
import Link from 'next/link'
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
          <span>Freshkhao</span>
      </div>
      <div className={styles.items}>
        <span className={styles.button}>
          <Link href='/'>
            
              <MenuIcon/>
              Menu
            
          </Link>
        </span>
        <span className={styles.button}>
          <Link href='/'>
            
              <span style={{
                justifyItems: 'center'
              }}><MenuIcon/></span>
              <span>Menu</span>
            
          </Link>
        </span>
        <span className={styles.button}>
          <Link href='/'>
            
              <MenuIcon/>
              Menu
            
          </Link>
        </span>             
      </div>
    </div>
  )
}

export default Header
