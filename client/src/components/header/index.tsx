import { Link } from 'react-router-dom'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import SearchIcon from '@mui/icons-material/Search'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import styles from './header.module.scss'

import flag from '../../assets/images/eng.png'

export const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <div className={styles.item}>
            <img src={flag} alt='' />
            <KeyboardArrowDownIcon />
          </div>
          <div className={styles.item}>
            <span>USD</span>
            <KeyboardArrowDownIcon />
          </div>
          <div className={styles.item}>
            <Link to='/products/1'>Women</Link>
          </div>
          <div className={styles.item}>
            <Link to='/products/2'>Men</Link>
          </div>
          <div className={styles.item}>
            <Link to='/products/3'>Children</Link>
          </div>
        </div>
        <div className={styles.center}>
          <Link to='/'>Katestore</Link>
        </div>
        <div className={styles.right}>
          <div className={styles.item}>
            <Link to='/'>Home</Link>
          </div>
          <div className={styles.item}>
            <Link to='/'>About</Link>
          </div>
          <div className={styles.item}>
            <Link to='/'>Contact</Link>
          </div>
          <div className={styles.item}>
            <Link to='/'>Stores</Link>
          </div>
          <div className={styles.icons}>
            <SearchIcon />
            <PersonOutlineOutlinedIcon />
            <FavoriteBorderOutlinedIcon />
            <div className={styles.cart}>
              <ShoppingCartOutlinedIcon />
              <span>0</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
