import React from 'react'
import styles from '../../styles/Footer.module.css'
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Link from 'next/link'
import Image from 'next/image';

const Footer = () => {
  return (
    <div className={styles.footer}>
        <div className={styles.content_container}>
            <div className={styles.upper_content}>
                <div className={styles.card}>
                    <h3>Discover Freshkhao</h3>
                    <ul>
                        <li><Link href='/'>Investor</Link></li>
                        <li><Link href='/about-freshkhao'>About Us</Link></li>
                        <li><Link href='/'>Takeaway</Link></li>
                        <li><Link href='/'>More</Link></li>
                        <li><Link href='/'>Gift Card</Link></li>
                        <li><Link href='/'>Careers</Link></li>
                        <li><Link href='/'>Engineering Blog</Link></li>
                        <li><Link href='/'>Design Blog</Link></li>
                        <li><Link href='/'>Connection</Link></li>
                        <li><Link href='/'>Newsroom</Link></li>
                    </ul>    
                </div>
                <div className={styles.card}>
                    <h3>Legal</h3>
                    <ul>
                        <li><Link href='/terms-conditions-freshkhao'>Terms and conditions</Link></li>
                        <li><Link href='/freshkhao-privacy-policy'>Privacy Policy</Link></li>
                        <li><Link href='/'>Cookies</Link></li>
                        <li><Link href='/'>Modern Slavery Statement</Link></li>
                        <li><Link href='/'>Tax Strategy</Link></li>
                        <li><Link href='/'>Section 172 Statement</Link></li>
                    </ul>    
                </div>
                <div className={styles.card}>
                    <h3>Discover Freshkhao</h3>
                    <ul>
                        <li><Link href='/freshkhao-contact'>Contact</Link></li>
                        <li><Link href='/'>FAQs</Link></li>
                        <li><Link href='/'>Brands</Link></li>
                        <li><Link href='/'>Locations</Link></li>
                    </ul>    
                </div>
                <div className={styles.card}>
                    <h3>Take Freshkhao with you</h3>
                    <ul>
                    <li className={styles.apple}>
                        <Link href='/top-up-your-app-wallet'>
                            <Image src='/apple.png' width="150" height="40" layout="fixed" />  
                        </Link>
                    </li>
                    <li className={styles.google}>
                        <Link href='/top-up-your-app-wallet'>
                             <Image src='/googlep.png' width="150" height="40" layout="fixed" />
                        </Link>
                    </li>
                    </ul>  
                </div>
            </div>
            <div className={styles.bottom_content}>
                <div className={styles.social_icon}>
                    <Link href='/'><FacebookRoundedIcon/></Link>
                    <Link href='/'><TwitterIcon/></Link>
                    <Link href='/'><InstagramIcon/></Link>
                    <Link href='/'><YouTubeIcon/></Link>
                </div>
                <div className={styles.copyright}>
                    <span>© 2022 Freshkhao</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer
