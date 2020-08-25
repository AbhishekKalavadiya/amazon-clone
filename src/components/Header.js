import React from 'react'
import { Link } from 'react-router-dom'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import './Header.css'

function Header() {
    return (
        <nav className='header'>

            {/* Logo on left */}
            <Link to='/'>
                <img  className='header__logo' src= 'https://pngimg.com/uploads/amazon/amazon_PNG11.png' alt='amazon logo' />
            </Link>

            {/* Search bar */}
            <div className='header__search'>
                <input className='header__searchInput' type='text' />
                <SearchIcon className='header__searchIcon' />
            </div>

            {/* 3 link */}
            <div className='header__nav' >
                <Link to='/login' className='header__link'>
                    <div className='header__option'>
                        <span className='header__optionLineOne'>hello abhi</span>
                        <span className='header__optionLineTwo'>Sign In</span>
                    </div>
                </Link>

                <Link to='/' className='header__link'>
                    <div className='header__option'>
                        <span className='header__optionLineOne'>Return</span>
                        <span className='header__optionLineTwo'>& Orders</span>
                    </div>
                </Link>

                <Link to='/' className='header__link'>
                    <div className='header__option'>
                        <span className='header__optionLineOne'>your</span>
                        <span className='header__optionLineTwo'>Prime</span>
                    </div>
                </Link>

            </div>

            {/* basket icon with number */}
            <Link to='/checkout' className='header__link'>
                <div className='header__optionBasket'>
                    <ShoppingBasketIcon />
                    <span className='header__optionLineTwo header__basketCount'>0</span>
                </div>
            </Link>

        </nav>
    )
}

export default Header
