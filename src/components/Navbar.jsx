import React from 'react';
import classes from './Navbar.module.css';

const Navbar = props =>
    <nav className={classes.nav}>
        <div className={classes.item}>
            <a href="">Profile</a>
        </div>
        <div className={classes.item}>
            <a href="">Messages</a>
        </div>
        <div className={classes.item}>
            <a href="">News</a>
        </div>
        <div className={classes.item}>
            <a href="">Music</a>
        </div>
        <div className={classes.item}>
            <a href="">Setting</a>
        </div>
    </nav>

export default Navbar;