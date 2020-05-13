import React from 'react'
import s from './Post.module.css'

const Post = props =>
    <div className={s.item}>
        <img src="https://avatarko.ru/img/kartinka/1/multfilm_gomer.png" alt="avatar" />
        {props.message}
        <div className={s.like}>
            <span>Like</span>
        </div>
    </div>

export default Post