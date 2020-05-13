import React from 'react';
import classes from './Profile.module.css';

const Profile = props =>
    <div className={classes.content}>
        <div><img width="100%" height="200px" src="https://jssors8.azureedge.net/demos/image-slider/img/faded-monaco-scenery-evening-dark-picjumbo-com-image.jpg" alt="logo" /></div>
        <div>
            <div><img height="100px" src="https://avatarko.ru/img/kartinka/1/multfilm_gomer.png" alt="avatar" /></div>
            <div>description</div>
        </div>
        <div>
            My posts
            <div>new post</div>
            <div>
                <div>post1</div>
                <div>post3</div>
            </div>
        </div>
    </div>

export default Profile;