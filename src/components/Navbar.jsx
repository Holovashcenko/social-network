import React from 'react'
import s from './Navbar.module.css'

const Navbar = props =>
    <nav className={s.nav}>
        <div>
            <a href="" className={s.item}>Profile</a>
        </div>
        <div>
            <a href="" className={`${s.item}  ${s.active}`}>Messages</a>
        </div>
        <div>
            <a href="" className={s.item}>News</a>
        </div>
        <div>
            <a href="" className={s.item}>Music</a>
        </div>
        <div>
            <a href="" className={s.item}>Setting</a>
        </div>
    </nav>

export default Navbar